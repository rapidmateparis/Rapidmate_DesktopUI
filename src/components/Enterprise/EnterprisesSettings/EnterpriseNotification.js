import React from "react";
import "../../../assets/css/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faX, faClock } from "@fortawesome/free-solid-svg-icons";
import EnterprisesHeader from "./EnterprisesHeader";

const EnterpriseNotification = () => {
  const Notifications = [
    {
      title: "Delivery En Route",
      subtitle:
        "Your package is on its way to the destination, Track its progress!",
      time: "09:30 AM",
    },
    {
      title: "Delivery En Route",
      subtitle:
        "Your package is on its way to the destination, Track its progress!",
      time: "09:30 AM",
    },
    {
      title: "Delivery En Route",
      subtitle:
        "Your package is on its way to the destination, Track its progress!",
      time: "09:30 AM",
    },
    {
      title: "Delivery En Route",
      subtitle:
        "Your package is on its way to the destination, Track its progress!",
      time: "09:30 AM",
    },
    {
      title: "Delivery En Route",
      subtitle:
        "Your package is on its way to the destination, Track its progress!",
      time: "09:30 AM",
    },
    {
      title: "Delivery En Route",
      subtitle:
        "Your package is on its way to the destination, Track its progress!",
      time: "09:30 AM",
    },
  ];

  return (
    <>
      {/* Header Start Here  */}
      <EnterprisesHeader />
      {/* Header End Here  */}
      <section className="pickupNotifications-Sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                <h4 className="pickupNotification-HeadText">
                  All notifications
                </h4>

                <div>
                  {Notifications.map((notification, index) => (
                    <div key={index} className="pickupNotificationCard">
                      <div className="pickupnotification-seceondryMainCard">
                        <div className="pickupNotification-MainCard">
                          <FontAwesomeIcon
                            className="pickupNotification-bellIcon"
                            icon={faBell}
                          />
                          <div>
                            <h4 className="pickupNotification-DeliveryRouteText">
                              {notification.title}
                            </h4>
                            <p className="pickupNotification-Discription">
                              {notification.subtitle}
                            </p>
                          </div>
                        </div>

                        <div>
                          <button className="pickupNotification-closeBtn">
                            <FontAwesomeIcon icon={faX} />
                          </button>
                          <div className="pickupnotification-timeCard">
                            <FontAwesomeIcon
                              className="pickupNotification-clockIcon"
                              icon={faClock}
                            />
                            <p className="pickupnotification-TimeText">
                              {notification.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnterpriseNotification;
