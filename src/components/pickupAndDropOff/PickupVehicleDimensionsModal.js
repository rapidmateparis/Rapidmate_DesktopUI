import React from "react";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/PickupCancellationModal.css";
import BicycleImage from "../../assets/images/Modal-Bicycle.png";
import ScooterImage from "../../assets/images/Modal-Scooter.png";
import CarImage from "../../assets/images/Modal-Car.png";
import PartnerImage from "../../assets/images/Modal-Partner.png";
import VanImage from "../../assets/images/Modal-Van.png";
import PickupImage from "../../assets/images/Modal-Pickup.png";
import TruckImage from "../../assets/images/Modal-Truck.png";
import OtherImage from "../../assets/images/Modal-Other.png";

function PickupVehicleDimensionsModal({ show, handleClose, vehicle }) {
  const getVehicleImage = (name) => {
    switch (name) {
      case "Bicycle":
        return BicycleImage;
      case "Scooter":
        return ScooterImage;
      case "Car":
        return CarImage;
      case "Partner":
        return PartnerImage;
      case "Van":
        return VanImage;
      case "Pickup":
        return PickupImage;
      case "Truck":
        return TruckImage;
      case "Other":
        return OtherImage;
      default:
        return null;
    }
  };

  const getVehicleImageClass = (name) => {
    switch (name) {
      case "Bicycle":
        return "bicycle-image";
      case "Scooter":
        return "scooter-image";
      case "Car":
        return "car-image";
      case "Partner":
        return "partner-image";
      case "Van":
        return "van-image";
      case "Pickup":
        return "pickup-image";
      case "Truck":
        return "truck-image";
      case "Other":
        return "other-image";
      default:
        return "";
    }
  };

  const vehicleImage = getVehicleImage(vehicle?.name);
  const vehicleImageClass = getVehicleImageClass(vehicle?.name);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header>
        <div className="modalCancellation-header">
          <p className="vehicleDimensions-TextHead">Vehicle dimensions</p>
          <FontAwesomeIcon
            className="modalClose-HeaderBtn"
            icon={faTimes}
            onClick={handleClose}
          />
        </div>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className="modal-image-container">
            {vehicleImage && (
              <img
                src={vehicleImage}
                alt={`${vehicle?.name} Image`}
                className={`modal-vehicle-image ${vehicleImageClass}`}
              />
            )}
          </div>
          {vehicle && (
            <div>
              <div className="vehicleDimensions-countCard">
                <p className="vehicleDimensions-Counts">1</p>
                <p className="vehicleDimensions-Length">
                  Length <b>{vehicle.length}</b>
                </p>
              </div>

              <div className="vehicleDimensions-countCard">
                <p className="vehicleDimensions-Counts">2</p>
                <p className="vehicleDimensions-Length">
                  Height <b>{vehicle.height}</b>
                </p>
              </div>

              <div className="vehicleDimensions-countCard">
                <p className="vehicleDimensions-Counts">3</p>
                <p className="vehicleDimensions-Length">
                  Width <b>{vehicle.width}</b>
                </p>
              </div>
            </div>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button className="VehicleDimensionsModal-SubmitBtn">Ok</button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default PickupVehicleDimensionsModal;
