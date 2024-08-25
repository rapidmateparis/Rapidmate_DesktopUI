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
import NoDataImage from "../../assets/images/NoOrder.png";
import { Link } from "react-router-dom";
import PickupHeader from "./PickupSettings/PickupHeader";

const PickupHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    // You can also perform search operations here if needed
  };

  const OngoingDeliveries = [
    {
      image: Package,
      title: "Delivered on Apr 19, 2024 at 11:30 AM",
      from: "North Street, ABC",
      to: "To 5th Avenue, XYZ",
      orderid: "98237469",
      cost: "€34.00",
    },
    {
      image: Package,
      title: "Delivered on Apr 19, 2024 at 11:30 AM",
      from: "North Street, ABC",
      to: "To 5th Avenue, XYZ",
      orderid: "98237469",
      cost: "€34.00",
    },

    {
      image: Package,
      title: "Delivered on Apr 19, 2024 at 11:30 AM",
      from: "North Street, ABC",
      to: "To 5th Avenue, XYZ",
      orderid: "98237469",
      cost: "€34.00",
    },
    {
      image: Package,
      title: "Delivered on Apr 19, 2024 at 11:30 AM",
      from: "North Street, ABC",
      to: "To 5th Avenue, XYZ",
      orderid: "98237469",
      cost: "€34.00",
    },
    {
      image: Package,
      title: "Delivered on Apr 19, 2024 at 11:30 AM",
      from: "North Street, ABC",
      to: "To 5th Avenue, XYZ",
      orderid: "98237469",
      cost: "€34.00",
    },
  ];
  return (
    <>
      {/* Header Start Here  */}
      <PickupHeader />
      {/* Header End Here  */}
      <section className="pickupHistorySec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                <div className="pickupHistory-HeaderCard">
                  <div className="pickupHistory-TitleHeaderCard">
                    <Link>
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
                  <input type="radio" id="tab1" name="tab-control" checked />
                  <input type="radio" id="tab2" name="tab-control" />
                  <ul>
                    <li title="Tab 1">
                      <label htmlFor="tab1" role="button" className="tab-label">
                        <span>Ongoing</span>
                      </label>
                    </li>
                    <li title="Tab 2">
                      <label htmlFor="tab2" role="button" className="tab-label">
                        <span>Past</span>
                      </label>
                    </li>
                  </ul>
                  <div className="content">
                    {/* Ongoing Start Here  */}
                    <section>
                      <div className="row">
                        <div className="col-md-12">
                          {OngoingDeliveries.map((OngoingDeliveries, index) => (
                            <Link to="/pickup-delivery-details" key={index}>
                              <div className="pickuphistory-MainCard">
                                <div className="pickupHistory-packageCard">
                                  <img
                                    className="pickupHistory-PackageIcon"
                                    src={OngoingDeliveries.image}
                                    alt="icon"
                                  />
                                  <h4 className="pickupHistory-DeliveredText">
                                    {OngoingDeliveries.title}
                                  </h4>
                                </div>

                                <div className="pickupHistory-locationCard">
                                  <div className="pickupHistory-FromLocaCard">
                                    <FontAwesomeIcon
                                      className="pickupHistory-LocIcon"
                                      icon={faLocationDot}
                                    />
                                    <p className="pickupHistory-FromLoc">
                                      From <b>{OngoingDeliveries.from}</b>
                                    </p>
                                  </div>

                                  <div className="pickupHistory-ShowOff" />

                                  <div className="pickupHistory-FromLocaCard">
                                    <FontAwesomeIcon
                                      className="pickupHistory-LocIcon"
                                      icon={faLocationCrosshairs}
                                    />
                                    <p className="pickupHistory-FromLoc">
                                      To <b>{OngoingDeliveries.to}</b>
                                    </p>
                                  </div>
                                </div>

                                <div className="pickupHistory-BorderBottomShow" />

                                <div className="pickupHistory-orderMoneyCard">
                                  <p className="pickupHistory-OrderId">
                                    Order ID:{" "}
                                    <span>{OngoingDeliveries.orderid}</span>
                                  </p>
                                  <h4 className="pickupHistory-MoneyText">
                                    {OngoingDeliveries.cost}
                                  </h4>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </section>

                    {/* Past Orders Start Here  */}
                    <section>
                      <div className="row">
                        <div className="col-md-12">
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
                                If there is any active order, it will be shown
                                here..
                              </p>
                            </div>
                          </div>
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

export default PickupHistory;
