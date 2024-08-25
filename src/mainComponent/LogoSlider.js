import React from "react";
import "../assets/css/home.css";
import Subway from "../assets/images/Subway-Slider.png";
import Levis from "../assets/images/Levis-Slider.png";
import MacD from "../assets/images/Macd-Slider.png";
import CocaCola from "../assets/images/CocaCola-Slider.png";
import Airbnb from "../assets/images/Airbnb-Slider.png";

const LogoSlider = () => {
  return (
    <>
      <div className="slider">
        <div className="HomeourServices-TitleMainCard">
          <h2 className="HomeourServices-Title">Our clients</h2>
        </div>
        <div className="slide-track">
          <div className="slide">
            <img src={Subway} alt="Subway" />
          </div>
          <div className="slide">
            <img src={Levis} alt="Levis" />
          </div>
          <div className="slide">
            <img src={MacD} alt="MacD" />
          </div>
          <div className="slide">
            <img src={CocaCola} alt="CocaCola" />
          </div>
          <div className="slide">
            <img src={Airbnb} alt="Airbnb" />
          </div>
          <div className="slide">
            <img src={Subway} alt="Subway" />
          </div>
          <div className="slide">
            <img src={Levis} alt="Levis" />
          </div>
          <div className="slide">
            <img src={MacD} alt="MacD" />
          </div>
          <div className="slide">
            <img src={CocaCola} alt="CocaCola" />
          </div>
          <div className="slide">
            <img src={Airbnb} alt="Airbnb" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoSlider;
