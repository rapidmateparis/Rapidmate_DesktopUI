import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/PickupCancellationModal.css";

function PickupVehicleDimensionsModal({ show, handleClose }) {
  const [selectedReason, setSelectedReason] = useState("");

  const handleReasonSelect = (reason) => {
    setSelectedReason(reason);
  };

  const handleSaveChanges = () => {
    // Implement save changes logic here, if needed
    handleClose();
  };

  return (
    <>
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
            <div></div>
            <div>
              <div className="vehicleDimensions-countCard">
                <p className="vehicleDimensions-Counts">1</p>
                <p className="vehicleDimensions-Length">
                  Length <b>24 Feet</b>
                </p>
              </div>

              <div className="vehicleDimensions-countCard">
                <p className="vehicleDimensions-Counts">2</p>
                <p className="vehicleDimensions-Length">
                  Height <b>12 Feet</b>
                </p>
              </div>

              <div className="vehicleDimensions-countCard">
                <p className="vehicleDimensions-Counts">3</p>
                <p className="vehicleDimensions-Length">
                  Width <b>8 Feet</b>
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <button className="cancellationModal-SubmitBtn">Ok</button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PickupVehicleDimensionsModal;
