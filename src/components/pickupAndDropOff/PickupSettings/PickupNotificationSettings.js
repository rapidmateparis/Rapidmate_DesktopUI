import React, { useState } from "react";
import "../../../assets/css/home.css";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faLocationDot,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import UserProfile from "../../../assets/images/PickupUser-Profile.jpeg";

const PickupNotificationSettings = () => {
  const [isPushNotificationChecked, setIsPushNotificationChecked] = useState(true);
  const [isPromotionalEmailChecked, setIsPromotionalEmailChecked] = useState(false);

  const handlePushNotificationChange = () => {
    setIsPushNotificationChecked(!isPushNotificationChecked);
    // Additional logic for push notifications toggle
  };

  const handlePromotionalEmailChange = () => {
    setIsPromotionalEmailChecked(!isPromotionalEmailChecked);
    // Additional logic for promotional emails toggle
  };

  return (
    <section className="addressBook-MainSec">
      <div className="row">
        <div className="col-md-12">
          <div className="addressBook-addressCard">
            <p className="addressBook-headerTitleText">Address book</p>
            <button className="addressBook-plusIconBtn">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>

          <div>
            <div className="pickupPushNotification-enableCard">
              <p className="pickupPush-NotificationSettings">Receive push notifications</p>
              <Form>
                <Form.Check
                  type="switch"
                  id="push-notification-switch"
                  checked={isPushNotificationChecked}
                  onChange={handlePushNotificationChange}
                  className={isPushNotificationChecked ? "push-notifications-switch" : ""}
                />
              </Form>
            </div>

            <div className="pickupPushNotification-enableCard">
              <p className="pickupPush-NotificationSettings">Receive promotional emails</p>
              <Form>
                <Form.Check
                  type="switch"
                  id="promotional-email-switch"
                  checked={isPromotionalEmailChecked}
                  onChange={handlePromotionalEmailChange}
                  className={isPromotionalEmailChecked ? "promotional-email-switch" : ""}
                />
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickupNotificationSettings;
