import React from "react";
import "../../assets/css/home.css";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import PickupHeader from "./PickupSettings/PickupHeader";
import SidebarImg from "../../assets/images/Pickup-Detail-SideImg.png";
import { Link } from "react-router-dom";

const AddPickupDetails = () => {
  return (
    <>
      {/* Header Start Here  */}
      <PickupHeader />
      {/* Header End Here  */}
      <section className="addPickupDetails-Sec">
        <div>
          <div className="row manageRow">
            <div className="col-md-4">
              <div className="addpickupDetail-SidecardMain">
                <img
                  className="addpickupDetail-SidecardboxIcon"
                  src={SidebarImg}
                  alt="icon"
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="pickupAddpickup-detailsMaincard">
                <div>
                  <h2 className="addPickupDetailsText">Add pickup details</h2>
                  <p className="addPickupDetails-Subtext">
                    You have entered pickup and drop-off addresses, time of
                    pickup and vehicle type
                  </p>
                  <p className="pickup-personalDetails">Personal details</p>
                </div>
                <Form>
                  <div className="row manageRow">
                    <div className="col-md-12">
                      <div>
                      <Form className="addPickup-detailRadioCard">
                        {["Myself", "Other"].map((label, index) => (
                          <div key={`radio-${index}`} className="mb-3">
                            <Form.Check
                              type="radio"
                              id={`radio-${index}`}
                              name="custom-radio-group" // Group the radio buttons
                              label={label}
                              className="addPickup-detailRadioBtn" // Apply the class name here
                            />
                          </div>
                        ))}
                      </Form>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <Form.Group
                        className="mb-1 addPickup-detailFormCards"
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

                    <div className="col-md-6">
                      <Form.Group
                        className="mb-1 addPickup-detailFormCards"
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
                  </div>
                  <p className="pickup-personalDetails">Package details</p>

                  <div className="row manageRow">
                    <div className="col-md-12">
                      <Form.Group
                        className="mb-1"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="addPickup-detailForm-Labels">
                          Package photo
                        </Form.Label>
                        <div>
                          <div className="addPickup-uploadPhoto">
                            <FontAwesomeIcon icon={faPaperclip} />
                            <p className="addPickup-dragText">
                              Drag or click to attach a photo
                            </p>
                          </div>
                        </div>
                      </Form.Group>
                    </div>

                    <div className="col-md-6">
                      <Form.Group
                        className="mb-1 addPickup-detailFormCards"
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
                        className="mb-1"
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
                  <Link
                    to="/pickup-order-preview"
                    className="addPickupDetails-NextBtn"
                  >
                    Next
                  </Link>
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
