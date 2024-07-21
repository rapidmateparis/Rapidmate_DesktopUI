import React, { useState } from "react";
import "../../assets/css/home.css";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import PickupHomeMap from "./PickupHomeMap";
import { MAPS_API_KEY } from "../../commonComponents/GoogleMapAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faArrowRight,
  faLocationCrosshairs,
} from "@fortawesome/free-solid-svg-icons";
import DateAndTimePicker from "../../commonComponents/PickupHomeDateTimePicker";
import Info from "../../assets/images/info.png";
import Bicycle from "../../assets/images/Bicycle.png";
import Scooter from "../../assets/images/Scooter.png";
import Van from "../../assets/images/Van.png";
import Pickup from "../../assets/images/Pickup.png";
import Truck from "../../assets/images/Truck.png";
import Package from "../../assets/images/Package.png";
import PickupVehicleDimensionsModal from "../pickupAndDropOff/PickupVehicleDimensionsModal";

const vehicles = [
  {
    image: Bicycle,
    name: "Bicycle",
    capacity: "5 liters",
    className: "Pickup-Bicycle",
    price: "€5/km",
    length: "5 Feet",
    height: "4 Feet",
    width: "1 Feet",
  },
  {
    image: Scooter,
    name: "Scooter",
    capacity: "10 liters",
    className: "Pickup-Scooter",
    price: "€5/km",
    length: "5 Feet",
    height: "4 Feet",
    width: "1 Feet",
  },
  {
    image: Van,
    name: "Van",
    capacity: "10 liters",
    className: "Pickup-Van",
    price: "€5/km",
    length: "5 Feet",
    height: "4 Feet",
    width: "1 Feet",
  },
  {
    image: Pickup,
    name: "Pickup",
    capacity: "10 liters",
    className: "Pickup-Pickup",
    price: "€5/km",
    length: "5 Feet",
    height: "4 Feet",
    width: "1 Feet",
  },
  {
    image: Truck,
    name: "Truck",
    capacity: "10 liters",
    className: "Pickup-Truck",
    price: "€5/km",
    length: "5 Feet",
    height: "4 Feet",
    width: "1 Feet",
  },
  {
    image: Package,
    name: "Package",
    capacity: "10 liters",
    className: "Pickup-Package",
    price: "€5/km",
    length: "5 Feet",
    height: "4 Feet",
    width: "1 Feet",
  },
];

const PickupHome = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <section className="request-pickup-sec">
        <div className="row manageRow">
          <div className="col-md-3">
            <div className="request-pickup-maincard">
              <div>
                <p className="pickup-request-text">Request a Pick up!</p>
                <div className="home-pickupDrop-address-cards">
                  <div className="pickupAddres-autocompleteCard">
                    <FontAwesomeIcon
                      className="pickupHome-location-icon"
                      icon={faLocationDot}
                    />
                    <ReactGoogleAutocomplete
                      className="homeMap-placeSearch"
                      apiKey={MAPS_API_KEY}
                      placeholder="Enter pickup address"
                      onPlaceSelected={(place) => {
                        console.log(place);
                      }}
                    />
                    <FontAwesomeIcon
                      className="pickupHome-rightArrow-icon"
                      icon={faArrowRight}
                    />
                  </div>

                  <div className="homePickup-locations-border-showoff" />

                  <div className="pickupAddres-autocompleteCard">
                    <FontAwesomeIcon
                      className="dropHome-location-icon"
                      icon={faLocationCrosshairs}
                    />
                    <ReactGoogleAutocomplete
                      className="homeMap-placeSearch"
                      apiKey={MAPS_API_KEY}
                      placeholder="Enter drop-off address"
                      onPlaceSelected={(place) => {
                        console.log(place);
                      }}
                    />
                    <FontAwesomeIcon
                      className="pickupHome-rightArrow-icon"
                      icon={faArrowRight}
                    />
                  </div>
                </div>

                <div>
                  <p className="pickup-request-text">
                    Request it now or schedule for later
                  </p>
                  <div>
                    <DateAndTimePicker />
                  </div>
                </div>
              </div>

              <div className="homePickupVehicleCard-main">
                <p className="pickup-request-text">Choose the vehicle</p>
                <div className="row">
                  {vehicles.map((vehicle, index) => (
                    <div key={index} className="col-md-4">
                      <div className="homePickup-vehicles-card">
                        <button className="pickupHome-InfoBtnIcon" onClick={openModal}>
                          <img
                            className="homePickup-info"
                            src={Info}
                            alt="info-Icon"
                          />
                        </button>
                        <img
                          className={`homePickup-Bicycle ${vehicle.className}`}
                          src={vehicle.image}
                          alt={`${vehicle.name} Icon`}
                        />
                      </div>
                      <div className="pickupHome-vehicleTypeCap">
                        <h4 className="pickupHome-vehicleTypeByName">
                          {vehicle.name}
                        </h4>
                        <p className="pickupHome-vehicleCap">
                          {vehicle.capacity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <a className="goTo-orderDetails" href="#">
                <p className="pickuphome-continueBt">
                  Continue to order details
                </p>
                <FontAwesomeIcon
                  className="pickupHome-rightArrow-icon"
                  icon={faArrowRight}
                />
              </a>
            </div>
          </div>
          <div className="col-md-9">
            <div>
              <PickupHomeMap />
            </div>
          </div>
        </div>
        {/* ------------ Modal is Here -----------  */}
        <PickupVehicleDimensionsModal
          show={showModal}
          handleClose={() => setShowModal(false)}
        />
      </section>
    </>
  );
};

export default PickupHome;
