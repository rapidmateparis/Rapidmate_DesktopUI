import React, { useState } from "react";
import "../../assets/css/home.css";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import EnterprisesHeader from "./EnterprisesSettings/EnterprisesHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faPlus,
  faX,
  faLocationDot,
  faLocationCrosshairs,
} from "@fortawesome/free-solid-svg-icons";
import Package from "../../assets/images/Package.png";
import { Link } from "react-router-dom";

const EnterprisePlaning = () => {
  const [value, setValue] = useState(new Date());

  // Define dates with different colors
  const dateStyles = [
    { date: new Date(2024, 6, 15), color: "orange" },
    { date: new Date(2024, 6, 20), color: "mediumaquamarine" },
    { date: new Date(2024, 6, 25), color: "steelblue" },
    { date: new Date(2024, 6, 28), color: "mediumpurple" },
  ];

  const tileClassName = ({ date }) => {
    const style = dateStyles.find(
      (d) =>
        date.getDate() === d.date.getDate() &&
        date.getMonth() === d.date.getMonth() &&
        date.getFullYear() === d.date.getFullYear()
    );
    return style ? `marked-date-${style.color}` : null;
  };

  return (
    <>
      {/* Header Start Here  */}
      <EnterprisesHeader />
      {/* Header End Here  */}
      <section className="enterprisePlaning-Sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="enterprisePlannig-headCard">
                <h4 className="enterprisePlanning-title">Planning</h4>
                <div className="enterprisePlannig-filterScheduleCard">
                  <button className="enterprisePlanning-filterBtn">
                    <FontAwesomeIcon icon={faFilter} />
                  </button>
                  <Link to="/enterprises-new-schedule" className="enterprisePlanning-NewScheduleBtn">
                    <FontAwesomeIcon
                      className="enterprisePlanning-plusIcon"
                      icon={faPlus}
                    />
                    New schedule
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div>
                <div className="enterprisePlanning-CalenderMain">
                  <Calendar
                    onChange={setValue}
                    value={value}
                    tileClassName={tileClassName}
                  />
                  <style>
                    {`
                    .react-calendar__tile {
                     position: relative;
                    }
                   .marked-date-orange::after {
                    content: '';
                    position: absolute;
               bottom: 5px;
            left: 50%;
            transform: translateX(-50%);
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: orange;
          }
          .marked-date-mediumaquamarine::after {
            content: '';
            position: absolute;
            bottom: 5px;
            left: 50%;
            transform: translateX(-50%);
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: mediumaquamarine;
          }
          .marked-date-steelblue::after {
            content: '';
            position: absolute;
            bottom: 5px;
            left: 50%;
            transform: translateX(-50%);
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: steelblue;
          }
            .marked-date-mediumpurple::after {
            content: '';
            position: absolute;
            bottom: 5px;
            left: 50%;
            transform: translateX(-50%);
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: mediumpurple;
          }
        `}
                  </style>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div>
                <div>
                  <div className="enterprisePlannigd-dateHeader">
                    <p className="enterprisePlannigd-dateText">June 4, 2024</p>
                    <button className="enterprisePlannig-dateCloseIcon">
                      <FontAwesomeIcon icon={faX} />
                    </button>
                  </div>
                  <div className="enterprisePlannig-deliveryByDateMainCard">
                    <div className="enterprisePlaning-packageMainCard">
                      <div className="enterprisePlaning-PackageHeaderCard">
                        <img
                          className="enterprisePlaning-packageImg"
                          src={Package}
                          alt="img"
                        />
                        <p className="enterprisePlaning-packageInfo">
                          Pickup on Jun 2, 2024 at 11:30 AM
                        </p>
                      </div>
                      <div className="enterpriseHome-addressFromCard">
                        <FontAwesomeIcon
                          className="enterpriseHome-addresslocDotIcon"
                          icon={faLocationDot}
                        />
                        <p className="enterpriseHome-AddressText">
                          From <b>North Street, ABC</b>
                        </p>
                      </div>

                      <div className="enterpriseHome-addressToCard">
                        <FontAwesomeIcon
                          className="enterpriseHome-addresslocDotIcon"
                          icon={faLocationCrosshairs}
                        />
                        <p className="enterpriseHome-AddressText">
                          To <b>5th Avenue, XYZ</b>
                        </p>
                      </div>

                      <div className="enterpriseFooter-CardId">
                        <p className="enterpriseHome-orderIdText">
                          Order ID: <span>98237469</span>
                        </p>
                      </div>
                    </div>

                    <div className="enterprisePlaning-packageMainCard">
                      <div className="enterprisePlaning-PackageHeaderCard">
                        <img
                          className="enterprisePlaning-packageImg"
                          src={Package}
                          alt="img"
                        />
                        <p className="enterprisePlaning-packageInfo">
                          Pickup on Jun 2, 2024 at 11:30 AM
                        </p>
                      </div>
                      <div className="enterpriseHome-addressFromCard">
                        <FontAwesomeIcon
                          className="enterpriseHome-addresslocDotIcon"
                          icon={faLocationDot}
                        />
                        <p className="enterpriseHome-AddressText">
                          From <b>North Street, ABC</b>
                        </p>
                      </div>

                      <div className="enterpriseHome-addressToCard">
                        <FontAwesomeIcon
                          className="enterpriseHome-addresslocDotIcon"
                          icon={faLocationCrosshairs}
                        />
                        <p className="enterpriseHome-AddressText">
                          To <b>5th Avenue, XYZ</b>
                        </p>
                      </div>

                      <div className="enterpriseFooter-CardId">
                        <p className="enterpriseHome-orderIdText">
                          Order ID: <span>98237469</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnterprisePlaning;
