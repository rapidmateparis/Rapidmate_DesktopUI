import React from "react";
import "../../assets/css/home.css";
import Approved from "../../assets/images/Booking-Approved.png";
import Celebration from "../../assets/images/Celebration-Bg.png";
import Logo from "../../assets/images/Logo-icon.png";
import { Link } from "react-router-dom";

const EnterpriseScheduleApproved = () => {
  return (
    <>
      <section className="deliveryboy-thankyouSec">
        <div className="enterpriseSchdule-ApprovedCard">
            <img className="enterpriseSchdule-ApprovedImg" src={Celebration} alt="Img"/>
        </div>
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
                      className="deliveryboy-ScheduleApprovedImg"
                      src={Approved}
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
                        to=""
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

export default EnterpriseScheduleApproved;
