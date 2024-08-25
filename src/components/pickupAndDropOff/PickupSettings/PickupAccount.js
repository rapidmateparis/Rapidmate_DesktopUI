import React from "react";
import "../../../assets/css/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faArrowRight,
  faLocationCrosshairs,
} from "@fortawesome/free-solid-svg-icons";
import UserProfile from "../../../assets/images/PickupUser-Profile.jpeg";
import PickupAddressBook from "./PickupAddressBook";
import PickupNotificationSettings from "./PickupNotificationSettings";
import PickupPaymentMethods from "./PickupPaymentMethods";
import PickupChangePassword from "./PickupChangePassword";
import PickupAboutUs from "./PickupAboutUs";
import PickupHelp from "./PickupHelp";
import PickupHeader from "./PickupHeader";
import { Link, Outlet, useLocation } from "react-router-dom";

const PickupAccount = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      {/* Header Start Here */}
      <PickupHeader />
      {/* Header End Here */}
      <section className="pickupAccount-Sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="pickupAccount-UserHeaderCard">
                <img
                  className="pickupAccount-UserProfile"
                  src={UserProfile}
                  alt="User-Profile"
                />
                <div>
                  <h5 className="pickupAccount-HeaderUserName">John Doe</h5>
                  <p className="pickupAccount-HeaderUserEmail">
                    johndoe@email.com
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="pickupAccount-sidebarNav">
                <div
                  className={`pickupAccount-sideNavBtns ${
                    currentPath.includes("pickup-address-book") ? "active" : ""
                  }`}
                >
                  <Link
                    to="pickup-address-book"
                    className={`pickupAccount-NavLinkText ${
                      currentPath.includes("pickup-address-book")
                        ? "active-link"
                        : ""
                    }`}
                  >
                    Address book
                  </Link>
                </div>

                <div
                  className={`pickupAccount-sideNavBtns ${
                    currentPath.includes("pickup-payment-methods")
                      ? "active"
                      : ""
                  }`}
                >
                  <Link
                    to="pickup-payment-methods"
                    className={`pickupAccount-NavLinkText ${
                      currentPath.includes("pickup-payment-methods")
                        ? "active-link"
                        : ""
                    }`}
                  >
                    Payment methods
                  </Link>
                </div>

                <div
                  className={`pickupAccount-sideNavBtns ${
                    currentPath.includes("billing-details") ? "active" : ""
                  }`}
                >
                  <Link
                    to="billing-details"
                    className={`pickupAccount-NavLinkText ${
                      currentPath.includes("billing-details")
                        ? "active-link"
                        : ""
                    }`}
                  >
                    Billing details
                  </Link>
                </div>

                <div
                  className={`pickupAccount-sideNavBtns ${
                    currentPath.includes("pickup-change-password")
                      ? "active"
                      : ""
                  }`}
                >
                  <Link
                    to="pickup-change-password"
                    className={`pickupAccount-NavLinkText ${
                      currentPath.includes("pickup-change-password")
                        ? "active-link"
                        : ""
                    }`}
                  >
                    Change password
                  </Link>
                </div>

                <div
                  className={`pickupAccount-sideNavBtns ${
                    currentPath.includes("pickup-notification-settings")
                      ? "active"
                      : ""
                  }`}
                >
                  <Link
                    to="pickup-notification-settings"
                    className={`pickupAccount-NavLinkText ${
                      currentPath.includes("pickup-notification-settings")
                        ? "active-link"
                        : ""
                    }`}
                  >
                    Notifications
                  </Link>
                </div>

                <div
                  className={`pickupAccount-sideNavBtns ${
                    currentPath.includes("language") ? "active" : ""
                  }`}
                >
                  <Link
                    to="language"
                    className={`pickupAccount-NavLinkText ${
                      currentPath.includes("language") ? "active-link" : ""
                    }`}
                  >
                    Language
                  </Link>
                </div>

                <div
                  className={`pickupAccount-sideNavBtns ${
                    currentPath.includes("pickup-help") ? "active" : ""
                  }`}
                >
                  <Link
                    to="pickup-help"
                    className={`pickupAccount-NavLinkText ${
                      currentPath.includes("pickup-help") ? "active-link" : ""
                    }`}
                  >
                    Help
                  </Link>
                </div>

                <div
                  className={`pickupAccount-sideNavBtns ${
                    currentPath.includes("pickup-about-us") ? "active" : ""
                  }`}
                >
                  <Link
                    to="pickup-about-us"
                    className={`pickupAccount-NavLinkText ${
                      currentPath.includes("pickup-about-us")
                        ? "active-link"
                        : ""
                    }`}
                  >
                    About us
                  </Link>
                </div>

                <div
                  className={`pickupAccount-sideNavBtns ${
                    currentPath.includes("logout") ? "active" : ""
                  }`}
                >
                  <Link
                    to="logout"
                    className={`pickupAccount-NavLinkText ${
                      currentPath.includes("logout") ? "active-link" : ""
                    }`}
                  >
                    Logout
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              {/* This is where nested routes will render their content */}
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PickupAccount;
