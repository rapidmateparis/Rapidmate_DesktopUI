import React, { useState } from "react";
import "../../assets/css/home.css";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import { MAPS_API_KEY } from "../../commonComponents/GoogleMapAPI";
import EnterprisesHeader from "./EnterprisesSettings/EnterprisesHeader";
import Track from "../../assets/images/Track-Order-Vehicle.png";
import Calender from "../../assets/images/Multiple-Delivery-Calender.png";
import Cycle from "../../assets/images/Cycle-Right.png";
import Scooter from "../../assets/images/Scooter-Right.png";
import Car from "../../assets/images/Car-Right.png";
import Van from "../../assets/images/Van-Right.png";
import Pickup from "../../assets/images/Pickup-Right.png";
import Truck from "../../assets/images/Truck-Right.png";
import Other from "../../assets/images/Package.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faArrowRight,
  faLocationCrosshairs,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCircle,
  faClock,
  faCircleDot,
} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import EnterpriseSelectServiceDatePicker from "../../commonComponents/EnterpriseSelectServiceDatePicker";

const EnterpriseMultipleDeliveriesSelectService = () => {
  const [repeatOrder, setRepeatOrder] = useState(false);
  const [selectedServiceType, setSelectedServiceType] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Weekly");

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleServiceTypeClick = (serviceType, vehicleName) => {
    setSelectedServiceType(serviceType);
    setSelectedVehicle(vehicleName);
  };

  // Handle switch change
  const handleRepeatOrder = (event) => {
    setRepeatOrder(event.target.checked);
  };

  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const handleDayClick = (day) => {
    setSelectedDays((prevSelectedDays) =>
      prevSelectedDays.includes(day)
        ? prevSelectedDays.filter((d) => d !== day)
        : [...prevSelectedDays, day]
    );
  };

  const vehicles = [
    {
      image: Cycle,
      name: "Cycle",
      className: "enterpriseSelect-ServiceCycle",
    },
    {
      image: Scooter,
      name: "Scooter",
      className: "enterpriseSelect-ServiceScooter",
    },
    {
      image: Car,
      name: "Car",
      className: "enterpriseSelect-ServiceCar",
    },
    {
      image: Van,
      name: "Van",
      className: "enterpriseSelect-ServiceVan",
    },
    {
      image: Pickup,
      name: "Pickup",
      className: "enterpriseSelect-ServicePickup",
    },
    {
      image: Truck,
      name: "Truck",
      className: "enterpriseSelect-ServiceTruck",
    },
    {
      image: Other,
      name: "Other",
      className: "enterpriseSelect-ServiceOther",
    },
  ];

  return (
    <>
      {/* Header Start Here  */}
      <EnterprisesHeader />
      {/* Header End Here  */}
      <section className="enterprisenew-ScheduleSec">
        <div>
          <div className="row manageRow">
            <div className="col-md-4">
              <div className="enterpriseNew-ScheduleTitleCard">
                <div>
                  <h4 className="enterpriseNew-ScheduleText">
                    Multiple deliveries
                  </h4>
                  <img
                    className="enterprise-OneTimeTrackImg"
                    src={Track}
                    alt="img"
                  />
                </div>
                <div>
                  <img
                    className="enterprise-MultipleCalenderImg"
                    src={Calender}
                    alt="Img"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="enterpriseNew-ScheduletypeMainCard">
                <h4 className="enterpriseNew-ScheduleSelectType">
                  Select service type
                </h4>

                <div className="enterpriseselect-ServicesOptionCardMain">
                  <div
                    className={`enterpriseselect-ServicesOptionCard ${
                      selectedServiceType === "scooter" ? "selected" : ""
                    }`}
                    onClick={() => handleServiceTypeClick("scooter", "Scooter")}
                  >
                    <FontAwesomeIcon
                      className="enterpriseSelect-ServiceTypeCricle"
                      icon={
                        selectedServiceType === "scooter"
                          ? faCircleDot
                          : faCircle
                      }
                    />
                    <p className="enterpriseSelect-ServiceTypeText">
                      Delivery boy with scooter
                    </p>
                  </div>

                  <div
                    className={`enterpriseselect-ServicesOptionCard ${
                      selectedServiceType === "no-scooter" ? "selected" : ""
                    }`}
                    onClick={() => handleServiceTypeClick("no-scooter", "")}
                  >
                    <FontAwesomeIcon
                      className="enterpriseSelect-ServiceTypeCricle"
                      icon={
                        selectedServiceType === "no-scooter"
                          ? faCircleDot
                          : faCircle
                      }
                    />
                    <p className="enterpriseSelect-ServiceTypeText">
                      Delivery boy without scooter
                    </p>
                  </div>

                  <div
                    className={`enterpriseselect-ServicesOptionCard ${
                      selectedServiceType === "multi-task" ? "selected" : ""
                    }`}
                    onClick={() => handleServiceTypeClick("multi-task", "")}
                  >
                    <FontAwesomeIcon
                      className="enterpriseSelect-ServiceTypeCricle"
                      icon={
                        selectedServiceType === "multi-task"
                          ? faCircleDot
                          : faCircle
                      }
                    />
                    <p className="enterpriseSelect-ServiceTypeText">
                      Multi-task employee
                    </p>
                  </div>

                  <div
                    className={`enterpriseselect-ServicesOptionCard ${
                      selectedServiceType === "cleaning" ? "selected" : ""
                    }`}
                    onClick={() => handleServiceTypeClick("cleaning", "")}
                  >
                    <FontAwesomeIcon
                      className="enterpriseSelect-ServiceTypeCricle"
                      icon={
                        selectedServiceType === "cleaning"
                          ? faCircleDot
                          : faCircle
                      }
                    />
                    <p className="enterpriseSelect-ServiceTypeText">
                      Cleaning staff
                    </p>
                  </div>
                </div>

                <h4 className="enterpriseNew-ScheduleSelectType">
                  Select vehicle type
                </h4>
                <div className="enterpriseSelect-ServiceVehicleCardMain">
                  <div className="row">
                    {vehicles.map((vehicle, index) => (
                      <div className="col-md-4" key={index}>
                        <div
                          className={`enterpriseSelect-ServiceVehicleCard ${
                            selectedVehicle === vehicle.name ? "selected" : ""
                          }`}
                          onClick={() => setSelectedVehicle(vehicle.name)}
                        >
                          <FontAwesomeIcon
                            className="enterpriseSelect-VehicleCircleIcon"
                            icon={
                              selectedVehicle === vehicle.name
                                ? faCircleDot
                                : faCircle
                            }
                          />
                          <p className="enterpriseSelect-ServiceVehicleName">
                            {vehicle.name}
                          </p>
                          <img
                            className={vehicle.className}
                            src={vehicle.image}
                            alt={vehicle.name}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <h4 className="enterpriseNew-ScheduleSelectType">
                  Set location & time
                </h4>
                <div className="row">
                  <div className="col-md-6">
                    <p className="enterpriseSelect-ServicePickupDate">
                      Select restaurant/branch
                    </p>
                    <Form.Select
                      className="enterpriseMultiple-DeliveryResturentSelect"
                      aria-label="Default select example"
                    >
                      <option>North Franchise</option>
                      <option value="1">North Franchise</option>
                      <option value="2">North Franchise</option>
                      <option value="3">North Franchise</option>
                    </Form.Select>
                  </div>

                  <div className="col-md-6">
                    <div>
                      <p className="enterpriseSelect-ServicePickupDate">
                        Pickup date
                      </p>
                      <div className="enterpriseSelect-ServiceDateCard">
                        <EnterpriseSelectServiceDatePicker />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div>
                      <p className="enterpriseSelect-ServicePickupDate">
                        Start time
                      </p>
                      <div className="enterpriseMultipleSelect-ServiceTimeCard">
                        <Form.Control
                          className="enterpriseSelect-ServiceTimeInput"
                          type="text"
                          placeholder="10:30"
                        />
                        <FontAwesomeIcon
                          className="enterpriseSelect-ServiceDateClockIcon"
                          icon={faClock}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <p className="enterpriseSelect-ServicePickupDate">
                      Total time
                    </p>
                    <Form.Select
                      className="enterpriseMultiple-DeliveryResturentSelect"
                      aria-label="Default select example"
                    >
                      <option>5 hours</option>
                      <option value="1">6 hours</option>
                      <option value="2">7 hours</option>
                      <option value="3">8 hours</option>
                    </Form.Select>
                  </div>
                </div>

                <div className="enterpriseSelect-ServiceRepeatOrderMainCard">
                  <div className="enterpriseSelect-ServiceRepeatOrderCard">
                    <p className="enterpriseSelect-ServiceRepeatOrderText">
                      Repeat this order
                    </p>
                    <Form>
                      <Form.Check
                        type="switch"
                        id="repeat-switch"
                        checked={repeatOrder}
                        onChange={handleRepeatOrder}
                        className={repeatOrder ? "repeat-switch" : ""}
                      />
                    </Form>
                  </div>
                  {repeatOrder && (
                    <div>
                      <div className="enterpriseSelect-ServiceDayilyCardMain">
                        <div
                          className={`enterpriseSelect-ServiceDayilyCard ${
                            selectedOption === "Daily" ? "selected" : ""
                          }`}
                          onClick={() => handleSelect("Daily")}
                        >
                          <FontAwesomeIcon
                            className={`enterpriseSelect-ServiceRepeatCircle ${
                              selectedOption === "Daily"
                                ? "Service-selected-icon"
                                : ""
                            }`}
                            icon={
                              selectedOption === "Daily"
                                ? faCircleDot
                                : faCircle
                            }
                          />
                          <p className="enterpriseSelect-ServiceDayilyText">
                            Daily
                          </p>
                        </div>

                        <div
                          className={`enterpriseSelect-ServiceDayilyCard ${
                            selectedOption === "Weekly" ? "selected" : ""
                          }`}
                          onClick={() => handleSelect("Weekly")}
                        >
                          <FontAwesomeIcon
                            className={`enterpriseSelect-ServiceRepeatCircle ${
                              selectedOption === "Weekly"
                                ? "Service-selected-icon"
                                : ""
                            }`}
                            icon={
                              selectedOption === "Weekly"
                                ? faCircleDot
                                : faCircle
                            }
                          />
                          <p className="enterpriseSelect-ServiceDayilyText">
                            Weekly
                          </p>
                        </div>

                        <div
                          className={`enterpriseSelect-ServiceDayilyCard ${
                            selectedOption === "Monthly" ? "selected" : ""
                          }`}
                          onClick={() => handleSelect("Monthly")}
                        >
                          <FontAwesomeIcon
                            className={`enterpriseSelect-ServiceRepeatCircle ${
                              selectedOption === "Monthly"
                                ? "Service-selected-icon"
                                : ""
                            }`}
                            icon={
                              selectedOption === "Monthly"
                                ? faCircleDot
                                : faCircle
                            }
                          />
                          <p className="enterpriseSelect-ServiceDayilyText">
                            Monthly
                          </p>
                        </div>
                      </div>

                      <div className="enterpriseSelect-ServiceRepeatEveryCard">
                        <div className="enterpriseSelect-ServiceDayilyCard">
                          <FontAwesomeIcon
                            className="enterpriseSelect-ServiceRepeatCircle"
                            icon={faRepeat}
                          />
                          <p className="enterpriseSelect-ServiceRepeatEveryText">
                            Repeat every
                          </p>
                        </div>
                        <div>
                          <Form.Select
                            className="enterpriseSelect-ServiceRepeatDateSelect"
                            aria-label="Default select example"
                          >
                            <option>1</option>
                            <option value="1">2</option>
                            <option value="2">3</option>
                            <option value="3">4</option>
                          </Form.Select>
                        </div>
                        <div>
                          <Form.Select
                            className="enterpriseSelect-ServiceRepeatDaySelect"
                            aria-label="Default select example"
                          >
                            <option>Day</option>
                            <option value="1">2</option>
                            <option value="2">3</option>
                            <option value="3">4</option>
                          </Form.Select>
                        </div>
                        <div className="enterpriseSelect-ServiceUntilCard">
                          <p className="enterpriseSelect-ServiceUntilText">
                            until
                          </p>
                          <div>
                            <Form.Select
                              className="enterpriseSelect-ServiceRepeatDateuntil"
                              aria-label="Default select example"
                            >
                              <option>8/23/2024</option>
                              <option value="1">2</option>
                              <option value="2">3</option>
                              <option value="3">4</option>
                            </Form.Select>
                          </div>
                        </div>
                      </div>

                      <div className="enterpriseSelectMultiple-serviceDaysCard">
                        {days.map((day) => (
                          <p
                            key={day}
                            className={`enterpriseSelectMultiple-serviceDaysText ${
                              selectedDays.includes(day) ? "selected" : ""
                            }`}
                            onClick={() => handleDayClick(day)}
                          >
                            {day}
                          </p>
                        ))}
                      </div>

                      <div>
                        <p className="enterpriseSelect-ServiceOccursday">
                          Occurs every day until{" "}
                          <span className="enterpriseSelect-ServiceOccursSpan">
                            August 23, 2024
                          </span>
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="enterpriseSelect-ServiceNextBtnCard">
                  <Link
                    to="/enterprises-schedule-approved"
                    className="enterpriseSelect-ServiceNextBtn"
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

export default EnterpriseMultipleDeliveriesSelectService;
