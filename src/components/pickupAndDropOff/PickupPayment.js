import React from "react";
import "../../assets/css/home.css";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPercent,
  faCheck,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import Truck from "../../assets/images/Truck.png";
import { Link } from "react-router-dom";
import PickupHeader from "./PickupSettings/PickupHeader";

const PickupPayment = () => {
  const checkboxTypes = ["checkbox"];

  return (
    <>
      {/* Header Start Here  */}
      <PickupHeader />
      {/* Header End Here  */}
      <section className="addPickupDetails-Sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                <div>
                  <a className="addPickup-DetailsBackArrow" href="#">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </a>
                  <h2 className="addPickupDetailsText">Payment</h2>
                  <p className="addPickupDetails-Subtext">
                    Please select a payment method
                  </p>
                </div>

                <div className="row">
                  <div className="col-md-8">
                    <div>
                      <div className="promoCodeCard-Payments">
                        <FontAwesomeIcon
                          className="paymentPromoCodeIcon"
                          icon={faPercent}
                        />
                        <Form.Control
                          className="promoCode-InputPayment"
                          type="text"
                          placeholder="Promo code"
                        />
                        <button className="paymentApplyCouponBtn">
                          <FontAwesomeIcon icon={faCheck} />
                        </button>
                      </div>

                      <p className="paymentDebitCreditCardsText">
                        Credi & Debit Cards
                      </p>

                      <div className="paymentsOff-CreaditCardInfo">
                        <FontAwesomeIcon
                          className="paymentsCards-infoCircle"
                          icon={faCircleInfo}
                        />
                        <p className="paymentCreditCardOfferText">
                          20% off on city bank credit card!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="paymentInvoiceCardMain">
                      <div className="paymentInvoiceTruckImageCard">
                        <img
                          className="paymentInvoive-TruckIcon"
                          src={Truck}
                          alt="icon"
                        />
                      </div>

                      <p className="paymentOrderSummaryText">Order Summary</p>

                      <div>
                        <div className="paymentInvoice-detailsText">
                          <p className="payment-addressDetailText">Pickup</p>
                          <p className="paymentMainDetailsText">
                            3891 Ranchview...
                          </p>
                        </div>

                        <div className="paymentInvoice-detailsText">
                          <p className="payment-addressDetailText">Drop-off</p>
                          <p className="paymentMainDetailsText">
                            1901 Thornridge Cir...
                          </p>
                        </div>

                        <div className="paymentInvoice-detailsText">
                          <p className="payment-addressDetailText">
                            Vehicle type
                          </p>
                          <p className="paymentMainDetailsText">Semi truck</p>
                        </div>

                        <div className="paymentInvoice-detailsText">
                          <p className="payment-addressDetailText">Distance</p>
                          <p className="paymentMainDetailsText">2.6 Km</p>
                        </div>

                        <div className="paymentInvoice-detailsText">
                          <p className="payment-addressDetailText">Time</p>
                          <p className="paymentMainDetailsText">23 min</p>
                        </div>

                        <div className="paymentTotalAmount-Card">
                          <p className="payment-TotalAmounttext">
                            Total amount
                          </p>
                          <p className="payment-TotalAmounttext">€34.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="addPickup-detailsBtnCard">
                  <button className="addPickup-detailsCancelBTn">Cancel</button>
                  <Link
                    to="/pickup-looking-for-driver"
                    className="addPickupDetails-NextBtn"
                  >
                    Pay Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PickupPayment;
