import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/images/Logo-icon.png";
import Bicycle from "../../assets/images/Cycle-Vehicle.png";
import Scooter from "../../assets/images/Scooter-Vehicle.png";
import Car from "../../assets/images/Car-Vehicle.png";
import Partner from "../../assets/images/Partner-Vehicle.png";
import Van from "../../assets/images/Van-Vehicle.png";
import Pickup from "../../assets/images/Pickup-Vehicle.png";
import Truck from "../../assets/images/Truck-Vehicle.png";
import Package from "../../assets/images/Package.png";
import { Form } from "react-bootstrap";

const DeliveryboyAddVehicle = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const vehicles = [
    {
      image: Bicycle,
      name: "Bicycle",
      capacity: "5 liters",
      className: "Delivery-Bicycle",
    },
    {
      image: Scooter,
      name: "Scooter",
      capacity: "10 liters",
      className: "Delivery-Scooter",
    },
    {
      image: Car,
      name: "Car",
      capacity: "10 liters",
      className: "Delivery-Car",
    },
    {
      image: Partner,
      name: "Partner",
      capacity: "10 liters",
      className: "Delivery-Partner",
    },
    {
      image: Van,
      name: "Van",
      capacity: "10 liters",
      className: "Delivery-Van",
    },
    {
      image: Pickup,
      name: "Pickup",
      capacity: "10 liters",
      className: "Delivery-Pickup",
    },
    {
      image: Truck,
      name: "Truck",
      capacity: "10 liters",
      className: "Delivery-Truck",
    },
    {
      image: Package,
      name: "Package",
      capacity: "10 liters",
      className: "Delivery-Package",
    },
  ];

  const handleVehicleClick = (vehicleName) => {
    setSelectedVehicle(vehicleName);
  };

  return (
    <>
      <section className="profile-choose-sec">
        <div className="container">
          <div>
            <a className="logo-card" href="#">
              <img className="logo" src={Logo} alt="logo" />
              <h2 className="companyName">Rapidmate</h2>
            </a>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="pickup-signup-form-main-card">
                <div className="choose-main-card">
                  <div className="choose-profile-card">
                    <h2 className="choose-profile-heading">Add vehicle</h2>
                    <p className="choose-profile-subheading">
                      Please add vehicle you will use for delivery
                    </p>
                  </div>
                </div>
                <div>
                  <p className="deliveryboyVehicle-SelectText">
                    Select vehicle type
                  </p>
                  <div className="deliveryboyAddVehicleAllImagesCard">
                    {vehicles.map((vehicle, index) => (
                      <div
                        key={index}
                        className={`deliveryboyAddVehicle-vehicleCard ${
                          selectedVehicle === vehicle.name ? "selected" : ""
                        }`}
                        onClick={() => handleVehicleClick(vehicle.name)}
                      >
                        <div className="deliveryboyaddVehicle-vehicleImageCard">
                          <img
                            className={vehicle.className}
                            src={vehicle.image}
                            alt={vehicle.name}
                          />
                        </div>
                        <p className="deliveryboy-vehicleName">
                          {vehicle.name}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <p className="deliveryboyVehicle-formDetailText">
                      Fill vehicle details
                    </p>
                    <Form>
                      <div className="row">
                        <div className="col-md-6">
                          <Form.Group
                            className="mb-2"
                            controlId="formPlaintext"
                          >
                            <Form.Label className="deliveryboy-labelVehicleInfo">
                              Vehicle No.
                            </Form.Label>
                            <Form.Control
                              className="deliveryboy-VehicleInfo"
                              type="text"
                              placeholder="Type here.."
                            />
                          </Form.Group>
                        </div>

                        <div className="col-md-6">
                          <Form.Group
                            className="mb-2"
                            controlId="formPlaintext"
                          >
                            <Form.Label className="deliveryboy-labelVehicleInfo">
                              Vehicle model
                            </Form.Label>
                            <Form.Control
                              className="deliveryboy-VehicleInfo"
                              type="text"
                              placeholder="Type here.."
                            />
                          </Form.Group>
                        </div>

                        <div className="col-md-6">
                          <Form.Group
                            className="mb-2"
                            controlId="formPlaintext"
                          >
                            <Form.Label className="deliveryboy-labelVehicleInfo">
                              Vehicle make
                            </Form.Label>
                            <Form.Control
                              className="deliveryboy-VehicleInfo"
                              type="text"
                              placeholder="Type here.."
                            />
                          </Form.Group>
                        </div>

                        <div className="col-md-6">
                          <Form.Group
                            className="mb-2"
                            controlId="formPlaintext"
                          >
                            <Form.Label className="deliveryboy-labelVehicleInfo">
                              Vehicle variant
                            </Form.Label>
                            <Form.Control
                              className="deliveryboy-VehicleInfo"
                              type="text"
                              placeholder="Type here.."
                            />
                          </Form.Group>
                        </div>

                        <p className="deliveryboyVehicle-formDetailText">
                          Upload documents
                        </p>
                        <div className="col-md-6">
                          <div className="mb-2">
                            <Form.Label className="deliveryboy-labelVehicleInfo">
                              Vehicle variant
                            </Form.Label>
                            <div className="deliveryaddVehicle-vehicleUploadCard">
                              <input
                                type="file"
                                accept=".png, .jpg, .pdf, .svg,"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-2">
                            <Form.Label className="deliveryboy-labelVehicleInfo">
                              Driving license
                            </Form.Label>
                            <div className="deliveryaddVehicle-vehicleUploadCard">
                              <input
                                type="file"
                                accept=".png, .jpg, .pdf, .svg,"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-2">
                            <Form.Label className="deliveryboy-labelVehicleInfo">
                              Vehicle insurance
                            </Form.Label>
                            <div className="deliveryaddVehicle-vehicleUploadCard">
                              <input
                                type="file"
                                accept=".png, .jpg, .pdf, .svg,"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-2">
                            <Form.Label className="deliveryboy-labelVehicleInfo">
                              Passport
                            </Form.Label>
                            <div className="deliveryaddVehicle-vehicleUploadCard">
                              <input
                                type="file"
                                accept=".png, .jpg, .pdf, .svg,"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Form>
                  </div>

                  <div>
                    <Link
                      to="/deliveryboy-profile-type"
                      className="pickup-signup-continueBtn"
                      type="button"
                    >
                      Continue
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeliveryboyAddVehicle;
