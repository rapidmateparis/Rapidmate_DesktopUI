import React, { useState } from "react";
import "../../assets/css/home.css";
import DriverCircle from "../../assets/images/DriverBackgroun-Circle.png";
import DriverProfiles from "../../assets/images/DriverLoader-Profiles.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import PickupCancellationReasonModal from "./PickupCancellationReasonModal";
import PickupHeader from "./PickupSettings/PickupHeader";

const PickupLookingForDriver = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <>
      {/* Header Start Here  */}
      <PickupHeader />
      {/* Header End Here  */}
      <section className="lookingDriver-Section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                <div className="driverCancelCard">
                  <button className="driverCancelModalBtn" onClick={openModal}>
                    Cancel request
                  </button>
                </div>
                <div className="driver-background-middle-card">
                  <img
                    className="backgroundDriverCircle"
                    src={DriverCircle}
                    alt="Icon"
                  />
                  <div className="DriverProfile-CardMainBg">
                    <img
                      className="backgroundDriverCircle-Profiles"
                      src={DriverProfiles}
                      alt="Icon"
                    />
                    <h1 className="lookingDriverText">Looking for driver</h1>
                    <p className="lookingDriverSubText">
                      please wait, we are looking for a driver to pick up and
                      deliver your order..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------ Modal is Here -----------  */}
        <PickupCancellationReasonModal
          show={showModal}
          handleClose={() => setShowModal(false)}
        />
      </section>
    </>
  );
};

export default PickupLookingForDriver;
