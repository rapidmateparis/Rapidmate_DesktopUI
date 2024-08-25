import React from "react";
import "../../assets/css/home.css";
import EnterprisesHeader from "./EnterprisesSettings/EnterprisesHeader";
import ScheduleImg from "../../assets/images/schedule-calender.png";
import OneTime from "../../assets/images/One-TimePackage.png";
import Calender from "../../assets/images/Calender-withBg.png";
import CalenderClock from "../../assets/images/Calender-Clock.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const EnterprisesNewSchedule = () => {
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
                  <h4 className="enterpriseNew-ScheduleText">New schedule</h4>
                  <p className="enterpriseNew-ScheduleDiscription">
                    Let’s create new schedule for one time or for multiple hours
                  </p>
                </div>
                <div>
                  <img
                    className="enterpriseNew-ScheduleImg"
                    src={ScheduleImg}
                    alt="Img"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="enterpriseNew-ScheduletypeMainCard">
                <h4 className="enterpriseNew-ScheduleSelectType">
                  Select the type of schedule
                </h4>
                <div className="enterpriseNew-ScheduleMainLinkCards">
                  <Link
                    to="/enterprises-onetime-selectlocation"
                    className="enterpriseNew-ScheduleLinkCard"
                  >
                    <img
                      className="enterpriseNew-ScheduleOneTimeImg"
                      src={OneTime}
                      alt="icon"
                    />
                    <div>
                      <h4 className="enterpriseNew-ScheduleDeliveryTitle">
                        One time delivery
                      </h4>
                      <p className="enterpriseNew-ScheduleDeliveryDiscription">
                        Avail any service for fixed time and location
                      </p>
                    </div>
                    <FontAwesomeIcon
                      className="enterpriseNew-ScheduleRightArrow"
                      icon={faArrowRight}
                    />
                  </Link>

                  <Link
                    to="/enterprises-multiple-deliveries-selectlocation"
                    className="enterpriseNew-ScheduleLinkCard"
                  >
                    <img
                      className="enterpriseNew-ScheduleCalenderImg"
                      src={Calender}
                      alt="icon"
                    />
                    <div>
                      <h4 className="enterpriseNew-ScheduleDeliveryTitle">
                        Multiple deliveries
                      </h4>
                      <p className="enterpriseNew-ScheduleDeliveryDiscription">
                        Repeat single delivery for multiple days
                      </p>
                    </div>
                    <FontAwesomeIcon
                      className="enterpriseNew-ScheduleRightArrow"
                      icon={faArrowRight}
                    />
                  </Link>

                  <Link
                    to="/enterprises-createshift-selectlocation"
                    className="enterpriseNew-ScheduleLinkCard"
                  >
                    <img
                      className="enterpriseNew-ScheduleCalenderImg"
                      src={CalenderClock}
                      alt="icon"
                    />
                    <div>
                      <h4 className="enterpriseNew-ScheduleDeliveryTitle">
                        Create shift
                      </h4>
                      <p className="enterpriseNew-ScheduleDeliveryDiscription">
                        Avail any service for a time slot with multiple hours
                      </p>
                    </div>
                    <FontAwesomeIcon
                      className="enterpriseNew-ScheduleRightArrow"
                      icon={faArrowRight}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnterprisesNewSchedule;
