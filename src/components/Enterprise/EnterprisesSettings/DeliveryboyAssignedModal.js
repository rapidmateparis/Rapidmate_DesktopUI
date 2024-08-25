import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../../../assets/css/DeliveryboyAssignedModal.css";
import Driver from "../../../assets/images/Driver-Image.jpeg";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DeliveryboyAssignedModal = ({ show, handleClose }) => {
  const [showOtpModal, setShowOtpModal] = useState(false);

  const handleEmailSubmit = () => {
    // Handle email submission logic here
    setShowOtpModal(true);
    handleClose();
  };

  const handleCloseOtpModal = () => setShowOtpModal(false);

  return (
    <section>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        dialogClassName="modal-main"
      >
        <Modal.Header>
          <div className="modal-main-header">
            <FontAwesomeIcon
              className="modal-back-close"
              onClick={handleClose}
              icon={faArrowLeft}
            />
            <div className="Driverlogo-header-main-card">
              <div>
                <img className="driver-img-small" src={Driver} alt="Logo" />
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="Deliveryboy-title-header-card">
            <h2 className="forgot-password-title">Delivery boy assigned</h2>
            <p className="forgot-password-subtitle">
              John Doe accepted your delivery schedule
            </p>
          </div>

          <div className="enterpriseDeliveryboy-ProfileCard">
            <p className="enterpriseDeliveryboy-ProfileText">
              John Doe’s profile:
            </p>
            <div className="enterpriseDeliveryboy-DeliveriesMainCard">
              <div className="enterpriseDeliveryboy-DeliveriesCard">
                <h4 className="enterpriseDeliveryboy-DeliveriesCount">20</h4>
                <p className="enterpriseDeliveryboy-DeliveriesText">
                  Deliveries
                </p>
              </div>

              <div className="enterpriseDeliveryboy-DeliveriesCard">
                <h4 className="enterpriseDeliveryboy-DeliveriesCount">80</h4>
                <p className="enterpriseDeliveryboy-DeliveriesText">
                  Total hours
                </p>
              </div>

              <div className="enterpriseDeliveryboy-DeliveriesCard">
                <h4 className="enterpriseDeliveryboy-DeliveriesCount">4.9</h4>
                <p className="enterpriseDeliveryboy-DeliveriesText">Rating</p>
              </div>
            </div>
          </div>

          <div className="enterpriseDeliveryboy-ScheduleOverviewMainCard">
            <div className="enterpriseDeliveryboy-ScheduleOverviewCard">
              <p className="enterpriseDeliveryboy-ProfileText">
                Schedule overview:
              </p>
              <div className="enterpriseDeliveryboy-DeliveriesMainCard">
                <div className="enterpriseDeliveryboy-DeliveriesCard">
                  <h4 className="enterpriseDeliveryboy-DeliveriesCount">20</h4>
                  <p className="enterpriseDeliveryboy-DeliveriesText">
                    Deliveries
                  </p>
                </div>

                <div className="enterpriseDeliveryboy-DeliveriesCard">
                  <h4 className="enterpriseDeliveryboy-DeliveriesCount">80</h4>
                  <p className="enterpriseDeliveryboy-DeliveriesText">
                    Total hours
                  </p>
                </div>

                <div className="enterpriseDeliveryboy-DeliveriesCard">
                  <h4 className="enterpriseDeliveryboy-DeliveriesCount">4.9</h4>
                  <p className="enterpriseDeliveryboy-DeliveriesText">Rating</p>
                </div>
              </div>
              <div className="enterpriseDeliveryboy-ScheduleDateTimeCard">
                <p className="enterpriseDeliveryboy-ScheduleFrom">
                  From <b>20-02-24, 10 AM</b>
                </p>
                <p className="enterpriseDeliveryboy-ScheduleFrom">
                  To <b>10-03-24, 02 PM</b>
                </p>
              </div>
              <p className="enterpriseDeliveryboy-ScheduleDtailsText">
                Some days have different time slots, please see details!
              </p>
            </div>
            <div>
              <Link className="enterpriseDeliveryboy-ScheduleSeeDetailsCard">
                <p className="enterpriseDeliveryboy-ScheduleSeeDetailsText">
                  See details
                </p>
                <FontAwesomeIcon
                  className="enterpriseDeliveryboy-ScheduleSeeDetailsRightIcon"
                  icon={faArrowRight}
                />
              </Link>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="enterpriseDeliveryboy-ScheduleFooter">
          <div>
            <button onClick={handleEmailSubmit} className="enterpriseDeliveryboy-ScheduledOkBtn">Ok</button>
          </div>
          <div className="enterpriseDeliveryboy-ScheduledGotoBtnCard">
           <Link to="/enterprises-deliveryboy-shiftpage" className="enterpriseDeliveryboy-ScheduledGotoBtn">Go to shift page</Link>
          </div>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default DeliveryboyAssignedModal;
