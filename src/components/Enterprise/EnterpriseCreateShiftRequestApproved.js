import React, { useState } from "react";
import "../../assets/css/home.css";
import EnterprisesHeader from "./EnterprisesSettings/EnterprisesHeader";
import Track from "../../assets/images/Track-Order-Shift-Approved.png";
import CreateShift from "../../assets/images/CreateShift-Calender.png";
import Loader from "../../assets/images/Signup-Loader.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DeliveryboyAssignedModal from "./EnterprisesSettings/DeliveryboyAssignedModal";

const EnterpriseCreateShiftRequestApproved = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      {/* Header Start Here  */}
      <EnterprisesHeader />
      {/* Header End Here  */}
      <section className="enterprisenew-ScheduleSec">
        <div>
          <div className="row manageRow">
            <div className="col-md-4">
              <div className="enterpriseNew-ScheduleTitleCard">
                <div>
                  <h4 className="enterpriseNew-ScheduleText">Create shift</h4>
                  <img
                    className="enterprise-CreateShiftTrackImg"
                    src={Track}
                    alt="img"
                  />
                </div>
                <div>
                  <img
                    className="enterprise-CreateShiftImg"
                    src={CreateShift}
                    alt="Img"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="enterpriseCreateShift-requestLoaderMainCard">
                <div className="enterpriseCreateShift-requestLoaderImageCard">
                  <img
                    className="enterpriseCreateShift-requestLoaderImage"
                    src={Loader}
                    alt="loader"
                  />
                </div>
                <h4 className="enterpriseCreateShift-requestSubmitText">
                  Schedule request submitted
                </h4>
                <p className="enterpriseCreateShift-requestSubmitDiscription">
                  We are reviewing your request and we will notify you soon via
                  email or phone call
                </p>
              </div>
              <div className="enterpriseCreateShift-requestSubmitBtnCard">
                <Link onClick={handleShowModal} className="enterpriseCreateShift-requestSubmitBtn">
                  Ok
                </Link>
              </div>
            </div>
          </div>
        </div>
        <DeliveryboyAssignedModal
        show={showModal}
        handleClose={handleCloseModal}
      />
      </section>
    </>
  );
};

export default EnterpriseCreateShiftRequestApproved;
