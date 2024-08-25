import React from "react";
import "../../assets/css/home.css";
import EnterprisesHeader from "./EnterprisesSettings/EnterprisesHeader";
import Track from "../../assets/images/Track-Order-CreateShift.png";
import CreateShift from "../../assets/images/CreateShift-Calender.png";
import Home from "../../assets/images/home-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const EnterpriseCreateShiftSelectLocation = () => {
  const company = [
    {
      name: "North Street Franchise",
      address: "North Street, ABC",
    },
    {
      name: "North Street Franchise",
      address: "North Street, ABC",
    },
    {
      name: "North Street Franchise",
      address: "North Street, ABC",
    },
    {
      name: "North Street Franchise",
      address: "North Street, ABC",
    },
    {
      name: "North Street Franchise",
      address: "North Street, ABC",
    },
    {
      name: "North Street Franchise",
      address: "North Street, ABC",
    },
    {
      name: "North Street Franchise",
      address: "North Street, ABC",
    },
    {
      name: "North Street Franchise",
      address: "North Street, ABC",
    },
    {
      name: "North Street Franchise",
      address: "North Street, ABC",
    },
  ];

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
              <div className="enterpriseNew-ScheduletypeMainCard">
                <h4 className="enterpriseNew-ScheduleSelectType">
                  Select company location
                </h4>

                <div className="enterprise-OneTimeCompanyLocMainCard">
                  {company.map((company, index) => (
                    <Link
                      key={index}
                      to="/enterprises-createshift-serviceselect"
                      className="enterprise-OneTimeCompanyLocCard"
                    >
                      <img
                        className="enterprise-OneTimeHomeIcon"
                        src={Home}
                        alt="icon"
                      />
                      <h4 className="enterprise-OneTimeCompanyName">
                        {company.name}
                      </h4>
                      <div className="enterprise-OneTimeCompanyAddressCard">
                        <FontAwesomeIcon
                          className="enterprise-OneTimeLocDot"
                          icon={faLocationDot}
                        />
                        <p className="enterprise-OneTimeCompanyAddress">
                          {company.address}
                        </p>
                      </div>
                    </Link>
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

export default EnterpriseCreateShiftSelectLocation;
