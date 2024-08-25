import React, { useState, useEffect } from "react";
import "../../assets/css/home.css";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faLocationCrosshairs,
} from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import Package from "../../assets/images/Order-Tracking-Package.png";
import Truck from "../../assets/images/truck-image.png";
import Chat from "../../assets/images/Chat-Icon.png";
import Call from "../../assets/images/Call-Icon.png";
import Driver from "../../assets/images/Driver-Image.jpeg";
import PickupHomeMap from "./PickupHomeMap";
import { Link } from "react-router-dom";
import PickupHeader from "./PickupSettings/PickupHeader";

const PickupOrderTracking = () => {
  const [timeLeft30, setTimeLeft30] = useState(30 * 60); // 30 minutes in seconds
  const [timeLeft15, setTimeLeft15] = useState(15 * 60); // 15 minutes in seconds
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => alert("Copied to clipboard!"),
      (err) => console.error("Failed to copy text: ", err)
    );
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  useEffect(() => {
    const interval30 = setInterval(() => {
      setTimeLeft30((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval30);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    const interval15 = setInterval(() => {
      setTimeLeft15((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval15);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval30);
      clearInterval(interval15);
    };
  }, []);

  const step2Validator = () => {
    // Implement your validation logic if needed
    return true;
  };

  const step3Validator = () => {
    // Implement your validation logic if needed
    return true;
  };
  const step4Validator = () => {
    // Implement your validation logic if needed
    return true;
  };

  const onFormSubmit = () => {
    // handle the submit logic here
    console.log("Form Submitted");
  };

  return (
    <>
      {/* Header Start Here  */}
      <PickupHeader />
      {/* Header End Here  */}
      <section>
        <div className="row manageRow">
          <div className="col-md-3">
            <div>
              <div className="pickuporderTracking-addressCardMain">
                <div className="pickupOrderTracking-pickupAddressCard">
                  <FontAwesomeIcon
                    className="pickupOrderTracking-locIcon"
                    icon={faLocationDot}
                  />
                  <p className="pickupOrderTracking-addressText">
                    3891 Ranchview , California 62639
                  </p>
                </div>
                <div className="pickuporderTracking-borderShowOff" />
                <div className="pickupOrderTracking-pickupAddressCard">
                  <FontAwesomeIcon
                    className="pickupOrderTracking-locCrosshairsIcon"
                    icon={faLocationCrosshairs}
                  />
                  <p className="pickupOrderTracking-addressText">
                    3891 Ranchview , California 62639
                  </p>
                </div>
              </div>

              <div className="PickupOrderTracking-deliveryInfoCard">
                <div>
                  <h4 className="pickupOrdertracking-DeliveryStatus">
                    Delivery boy is on the way to pick your order up
                  </h4>
                  <div className="pickupOrderTracking-orderIdCard">
                    <p className="pickupOrderTracking-orderId">
                      Order ID: <b>9AS68D7G698GH</b>
                    </p>
                    <FontAwesomeIcon
                      className="pickupOrderTracking-copyIcon"
                      icon={faCopy}
                      onClick={() => copyToClipboard("9AS68D7G698GH")}
                    />
                  </div>
                  <div className="pickupOrderTracking-orderIdCard">
                    <p className="pickupOrderTracking-orderId">
                      OTP: <b>123456</b>
                    </p>
                    <FontAwesomeIcon
                      className="pickupOrderTracking-copyIcon"
                      icon={faCopy}
                      onClick={() => copyToClipboard("123456")}
                    />
                  </div>
                  <div>
                    <p className="pickupOrderTracking-timerCondown">
                      Pickup in: <b>{formatTime(timeLeft30)}</b>
                    </p>
                  </div>
                  <div className="pickupOrderTracking-packageImgCard">
                    <img
                      className="pickupOrderTracking-PackageImg"
                      src={Package}
                      alt="Package"
                    />
                    <h4 className="pickuporderTracking-EstimatedTime">
                      {formatTime(timeLeft15)}
                    </h4>
                    <p className="pickupOrderTracking-estimateText">
                      Estimated delivery time
                    </p>
                  </div>
                  <div>
                    <StepProgressBar
                      startingStep={0}
                      onSubmit={onFormSubmit}
                      steps={[
                        {
                          label: "A driver is assigned to you!",
                          subtitle: "",
                          name: "step 1",
                        },
                        {
                          label: "The company is preparing your order",
                          subtitle: "",
                          name: "step 2",
                          validator: step2Validator,
                        },
                        {
                          label: "Your order has been picked up for delivery",
                          subtitle: "",
                          name: "step 3",
                          validator: step3Validator,
                        },
                        {
                          label: "Order arriving soon!",
                          subtitle: "",
                          name: "step 3",
                          validator: step4Validator,
                        },
                      ]}
                    />
                  </div>

                  <div className="pickupOrderTracking-DriverCard">
                    <div className="pickupOrderTracking-DriverTruckCard">
                      <img
                        className="pickupOrderTracking-DriverImg"
                        src={Driver}
                        alt="Driver"
                      />
                      <img
                        className="pickupOrderTracking-TruckImg"
                        src={Truck}
                        alt="Truck"
                      />
                    </div>
                    <div>
                      <h4 className="pickupOrderTracking-DriverName">
                        John Doe
                      </h4>
                      <p className="pickupOrderTracking-TruckInfo">
                        VOLVO FH16 2022
                      </p>
                    </div>
                    <div className="pickupOrderTracking-ButtonCard">
                      <button className="pickupOrderTracking-ChatButton">
                        <img
                          className="pickupOrderTracking-ChatIcon"
                          src={Chat}
                          alt="chat"
                        />
                      </button>
                      <Link
                        to="/pickup-feedback"
                        className="pickupOrderTracking-ChatButton"
                      >
                        <img
                          className="pickupOrderTracking-CallIcon"
                          src={Call}
                          alt="call"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div>
              <PickupHomeMap />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PickupOrderTracking;
