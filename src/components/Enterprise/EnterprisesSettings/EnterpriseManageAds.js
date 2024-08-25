import React, { useState } from "react";
import "../../../assets/css/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faLocationDot,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import CompanyLogo from "../../../assets/images/Levis-Logo.png";
import EnterpriseAddNewLocationsModal from "./EnterpriseAddNewLocationsModal";
import { Form } from "react-bootstrap";
import EnterpriseCreateNewAdModal from "./EnterpriseCreateNewAdModal";

const EnterpriseManageAds = () => {
  const [showModal, setShowModal] = useState(false);
  const [isPushNotificationChecked, setIsPushNotificationChecked] =
    useState(true);

  const handlePushNotificationChange = () => {
    setIsPushNotificationChecked(!isPushNotificationChecked);
    // Additional logic for push notifications toggle
  };

  const openModal = () => {
    setShowModal(true);
  };

  const activeCompanyAds = [
    {
      id: 1,
      image: CompanyLogo,
      company: "Company Name",
      address: "North Street, ABC",
      Impressions: "15K",
      Clicks: 850,
    },
    {
      id: 2,
      image: CompanyLogo,
      company: "Company Name",
      address: "North Street, ABC",
      Impressions: "15K",
      Clicks: 850,
    },
    {
      id: 3,
      image: CompanyLogo,
      company: "Company Name",
      address: "North Street, ABC",
      Impressions: "15K",
      Clicks: 850,
    },
  ];

  const inactiveCompanyAds = [
    {
      id: 1,
      image: CompanyLogo,
      company: "Company Name",
      address: "North Street, ABC",
      Impressions: "15K",
      Clicks: 850,
    },
    {
      id: 2,
      image: CompanyLogo,
      company: "Company Name",
      address: "North Street, ABC",
      Impressions: "15K",
      Clicks: 850,
    },
    {
      id: 3,
      image: CompanyLogo,
      company: "Company Name",
      address: "North Street, ABC",
      Impressions: "15K",
      Clicks: 850,
    },
  ];

  return (
    <section className="addressBook-MainSec">
      <div className="row">
        <div className="col-md-12">
          <div className="addressBook-manageAdsCard">
            <p className="addressBook-headerTitleText">Manage Ads</p>
            <button onClick={openModal} className="addressBook-plusIconBtn">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <div>
            <div className="tabs">
              <input type="radio" id="tab1" name="tab-control" defaultChecked />
              <input type="radio" id="tab2" name="tab-control" />
              <input type="radio" id="tab3" name="tab-control" />
              <ul>
                <li title="Tab 1">
                  <label htmlFor="tab1" role="button" className="tab-label">
                    <span>Active</span>
                  </label>
                </li>
                <li title="Tab 2">
                  <label htmlFor="tab2" role="button" className="tab-label">
                    <span>Inactive</span>
                  </label>
                </li>
              </ul>
              <div className="content">
                {/* Active Start Here */}
                <section>
                  <div className="">
                    {activeCompanyAds.map((ads, index) => (
                      <div
                        key={index}
                        className="enterprisemanageAds-companyAdsMainCard"
                      >
                        <img
                          className="enterprisemanageAds-companyImg"
                          src={ads.image}
                          alt="icon"
                        />
                        <div>
                          <h4 className="enterprisemanageAds-companyNameText">
                            {ads.company}
                          </h4>
                          <div className="enterprisemanageAds-companyAddressCard">
                            <FontAwesomeIcon
                              className="enterprisemanageAds-companyAddressLocIcon"
                              icon={faLocationDot}
                            />
                            <p className="enterprisemanageAds-companyAddressText">
                              {ads.address}
                            </p>
                          </div>
                        </div>
                        <div className="enterprisemanageAds-companyImpressionsCard">
                          <p className="enterprisemanageAds-companyImpressionsText">
                            Impressions: <b>{ads.Impressions}</b>
                          </p>
                          <p className="enterprisemanageAds-companyImpressionsText">
                            Clicks: <b>{ads.Clicks}</b>
                          </p>
                          <Form>
                            <Form.Check
                              type="switch"
                              id="push-notification-switch"
                              checked={isPushNotificationChecked}
                              onChange={handlePushNotificationChange}
                              className={
                                isPushNotificationChecked
                                  ? "push-notifications-switch"
                                  : ""
                              }
                            />
                          </Form>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
                {/* Inactive Start Here */}
                <section>
                  <div className="">
                    {inactiveCompanyAds.map((ads, index) => (
                      <div
                        key={index}
                        className="enterprisemanageAds-companyAdsMainCard"
                      >
                        <img
                          className="enterprisemanageAds-companyImg"
                          src={ads.image}
                          alt="icon"
                        />
                        <div>
                          <h4 className="enterprisemanageAds-companyNameText">
                            {ads.company}
                          </h4>
                          <div className="enterprisemanageAds-companyAddressCard">
                            <FontAwesomeIcon
                              className="enterprisemanageAds-companyAddressLocIcon"
                              icon={faLocationDot}
                            />
                            <p className="enterprisemanageAds-companyAddressText">
                              {ads.address}
                            </p>
                          </div>
                        </div>
                        <div className="enterprisemanageAds-companyImpressionsCard">
                          <p className="enterprisemanageAds-companyImpressionsText">
                            Impressions: <b>{ads.Impressions}</b>
                          </p>
                          <p className="enterprisemanageAds-companyImpressionsText">
                            Clicks: <b>{ads.Clicks}</b>
                          </p>
                          <Form>
                            <Form.Check
                              type="switch"
                              id="push-notification-switch"
                              checked={isPushNotificationChecked}
                              onChange={handlePushNotificationChange}
                              className={
                                isPushNotificationChecked
                                  ? "push-notifications-switch"
                                  : ""
                              }
                            />
                          </Form>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modals */}
      <EnterpriseCreateNewAdModal
        show={showModal}
        handleClose={() => setShowModal(false)}
      />
    </section>
  );
};

export default EnterpriseManageAds;
