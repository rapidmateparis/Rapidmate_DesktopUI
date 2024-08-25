import React, { useState } from "react";
import "../../../assets/css/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faLocationDot,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import MapCard from "../../../assets/images/DummuMap-Card.png";
import EnterpriseAddNewLocationsModal from "./EnterpriseAddNewLocationsModal";

const EnterpriseManageCompanyLocations = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const companylocations = [
    {
      id: 1,
      company: "North Street Franchise",
      address: "North Street, ABC",
    },
    {
      id: 2,
      company: "North Street Franchise",
      address: "North Street, ABC",
    },
  ];

  return (
    <section className="addressBook-MainSec">
      <div className="row">
        <div className="col-md-12">
          <div className="addressBook-addressCard">
            <p className="addressBook-headerTitleText">
              Manage company locations
            </p>
            <button onClick={openModal} className="addressBook-plusIconBtn">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          {companylocations.map((address, index) => (
            <div
              key={index}
              className="enterpriseManagecompany-locationsmainCard"
            >
              <img
                className="enterpriseManagecompany-locationsMapcard"
                src={MapCard}
                alt="img"
              />
              <div className="enterpriseManagecompany-locationAddressMainCard">
                <div>
                  <h4 className="enterpriseManagecompany-locationCompanyName">
                    {address.company}
                  </h4>
                  <div className="enterpriseManagecompany-locationAddressCard">
                    <FontAwesomeIcon
                      className="enterpriseManagecompany-locationAddressIcon"
                      icon={faLocationDot}
                    />
                    <p className="enterpriseManagecompany-locationAddressText">
                      {address.address}
                    </p>
                  </div>
                </div>
                <button className="enterpriseManagecompany-locationAddressEditIcon">
                  <FontAwesomeIcon icon={faPen} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modals */}
      <EnterpriseAddNewLocationsModal
        show={showModal}
        handleClose={() => setShowModal(false)}
      />
    </section>
  );
};

export default EnterpriseManageCompanyLocations;
