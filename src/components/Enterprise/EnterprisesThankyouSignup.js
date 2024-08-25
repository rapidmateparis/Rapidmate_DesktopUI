import React from "react";
import "../../assets/css/home.css";
import Loader from "../../assets/images/Signup-Loader.png";
import Logo from "../../assets/images/Logo-icon.png";
import { Link } from "react-router-dom";

const EnterprisesThankyouSignup = () => {
  return (
    <>
      <section className="deliveryboy-thankyouSec">
        <div className="container">
          <div>
            <a className="logo-card" href="#">
              <img className="logo" src={Logo} alt="logo" />
              <h2 className="companyName">Rapidmate</h2>
            </a>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="deliveryboy-thankyoumainCard">
                <div>
                  <div className="deliveryboy-thankyouLoaderImgCard">
                    <img
                      className="deliveryboy-thankyouLoaderImg"
                      src={Loader}
                      alt="Loader-Img"
                    />
                  </div>
                  <div>
                    <h4 className="deliveryboy-thankyouSignupText">
                      Thank you for signing up
                    </h4>
                    <p className="deliveryboy-thankyouSignupDiscription">
                      We are reviewing your request and we will update you about
                      it shortly.
                    </p>

                    <div className="deliveryboy-thankyouSignupBtnCard">
                      <Link
                        to="/enterprises-home"
                        className="pickup-signup-continueBtn"
                        type="button"
                      >
                        Ok
                      </Link>
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

export default EnterprisesThankyouSignup;
