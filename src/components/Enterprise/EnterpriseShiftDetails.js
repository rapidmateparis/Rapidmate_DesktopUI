import React from "react";
import "../../assets/css/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import EnterprisesHeader from "./EnterprisesSettings/EnterprisesHeader";
import Home from "../../assets/images/home-icon.png";
import Driver from "../../assets/images/Driver-Image.jpeg";
import Calender from "../../assets/images/Calender-withBg.png";

const EnterpriseShiftDetails = () => {
  return (
    <>
      {/* Header Start Here */}
      <EnterprisesHeader />
      {/* Header End Here */}
      <section className="pickupHistorySec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                <div className="enterpriseShiftDetails-HeaderCard">
                  <p className="pickupHistory-HeaderTitle">Shift Details</p>
                  <Link>
                    <FontAwesomeIcon
                      className="enterpriseShift-DetailGearIcon"
                      icon={faGear}
                    />
                  </Link>
                </div>
                <div className="enterpriseShiftDetail-companyDetailCard">
                  <div className="enterpriseShiftDetail-HomeIconCard">
                    <img
                      className="enterpriseShiftDetail-HomeIcon"
                      src={Home}
                      alt="homeIcon"
                    />
                    <h4 className="enterpriseShiftDetail-companyName">
                      North Street Franchise
                    </h4>
                  </div>
                  <div className="enterpriseShiftDetail-addresCard">
                    <FontAwesomeIcon className="enterpriseShiftDetail-locDotIcon" icon={faLocationDot} />
                    <p className="enterpriseShiftDetail-addressText">North Street, ABC</p>
                  </div>
                </div>

                <div className="enterpriseShiftDetail-DriverCardMain">
                    <div className="enterpriseShiftDetail-DriverCard">
                        <img className="enterpriseShiftDetail-DriverImg" src={Driver} alt="img"/>
                        <h4 className="enterpriseShiftDetail-driverName">John Doe</h4>
                    </div>
                    <p className="enterpriseShiftDetail-drivertruckDetails">VOLVO FH16 2022</p>
                </div>

                <div className="enterpriseShiftDetail-calenderCardMain">
                    <div className="enterpriseShiftDetail-calenderCard">
                        <img className="enterpriseShiftDetail-calenderImg" src={Calender} alt="calender-icon"/>
                        <p className="enterpriseShiftDetail-Starteddatetime">Started 11 AM to 04 PM</p>
                    </div>
                    <div className="enterpriseShiftDetail-shiftDurationCard">
                        <p className="enterpriseShiftDetail-shiftDurationText">Total duration: <b>5 hours</b></p>
                        <p className="enterpriseShiftDetail-shiftDurationText">Total deliveries: <b>12</b></p>
                    </div>
                    <p className="enterpriseShiftDetail-VehiclenameType">Motor Bike</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnterpriseShiftDetails;
