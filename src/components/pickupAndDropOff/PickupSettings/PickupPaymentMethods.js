import React, { useState } from "react";
import "../../../assets/css/home.css";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faLocationDot,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import WalletLogo from "../../../assets/images/Wallet-Logo.png";
import PayPal from "../../../assets/images/PayPal-Logo.png";
import MasterCard from "../../../assets/images/MasterCard-Logo.png";
import PickupAddPaymentMethodsModal from "./PickupAddPaymentMethodsModal";

const PickupPaymentMethods = () => {
  const [showAddModal, setShowAddModal] = useState(false); // State for add modal

  const openAddModal = () => {
    setShowAddModal(true);
  };
  return (
    <section className="addressBook-MainSec">
      <div className="row">
        <div className="col-md-12">
          <div className="addressBook-addressCard">
            <p className="addressBook-headerTitleText">Payment methods</p>
            <button onClick={openAddModal} className="addressBook-plusIconBtn">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>

          <div>
            <div className="paymentMethod-walletCard">
              <div className="paymentMethod-WalletHeader">
                <p className="paymentMethod-walletHeading">
                  Rapid<b>Mate</b>
                </p>
                <img
                  className="paymentMethod-WalletLogo"
                  src={WalletLogo}
                  alt="logo"
                />
              </div>

              <div className="paymentMethod-WalletBalanceCard">
                <p className="paymentMethod-WalletBalance">
                  $<b>250</b>.85
                </p>
                <p className="paymentMethod-WalletText">Wallet balance</p>
              </div>

              <div className="paymentMethod-walletActionBtn">
                <button className="paymentMethod-WithdrawBtn">Withdraw</button>
                <button className="paymentMethod-WithdrawBtn">Add funds</button>
              </div>
            </div>

            <div>
              <p className="paymentMethod-cardsText">Cards</p>

              <div className="paymentMethod-addedCards">
                <img
                  className="paymentMethod-cardsLogos"
                  src={PayPal}
                  alt="PayPal"
                />
                <div>
                  <p className="paymentMethod-cardName">PayPal</p>
                  <p className="paymentmethod-userEmail">username@email.com</p>
                </div>
                <button className="paymentMethod-editBtn">
                  <FontAwesomeIcon icon={faPen} />
                </button>
              </div>

              <div className="paymentMethod-addedCards">
                <img
                  className="paymentMethod-MastercardsLogos"
                  src={MasterCard}
                  alt="PayPal"
                />
                <div>
                  <p className="paymentMethod-cardName">Axis Bank</p>
                  <p className="paymentmethod-userEmail">**** **** **** 1234</p>
                </div>
                <button className="paymentMethod-editBtn">
                  <FontAwesomeIcon icon={faPen} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PickupAddPaymentMethodsModal
        show={showAddModal}
        handleClose={() => setShowAddModal(false)}
      />
    </section>
  );
};

export default PickupPaymentMethods;
