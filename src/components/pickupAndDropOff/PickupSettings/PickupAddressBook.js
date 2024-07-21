import React, { useState } from "react";
import "../../../assets/css/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faLocationDot,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import UserProfile from "../../../assets/images/PickupUser-Profile.jpeg";
import PickupEditAddressModal from "./PickupEditAddressModal";
import PickupAddAddressModal from "./PickupAddAddressModal";

// Define user addresses as an array of objects
const userAddresses = [
  {
    id: 1,
    name: "John Doe",
    address:
      "18 Avenue Henri et Louise de Vilmorin, 91370, Verrières-le-Buisson",
  },
  {
    id: 2,
    name: "John Doe",
    address:
      "18 Avenue Henri et Louise de Vilmorin, 91370, Verrières-le-Buisson",
  },
  {
    id: 3,
    name: "John Doe",
    address:
      "18 Avenue Henri et Louise de Vilmorin, 91370, Verrières-le-Buisson",
  },
  {
    id: 4,
    name: "John Doe",
    address:
      "18 Avenue Henri et Louise de Vilmorin, 91370, Verrières-le-Buisson",
  },
  {
    id: 5,
    name: "John Doe",
    address:
      "18 Avenue Henri et Louise de Vilmorin, 91370, Verrières-le-Buisson",
  },
  {
    id: 6,
    name: "John Doe",
    address:
      "18 Avenue Henri et Louise de Vilmorin, 91370, Verrières-le-Buisson",
  },
];

const PickupAddressBook = () => {
  const [showEditModal, setShowEditModal] = useState(false); // State for edit modal
  const [showAddModal, setShowAddModal] = useState(false); // State for add modal

  const openEditModal = () => {
    setShowEditModal(true);
  };

  const openAddModal = () => {
    setShowAddModal(true);
  };

  return (
    <section className="addressBook-MainSec">
      <div className="row">
        <div className="col-md-12">
          <div className="addressBook-addressCard">
            <p className="addressBook-headerTitleText">Address book</p>
            <button onClick={openAddModal} className="addressBook-plusIconBtn">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>

          {/* Display user addresses */}
          <div>
            {userAddresses.map((address, index) => (
              <div key={index} className="addressBook-AddressesCards">
                <div className="addressBook-LocationDotIconCard">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div>
                  <h5 className="addressBook-UserCompanyname">
                    {address.name}
                  </h5>
                  <p className="addressBook-userCompanyAddress">
                    {address.address}
                  </p>
                </div>
                <button
                  onClick={openEditModal}
                  className="addressBook-EditPenIconCard"
                >
                  <FontAwesomeIcon icon={faPen} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Modals */}
      <PickupEditAddressModal
        show={showEditModal}
        handleClose={() => setShowEditModal(false)}
      />

      <PickupAddAddressModal
        show={showAddModal}
        handleClose={() => setShowAddModal(false)}
      />
    </section>
  );
};

export default PickupAddressBook;
