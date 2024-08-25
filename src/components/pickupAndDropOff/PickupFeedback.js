import React, { useState } from "react";
import "../../assets/css/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import FeedbackImg from "../../assets/images/Feedback-img.png";
import PickupThanksFeedbackModal from "./PickupThanksFeedbackModal";
import PickupHeader from "./PickupSettings/PickupHeader";

const PickupFeedback = () => {
  const [deliveryBoyRating, setDeliveryBoyRating] = useState(0);
  const [experienceRating, setExperienceRating] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  // Function to handle star clicks
  const handleStarClick = (rating, setter) => {
    setter(rating);
  };

  // Function to render stars
  const renderStars = (rating, setter) => {
    return [...Array(5)].map((_, index) => {
      const starRating = index + 1;
      return (
        <div
          key={starRating}
          className={`pickupFeedback-StarCard ${
            rating >= starRating ? "selected" : ""
          }`}
          onClick={() => handleStarClick(starRating, setter)}
        >
          <FontAwesomeIcon
            className={`pickupFeedback-StarsIcons ${
              rating >= starRating ? "selected" : ""
            }`}
            icon={faStar}
          />
          <p className="pickupfeedback-ratingtext">
            {["Very poor", "Poor", "Average", "Good", "Excellent"][index]}
          </p>
        </div>
      );
    });
  };

  return (
    <>
      {/* Header Start Here  */}
      <PickupHeader />
      {/* Header End Here  */}
      <section className="pickupfeedback-Sec">
        <div className="row manageRow">
          <div className="col-md-12">
            <div>
              <div className="pickupFeedback-DeliveryCompletedUpperCard">
                <div>
                  <h4 className="pickupFeedback-DeliveryCompletedText">
                    Delivery complete!
                  </h4>
                  <p className="pickupFeedback-subTitleText">
                    Please tell us about your experience
                  </p>
                </div>
                <div className="pickupFeedback-DeliveryCompleteCard">
                  <img
                    className="pickupFeedback-Img"
                    src={FeedbackImg}
                    alt="feedbackIcon"
                  />
                </div>
              </div>

              <div className="pickupFeedback-DeliveryCompletedLowerCard">
                <div className="pickupFeedback-deliveryboyCard">
                  <h4 className="pickupFeedback-DeliveryboyText">
                    How would you rate the delivery boy?
                  </h4>
                  <div className="pickupfeedback-allStarsCard">
                    {renderStars(deliveryBoyRating, setDeliveryBoyRating)}
                  </div>
                </div>

                <div className="pickupFeedback-deliveryboyCard">
                  <h4 className="pickupFeedback-DeliveryboyText">
                    How would you rate the experience?
                  </h4>
                  <div className="pickupfeedback-allStarsCard">
                    {renderStars(experienceRating, setExperienceRating)}
                  </div>
                </div>

                <div className="pickupFeedback-actionBtnCard">
                  <button className="pickupFeedback-downloadInvoiceBtn">
                    <FontAwesomeIcon
                      className="pickupFeedback-downloadIcon"
                      icon={faDownload}
                    />
                    Download invoice
                  </button>

                  <div>
                    <button className="pickupFeedback-remindLaterBtn">
                      Remind later
                    </button>
                    <button
                      onClick={openModal}
                      className="pickupFedback-SubmitBtn"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PickupThanksFeedbackModal
          show={showModal}
          handleClose={() => setShowModal(false)}
        />
      </section>
    </>
  );
};

export default PickupFeedback;
