import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import SadEmoji from "../../assets/images/SadFace-Emoji.png";
import { Link } from "react-router-dom";

function PickupOrderCancelled({ show, handleClose }) {

  const handleSaveChanges = () => {
    // Implement save changes logic here, if needed
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <div className="modalCancellation-header">
            <p className="orderCanceledTextHead">Order cancelled</p>
            <FontAwesomeIcon  className="modalClose-HeaderBtn" icon={faTimes} onClick={handleClose} />
          </div>
        </Modal.Header>
        <Modal.Body>
           <div className="orderCanceledMainCard">
              <img className="orderCanceled-SadEmoji" src={SadEmoji} alt="Emoji" />
              <div>
                <h6 className="yourOrderCancelText">Your order is cancelled</h6>
                <p className="orderCanceledMsg">Sorry for the inconvenience, hope to see you soon!</p>
              </div>
           </div>
        </Modal.Body>
        <Modal.Footer>
           <div>
              <Link to="/pickup-ordertracking" className="cancellationModal-SubmitBtn">Ok</Link>
           </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PickupOrderCancelled;
