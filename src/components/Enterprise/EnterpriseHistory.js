import React, { useState } from "react";
import "../../assets/css/home.css";
import "../../assets/css/PickupHistoryTabs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faMagnifyingGlass,
  faFilter,
  faLocationDot,
  faLocationCrosshairs,
} from "@fortawesome/free-solid-svg-icons";
import Package from "../../assets/images/Package.png";
import Calender from "../../assets/images/Calender-withBg.png";
import NoDataImage from "../../assets/images/NoOrder.png";
import { Link } from "react-router-dom";
import EnterprisesHeader from "./EnterprisesSettings/EnterprisesHeader";

const EnterpriseHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    // You can also perform search operations here if needed
  };

  const OneTimeDelivery = [
    {
      image: Package,
      title: "Delivered on Apr 19, 2024 at 11:30 AM",
      from: "North Street, ABC",
      to: "To 5th Avenue, XYZ",
      vehicle: "Pickup Truck",
      status: "Active",
      orderId: "98237469",
      cost: "€34.00",
    },
    {
      image: Package,
      title: "Delivered on Apr 19, 2024 at 11:30 AM",
      from: "North Street, ABC",
      to: "To 5th Avenue, XYZ",
      vehicle: "Pickup Truck",
      status: "Active",
      orderId: "98237469",
      cost: "€34.00",
    },
    {
      image: Package,
      title: "Delivered on Apr 19, 2024 at 11:30 AM",
      from: "North Street, ABC",
      to: "To 5th Avenue, XYZ",
      vehicle: "Pickup Truck",
      status: "Active",
      orderId: "98237469",
      cost: "€34.00",
    },
    {
      image: Package,
      title: "Delivered on Apr 19, 2024 at 11:30 AM",
      from: "North Street, ABC",
      to: "To 5th Avenue, XYZ",
      vehicle: "Pickup Truck",
      status: "Active",
      orderId: "98237469",
      cost: "€34.00",
    },
    {
      image: Package,
      title: "Delivered on Apr 19, 2024 at 11:30 AM",
      from: "North Street, ABC",
      to: "To 5th Avenue, XYZ",
      vehicle: "Pickup Truck",
      status: "Active",
      orderId: "98237469",
      cost: "€34.00",
    },
  ];

  const ShiftsDelivery = [
    {
      image: Calender,
      title: "11 AM to 04 PM",
      location: "North Franchise",
      shift: "5 hours shift",
      vehicle: "Motor Bike",
      status: "Pending approval",
    },
    {
      image: Calender,
      title: "11 AM to 04 PM",
      location: "North Franchise",
      shift: "5 hours shift",
      vehicle: "Motor Bike",
      status: "Pending approval",
    },
    {
      image: Calender,
      title: "11 AM to 04 PM",
      location: "North Franchise",
      shift: "5 hours shift",
      vehicle: "Motor Bike",
      status: "Pending approval",
    },
    {
      image: Calender,
      title: "11 AM to 04 PM",
      location: "North Franchise",
      shift: "5 hours shift",
      vehicle: "Motor Bike",
      status: "Pending approval",
    },
  ];

  const PastDelivery = [
    {
      image: Package,
      title: "Delivered on Apr 19, 2024 at 11:30 AM",
      from: "North Street, ABC",
      to: "To 5th Avenue, XYZ",
      vehicle: "Pickup Truck",
      status: "Active",
      orderId: "98237469",
      cost: "€34.00",
    },
    {
      image: Package,
      title: "Delivered on Apr 19, 2024 at 11:30 AM",
      from: "North Street, ABC",
      to: "To 5th Avenue, XYZ",
      vehicle: "Pickup Truck",
      status: "Active",
      orderId: "98237469",
      cost: "€34.00",
    },
    {
      image: Package,
      title: "Delivered on Apr 19, 2024 at 11:30 AM",
      from: "North Street, ABC",
      to: "To 5th Avenue, XYZ",
      vehicle: "Pickup Truck",
      status: "Active",
      orderId: "98237469",
      cost: "€34.00",
    },
  ];

  return (
    <>
      {/* Header Start Here */}
      <EnterprisesHeader />
      {/* Header End Here */}
      <section className="pickupHistorySec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                <div className="pickupHistory-HeaderCard">
                  <div className="pickupHistory-TitleHeaderCard">
                    <Link to="/">
                      <FontAwesomeIcon
                        className="pickupHistory-BackspaceButton"
                        icon={faArrowLeft}
                      />
                    </Link>
                    <h4 className="pickupHistory-HeaderTitle">History</h4>
                  </div>
                  <div className="pickupHistory-SearchFillterCard">
                    <div className="pickupHistory-SearchCard">
                      <FontAwesomeIcon
                        className="pickupHistory-SearchIcon"
                        icon={faMagnifyingGlass}
                      />
                      <input
                        className="pickupHistorySearchInput"
                        type="text"
                        placeholder="Search your deliveries"
                        value={searchTerm}
                        onChange={handleInputChange}
                      />
                    </div>
                    <button className="pickupHistory-FillterIcon">
                      <FontAwesomeIcon icon={faFilter} />
                    </button>
                  </div>
                </div>

                <div className="tabs">
                  <input
                    type="radio"
                    id="tab1"
                    name="tab-control"
                    defaultChecked
                  />
                  <input type="radio" id="tab2" name="tab-control" />
                  <input type="radio" id="tab3" name="tab-control" />
                  <ul>
                    <li title="Tab 1">
                      <label htmlFor="tab1" role="button" className="tab-label">
                        <span>Ongoing</span>
                      </label>
                    </li>
                    <li title="Tab 2">
                      <label htmlFor="tab2" role="button" className="tab-label">
                        <span>Shifts</span>
                      </label>
                    </li>
                    <li title="Tab 3">
                      <label htmlFor="tab3" role="button" className="tab-label">
                        <span>Past</span>
                      </label>
                    </li>
                  </ul>
                  <div className="content">
                    {/* Ongoing Deliveries Start Here */}
                    <section>
                      <div className="row">
                        <div className="col-md-12">
                          {OneTimeDelivery.length > 0 ? (
                            OneTimeDelivery.map((delivery, index) => (
                              <Link to="/pickup-delivery-details" key={index}>
                                <div className="pickuphistory-MainCard">
                                  <div className="pickupHistory-packageCard">
                                    <img
                                      className="pickupHistory-PackageIcon"
                                      src={delivery.image}
                                      alt="Package"
                                    />
                                    <h4 className="pickupHistory-DeliveredText">
                                      {delivery.title}
                                    </h4>
                                  </div>

                                  <div className="pickupHistory-locationCard">
                                    <div className="pickupHistory-FromLocaCard">
                                      <FontAwesomeIcon
                                        className="pickupHistory-LocIcon"
                                        icon={faLocationDot}
                                      />
                                      <p className="pickupHistory-FromLoc">
                                        From <b>{delivery.from}</b>
                                      </p>
                                    </div>

                                    <div className="pickupHistory-ShowOff" />

                                    <div className="pickupHistory-FromLocaCard">
                                      <FontAwesomeIcon
                                        className="pickupHistory-LocIcon"
                                        icon={faLocationCrosshairs}
                                      />
                                      <p className="pickupHistory-FromLoc">
                                        To <b>{delivery.to}</b>
                                      </p>
                                    </div>
                                  </div>

                                  <div className="enterpriseHistory-VehicleNameCard">
                                    <p className="pickupHistory-OrderId">
                                      {delivery.vehicle}
                                    </p>
                                    <p className="enterpriseHistory-DeliveryActive">
                                      {delivery.status}
                                    </p>
                                  </div>

                                  <div className="pickupHistory-BorderBottomShow" />

                                  <div className="pickupHistory-orderMoneyCard">
                                    <p className="pickupHistory-OrderId">
                                      Order ID: <span>{delivery.orderId}</span>
                                    </p>
                                    <h4 className="pickupHistory-MoneyText">
                                      {delivery.cost}
                                    </h4>
                                  </div>
                                </div>
                              </Link>
                            ))
                          ) : (
                            <div className="pickupHistory-noDataMainCard">
                              <div className="pickupHistory-NoDataCard">
                                <img
                                  className="pickupHistory-nodataImage"
                                  src={NoDataImage}
                                  alt="No-Data"
                                />
                              </div>
                              <div>
                                <h4 className="pickupHistory-noDatatext">
                                  No orders to show
                                </h4>
                                <p className="pickupHistory-NodataSubText">
                                  If there are any active orders, they will be
                                  shown here.
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </section>
                    {/* Shifts Orders Start Here */}
                    <section>
                      <div className="row">
                        <div className="col-md-12">
                          {ShiftsDelivery.map((shifts, index) => (
                            <div
                              key={index}
                              className="enterpriseShiftsHistory-headerMain"
                            >
                              <Link to="/enterprises-shift-details">
                                <div className="enterpriseShiftsHistory-topMainDiv">
                                  <div className="enterpriseShiftsHistory-header">
                                    <img
                                      className="enterpriseShiftsHistory-CalenderImg"
                                      src={shifts.image}
                                      alt="img"
                                    />
                                    <h4 className="enterpriseShiftHistory-titleText">
                                      {shifts.title}
                                    </h4>
                                  </div>
                                  <h4 className="enterpriseShiftHistory-ShiftsInHours">
                                    {shifts.shift}
                                  </h4>
                                </div>
                                <div className="enterpriseShiftHistory-CompanyLocCard">
                                  <FontAwesomeIcon
                                    className="enterpriseShiftHistory-CompanyLocIcon"
                                    icon={faLocationDot}
                                  />
                                  <p className="enterpriseShiftHistory-CompanyLoc">
                                    {shifts.location}
                                  </p>
                                </div>
                                <div className="enterpriseShiftsHistory-approvelStatusCard">
                                  <p className="pickupHistory-OrderId">
                                    {shifts.vehicle}
                                  </p>
                                  <p className="enterpriseShiftHistory-pending">
                                    {shifts.status}
                                  </p>
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>
                    {/* Past Orders Start Here */}
                    <section>
                      <div className="row">
                        <div className="col-md-12">
                          {PastDelivery.length > 0 ? (
                            PastDelivery.map((past, index) => (
                              <Link to="/pickup-delivery-details" key={index}>
                                <div className="pickuphistory-MainCard">
                                  <div className="pickupHistory-packageCard">
                                    <img
                                      className="pickupHistory-PackageIcon"
                                      src={past.image}
                                      alt="Package"
                                    />
                                    <h4 className="pickupHistory-DeliveredText">
                                      {past.title}
                                    </h4>
                                  </div>

                                  <div className="pickupHistory-locationCard">
                                    <div className="pickupHistory-FromLocaCard">
                                      <FontAwesomeIcon
                                        className="pickupHistory-LocIcon"
                                        icon={faLocationDot}
                                      />
                                      <p className="pickupHistory-FromLoc">
                                        From <b>{past.from}</b>
                                      </p>
                                    </div>

                                    <div className="pickupHistory-ShowOff" />

                                    <div className="pickupHistory-FromLocaCard">
                                      <FontAwesomeIcon
                                        className="pickupHistory-LocIcon"
                                        icon={faLocationCrosshairs}
                                      />
                                      <p className="pickupHistory-FromLoc">
                                        To <b>{past.to}</b>
                                      </p>
                                    </div>
                                  </div>

                                  <div className="enterpriseHistory-VehicleNameCard">
                                    <p className="pickupHistory-OrderId">
                                      {past.vehicle}
                                    </p>
                                  </div>

                                  <div className="pickupHistory-BorderBottomShow" />

                                  <div className="pickupHistory-orderMoneyCard">
                                    <p className="pickupHistory-OrderId">
                                      Order ID: <span>{past.orderId}</span>
                                    </p>
                                    <h4 className="pickupHistory-MoneyText">
                                      {past.cost}
                                    </h4>
                                  </div>
                                </div>
                              </Link>
                            ))
                          ) : (
                            <div className="pickupHistory-noDataMainCard">
                              <div className="pickupHistory-NoDataCard">
                                <img
                                  className="pickupHistory-nodataImage"
                                  src={NoDataImage}
                                  alt="No-Data"
                                />
                              </div>
                              <div>
                                <h4 className="pickupHistory-noDatatext">
                                  No orders to show
                                </h4>
                                <p className="pickupHistory-NodataSubText">
                                  If there are any active orders, they will be
                                  shown here.
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </section>
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

export default EnterpriseHistory;
