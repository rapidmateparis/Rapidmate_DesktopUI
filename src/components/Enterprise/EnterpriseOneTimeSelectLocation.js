import React from "react";
import "../../assets/css/home.css";
import EnterprisesHeader from "./EnterprisesSettings/EnterprisesHeader";
import ScheduleImg from "../../assets/images/schedule-calender.png";
import Track from "../../assets/images/Track-Order-img.png";
import Package from "../../assets/images/One-TimePackage-big.png";
import Home from "../../assets/images/home-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const EnterpriseOneTimeSelectLocation = () => {
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
                  <h4 className="enterpriseNew-ScheduleText">
                    One time delivery
                  </h4>
                  <img
                    className="enterprise-OneTimeTrackImg"
                    src={Track}
                    alt="img"
                  />
                </div>
                <div>
                  <img
                    className="enterprise-OneTimePackageImg"
                    src={Package}
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
                    <Link key={index}
                      to="/enterprises-onetime-selectservicetype"
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

export default EnterpriseOneTimeSelectLocation;
