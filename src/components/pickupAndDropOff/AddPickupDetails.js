import React from "react";
import "../../assets/css/home.css";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPaperclip } from "@fortawesome/free-solid-svg-icons";

const AddPickupDetails = () => {
  return (
    <>
      <section className="addPickupDetails-Sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                <div>
                <a className="addPickup-DetailsBackArrow" href="#"><FontAwesomeIcon icon={faArrowLeft} /></a>
                  <h2 className="addPickupDetailsText">Add pickup details</h2>
                  <p className="addPickupDetails-Subtext">
                    You have entered pickup and drop-off addresses, time of
                    pickup and vehicle type
                  </p>
                  <p className="pickup-personalDetails">Personal details</p>
                </div>
                <Form>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group
                        className="mb-3"
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
                        className="mb-3"
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

                    <div className="col-md-12">
                      <Form.Group
                        className="mb-3"
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

                    <div className="col-md-6">
                      <Form.Group
                        className="mb-3"
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

                    <div className="col-md-6">
                      <Form.Group className="mb-3" controlId="formPlaintext">
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
                  </div>
                  <p className="pickup-personalDetails">Package details</p>

                  <div className="row">
                    <div className="col-md-12">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="addPickup-detailForm-Labels">
                          Package photo
                        </Form.Label>
                        <div>
                          <div className="addPickup-uploadPhoto">
                            <FontAwesomeIcon icon={faPaperclip} />
                            <p className="addPickup-dragText">Drag or click to attach a photo</p>
                          </div>
                        </div>
                      </Form.Group>
                    </div>

                    <div className="col-md-6">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="addPickup-detailForm-Labels">
                        Package ID
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
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="addPickup-detailForm-Labels">
                        Pickup notes
                        </Form.Label>
                        <Form.Control
                          className="addPickupDetails-inputs"
                          type="text"
                          placeholder="Type here.."
                        />
                      </Form.Group>
                    </div>
                  </div>
                </Form>

                <div className="addPickup-detailsBtnCard">
                    <button className="addPickup-detailsCancelBTn">Cancel</button>
                    <button className="addPickupDetails-NextBtn">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddPickupDetails;
