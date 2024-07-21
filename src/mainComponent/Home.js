import React from "react";
import "../assets/css/home.css";
import CurvyBorder from "../assets/images/curvy-border.png";
import HomeBanner from "../assets/images/home-banner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

const Home = () => {
  return (
    <>
      <section className="home-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="home-info-card">
                <h1 className="home-title">
                  Your delivery & moving partner, in one tap
                </h1>
                <img className="border-curvy" src={CurvyBorder} alt="border" />
                <p className="home-discription">
                  Are you tired of the hassle and stress of ordering food,
                  requesting couriers, or moving to a new home? Look no further
                  than Rapidmate! Our app is designed to make your life easier
                  by providing a one-stop solution for all your delivery and
                  moving needs.
                </p>
                <div className="home-action-btns">
                  <a className="trail-button" href="#">
                    Try free trial
                  </a>
                  <a className="demo-btn" href="#">
                    <FontAwesomeIcon
                      className="play-icon"
                      icon={faCirclePlay}
                    />
                    <p className="demo-play">View Demo</p>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="bannerCard">
                <img className="home-banner" src={HomeBanner} alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
