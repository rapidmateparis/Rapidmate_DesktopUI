import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import "../../../assets/css/PickupEditAddress.css";

function PickupAddAddressModal({ show, handleClose }) {
  const handleSaveChanges = () => {
    // Implement save changes logic here, if needed
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <div className="modalPickup-EditAddress-header">
            <p className="vehicleDimensions-TextHead">Add New Address</p>
            <FontAwesomeIcon
              className="modalClose-HeaderBtn"
              icon={faTimes}
              onClick={handleClose}
            />
          </div>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="row">
              <div className="col-md-12">
                <div>
                  <Form.Group
                    className="mb-1"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="addPickup-detailForm-Labels">
                      Address
                    </Form.Label>
                    <Form.Control
                      className="addPickupDetails-inputs"
                      type="text"
                      placeholder="Type here.."
                    />
                  </Form.Group>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <Form.Group
                      className="mb-1"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="addPickup-detailForm-Labels">
                        First name*
                      </Form.Label>
                      <Form.Control
                        className="addPickupDetails-inputs"
                        type="text"
                        placeholder="Type here.."
                      />
                    </Form.Group>
                  </div>

                  <div className="col-md-6">
                    <Form.Group
                      className="mb-1"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="addPickup-detailForm-Labels">
                        Last name
                      </Form.Label>
                      <Form.Control
                        className="addPickupDetails-inputs"
                        type="text"
                        placeholder="Type here.."
                      />
                    </Form.Group>
                  </div>
                </div>

                <div className="col-md-12">
                  <Form.Group
                    className="mb-1"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="addPickup-detailForm-Labels">
                      Company
                    </Form.Label>
                    <Form.Control
                      className="addPickupDetails-inputs"
                      type="text"
                      placeholder="Type here.."
                    />
                  </Form.Group>
                </div>

                <div className="col-md-12">
                  <Form.Group className="mb-1" controlId="formPlaintext">
                    <Form.Label className="addPickup-detailForm-Labels">
                      Phone number
                    </Form.Label>
                    <div className="pickupSignup-container">
                      <Form.Select
                        className="select-numberByCountry"
                        aria-label="Default select example"
                      >
                        <option value="1">+33</option>
                        <option value="2">+91</option>
                        <option value="3">+11</option>
                      </Form.Select>
                      <Form.Control
                        className="password-field signup-user-name"
                        type="text"
                        placeholder="0 00 00 00 00"
                      />
                    </div>
                  </Form.Group>
                </div>

                <div className="col-md-12">
                  <Form.Group
                    className="mb-1"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="addPickup-detailForm-Labels">
                      Email
                    </Form.Label>
                    <Form.Control
                      className="addPickupDetails-inputs"
                      type="email"
                      placeholder="Type here.."
                    />
                  </Form.Group>
                </div>

                <div className="col-md-12">
                  <Form.Group
                    className="mb-2"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="addPickup-detailForm-Labels">Example textarea</Form.Label>
                    <Form.Control className="addPickupDetails-inputs" as="textarea" placeholder="Type here.." rows={3} />
                  </Form.Group>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div>
              <button className="pickupEdit-addressSaveBtn">Save</button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PickupAddAddressModal;
