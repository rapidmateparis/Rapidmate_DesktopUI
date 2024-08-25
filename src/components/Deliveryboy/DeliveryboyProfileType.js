import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/home.css";
import Logo from "../../assets/images/Logo-icon.png";
import Calender from "../../assets/images/Calender-Icon.png";
import Location from "../../assets/images/Location-Icon.png";
import Both from "../../assets/images/Calender-Both.png";
import { Link } from "react-router-dom";

const DeliveryboyProfileType = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  return (
    <section className="profile-choose-sec">
      <div className="container">
        <div>
          <a className="logo-card" href="#">
            <img className="logo" src={Logo} alt="logo" />
            <h2 className="companyName">Rapidmate</h2>
          </a>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="choose-profile-card">
              <h2 className="choose-profile-heading">
                How would you like to work?
              </h2>
              <p className="choose-profile-subheading">
                You can change this in settings later
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div
              className={`deliveryboy-ProfileTypeMainCard ${
                selectedCard === "shift" ? "selected" : ""
              }`}
              onClick={() => handleCardClick("shift")}
            >
              <div className="Deliveryboy-profiletypeImgCard">
                <img
                  className="deliveryboy-profileTypeImg"
                  src={Calender}
                  alt="Calender"
                />
              </div>
              <div>
                <h4 className="deliveryboy-profiletypeText">Shift wise</h4>
                <p className="deliveryboy-profileTypeDiscription">
                  You will set your availability for a time period on select
                  days
                </p>
              </div>
              <div className="deliveryboy-profiletypeCircleCard">
                <div
                  className={`deliveryboy-profileTypeCircle ${
                    selectedCard === "shift" ? "checked" : ""
                  }`}
                >
                  {selectedCard === "shift" && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className={`deliveryboy-ProfileTypeMainCard ${
                selectedCard === "pickup" ? "selected" : ""
              }`}
              onClick={() => handleCardClick("pickup")}
            >
              <div className="Deliveryboy-profiletypeImgCard">
                <img
                  className="deliveryboy-profileTypeImgLoc"
                  src={Location}
                  alt="Location-Icon"
                />
              </div>
              <div>
                <h4 className="deliveryboy-profiletypeText">
                  Pickup & dropoff
                </h4>
                <p className="deliveryboy-profileTypeDiscription">
                  Accept deliveries any time of the day
                </p>
              </div>
              <div className="deliveryboy-profiletypeCircleCard">
                <div
                  className={`deliveryboy-profileTypeCircle ${
                    selectedCard === "pickup" ? "checked" : ""
                  }`}
                >
                  {selectedCard === "pickup" && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className={`deliveryboy-ProfileTypeMainCard ${
                selectedCard === "both" ? "selected" : ""
              }`}
              onClick={() => handleCardClick("both")}
            >
              <div className="Deliveryboy-profiletypeImgCard">
                <img
                  className="deliveryboy-profileTypeImg"
                  src={Both}
                  alt="Both-Icon"
                />
              </div>
              <div>
                <h4 className="deliveryboy-profiletypeText">Both</h4>
                <p className="deliveryboy-profileTypeDiscription">
                  Work as shift wise and pickup/dropoff both
                </p>
              </div>
              <div className="deliveryboy-profiletypeCircleCard">
                <div
                  className={`deliveryboy-profileTypeCircle ${
                    selectedCard === "both" ? "checked" : ""
                  }`}
                >
                  {selectedCard === "both" && (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div>
            <Link
              to="/deliveryboy-thankyou-signup"
              className="pickup-signup-continueBtn"
              type="button"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryboyProfileType;
