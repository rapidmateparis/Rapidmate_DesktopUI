import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faClock } from "@fortawesome/free-regular-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import "../../../assets/css/PickupNotificationModal.css";
import { Link } from "react-router-dom";

function EnterpriseNotificationModal({ show, handleClose }) {
  const handleSaveChanges = () => {
    // Implement save changes logic here, if needed
    handleClose();
  };

  const NotificationInfo = [
    {
      title: "Delivery En Route",
      discription:
        "Your package is on its way to the destination, Track its progress!",
      time: "09:30 AM",
    },
    {
      title: "Delivery En Route",
      discription:
        "Your package is on its way to the destination, Track its progress!",
      time: "09:30 AM",
    },
    {
      title: "Delivery En Route",
      discription:
        "Your package is on its way to the destination, Track its progress!",
      time: "09:30 AM",
    },
    {
      title: "Delivery En Route",
      discription:
        "Your package is on its way to the destination, Track its progress!",
      time: "09:30 AM",
    },
  ];

  return (
    <>
    <div>
      <Modal className="pickupNotification-modalMain" show={show} onHide={handleClose} centered>
        <Modal.Header>
          <div className="pickupNotification-header">
            <p className="pickupnotification-title">Notifications</p>
            <button
              onClick={handleClose}
              className="pickupNotification-clearBtn"
            >
              Clear all
            </button>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div>
            {NotificationInfo.map((info, index) => (
              <div className="pickupNotification-ModalCard">
                <FontAwesomeIcon
                  className="pickupNotification-notificationBell"
                  icon={faBell}
                />
                <div>
                  <h4 className="pickupNotification-deliveryStatus">
                    {info.title}
                  </h4>
                  <p className="pickupNotification-deliverydiscription">
                    {info.discription}
                  </p>
                  <div className="pickupNotification-ClockTimeCard">
                    <FontAwesomeIcon
                      className="pickupNotification-ClockIcon"
                      icon={faClock}
                    />
                    <p className="pickupNotification-deliveryTime">
                      {info.time}
                    </p>
                  </div>
                </div>
                <FontAwesomeIcon
                  className="pickupNotification-NotificationClose"
                  icon={faX}
                />
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <Link to="/enterprises-notification" className="pickupNotification-SeeallBtn">See all</Link>
          </div>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
}

export default EnterpriseNotificationModal;
