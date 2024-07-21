import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/PickupCancellationModal.css";

function PickupCancellationReasonModal({ show, handleClose }) {
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
            <p className="cancellation-reasonText">Cancellation reason</p>
            <FontAwesomeIcon  className="modalClose-HeaderBtn" icon={faTimes} onClick={handleClose} />
          </div>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div
              className={`cancellationReasonCard ${selectedReason === "changeOfPlans" ? "selected" : ""}`}
              onClick={() => handleReasonSelect("changeOfPlans")}
            >
              <div className="cancellationModal-reasonCircle">{selectedReason === "changeOfPlans" && <FontAwesomeIcon className="reasonCancellation-CheckIcon" icon={faCheck} />}</div>
              <p className="cancellationReason-TextDetails">Change of plans</p>
            </div>

            <div
              className={`cancellationReasonCard ${selectedReason === "changeDeliveryTime" ? "selected" : ""}`}
              onClick={() => handleReasonSelect("changeDeliveryTime")}
            >
              <div className="cancellationModal-reasonCircle">{selectedReason === "changeDeliveryTime" && <FontAwesomeIcon className="reasonCancellation-CheckIcon" icon={faCheck} />}</div>
              <p className="cancellationReason-TextDetails">
                I want to change delivery time
              </p>
            </div>

            <div
              className={`cancellationReasonCard ${selectedReason === "incorrectAddress" ? "selected" : ""}`}
              onClick={() => handleReasonSelect("incorrectAddress")}
            >
              <div className="cancellationModal-reasonCircle">{selectedReason === "incorrectAddress" && <FontAwesomeIcon className="reasonCancellation-CheckIcon" icon={faCheck} />}</div>
              <p className="cancellationReason-TextDetails">
                Incorrect address or information
              </p>
            </div>

            <div
              className={`cancellationReasonCard ${selectedReason === "foundAnotherPerson" ? "selected" : ""}`}
              onClick={() => handleReasonSelect("foundAnotherPerson")}
            >
              <div className="cancellationModal-reasonCircle">{selectedReason === "foundAnotherPerson" && <FontAwesomeIcon className="reasonCancellation-CheckIcon" icon={faCheck} />}</div>
              <p className="cancellationReason-TextDetails">
                Found another person
              </p>
            </div>

            <div
              className={`cancellationReasonCard ${selectedReason === "takingTooLong" ? "selected" : ""}`}
              onClick={() => handleReasonSelect("takingTooLong")}
            >
              <div className="cancellationModal-reasonCircle">{selectedReason === "takingTooLong" && <FontAwesomeIcon className="reasonCancellation-CheckIcon" icon={faCheck} />}</div>
              <p className="cancellationReason-TextDetails">
                It is taking too long
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
           <div>
              <button className="cancellationModal-SubmitBtn">Submit</button>
           </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PickupCancellationReasonModal;
