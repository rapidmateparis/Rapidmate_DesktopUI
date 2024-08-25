import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import Thamb from "../../assets/images/Thamb-Up.png";

function PickupThanksFeedbackModal({ show, handleClose }) {

  const handleSaveChanges = () => {
    // Implement save changes logic here, if needed
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <div className="modalCancellation-header">
            <p className="pickupfeedback-title">Feedback</p>
            <FontAwesomeIcon  className="modalClose-HeaderBtn" icon={faTimes} onClick={handleClose} />
          </div>
        </Modal.Header>
        <Modal.Body>
           <div className="orderCanceledMainCard">
              <img className="pickupFeedback-thansksImg" src={Thamb} alt="Emoji" />
              <div>
                <h6 className="yourOrderCancelText">Thanks for your feedback!</h6>
                <p className="orderCanceledMsg">Thanks for sharing your experience</p>
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

export default PickupThanksFeedbackModal;
