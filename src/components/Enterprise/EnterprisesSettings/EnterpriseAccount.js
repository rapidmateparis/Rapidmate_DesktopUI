import React from "react";
import "../../../assets/css/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faArrowRight,
  faLocationCrosshairs,
} from "@fortawesome/free-solid-svg-icons";
import UserProfile from "../../../assets/images/Company-Enterprise-Profile.png";

import { Link, Outlet, useLocation } from "react-router-dom";
import EnterprisesHeader from "./EnterprisesHeader";

const EnterpriseAccount = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      {/* Header Start Here */}
      <EnterprisesHeader />
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
                  <h5 className="pickupAccount-HeaderUserName">
                    Livia Culhane
                  </h5>
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
                    currentPath.includes("enterprise-address-book")
                      ? "active"
                      : ""
                  }`}
                >
                  <Link
                    to="enterprise-address-book"
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
                    currentPath.includes("enterprise-managecompany-location") ? "active" : ""
                  }`}
                >
                  <Link
                    to="enterprise-managecompany-location"
                    className={`pickupAccount-NavLinkText ${
                      currentPath.includes("enterprise-managecompany-location")
                        ? "active-link"
                        : ""
                    }`}
                  >
                    Manage company locations
                  </Link>
                </div>

                <div
                  className={`pickupAccount-sideNavBtns ${
                    currentPath.includes("enterprise-manage-ads") ? "active" : ""
                  }`}
                >
                  <Link
                    to="enterprise-manage-ads"
                    className={`pickupAccount-NavLinkText ${
                      currentPath.includes("enterprise-manage-ads")
                        ? "active-link"
                        : ""
                    }`}
                  >
                    Manage Ads
                  </Link>
                </div>

                <div
                  className={`pickupAccount-sideNavBtns ${
                    currentPath.includes("enterprise-payment-methods")
                      ? "active"
                      : ""
                  }`}
                >
                  <Link
                    to="enterprise-payment-methods"
                    className={`pickupAccount-NavLinkText ${
                      currentPath.includes("enterprise-payment-methods")
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
                    currentPath.includes("enterprise-change-password")
                      ? "active"
                      : ""
                  }`}
                >
                  <Link
                    to="enterprise-change-password"
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
                    currentPath.includes("enterprise-notification-settings")
                      ? "active"
                      : ""
                  }`}
                >
                  <Link
                    to="enterprise-notification-settings"
                    className={`pickupAccount-NavLinkText ${
                      currentPath.includes("enterprise-notification-settings")
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
                    currentPath.includes("enterprise-help") ? "active" : ""
                  }`}
                >
                  <Link
                    to="enterprise-help"
                    className={`pickupAccount-NavLinkText ${
                      currentPath.includes("enterprise-help")
                        ? "active-link"
                        : ""
                    }`}
                  >
                    Help
                  </Link>
                </div>

                <div
                  className={`pickupAccount-sideNavBtns ${
                    currentPath.includes("enterprise-about-us") ? "active" : ""
                  }`}
                >
                  <Link
                    to="enterprise-about-us"
                    className={`pickupAccount-NavLinkText ${
                      currentPath.includes("enterprise-about-us")
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

export default EnterpriseAccount;
