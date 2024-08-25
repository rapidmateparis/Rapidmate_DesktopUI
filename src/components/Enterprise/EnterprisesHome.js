import React, { useState } from "react";
import "../../assets/css/home.css";
import Form from "react-bootstrap/Form";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faCircle,
  faLocationDot,
  faLocationCrosshairs,
} from "@fortawesome/free-solid-svg-icons";
import EnterprisesHeader from "./EnterprisesSettings/EnterprisesHeader";
import ActiveBooking from "../../assets/images/Active-bookings.png";
import ScheduledBooking from "../../assets/images/Scheduled-bookings.png";
import AllBooking from "../../assets/images/All-booking.png";
import Home from "../../assets/images/home-icon.png";
import Package from "../../assets/images/Package.png";
import Calender from "../../assets/images/Calender-withBg.png";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import EnterpriseHomeCalender from "./EnterprisesSettings/EnterpriseHomeCalender";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const EnterprisesHome = () => {
  const [value, onChange] = useState(new Date());

  const data = {
    labels: ["January", "February", "March", "April", "May"], // X-axis labels
    datasets: [
      {
        label: "Hours booked",
        data: [1, 2, 4, 2, 7], // Data points for Series 1
        backgroundColor: "rgba(255, 0, 88, 1)",
        borderColor: "rgba(255, 0, 88, 1)",
        borderWidth: 1,
      },
      {
        label: "Hours used",
        data: [3, 1, 5, 6, 4], // Data points for Series 2
        backgroundColor: "rgba(255, 199, 43, 1)",
        borderColor: "rgba(255, 199, 43, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y;
            }
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const companyloc = [
    {
      name: "North Street Franchise",
      address: "North Street, ABC",
      houresbooked: "05",
      houresspent: "03",
      booking: "03",
    },
    {
      name: "South Street Franchise",
      address: "South Street, DEF",
      houresbooked: "08",
      houresspent: "06",
      booking: "04",
    },
    {
      name: "West Street Franchise",
      address: "West Street, GHI",
      houresbooked: "12",
      houresspent: "08",
      booking: "07",
    },
  ];

  return (
    <>
      {/* Header Start Here */}
      <EnterprisesHeader />
      {/* Header End Here */}
      <section className="enterpriseHome-Sec">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div>
                <p className="enterprisesHome-UserWelcomeText">
                  Welcome <b>John!</b>
                </p>
                <p className="enterprisesHome-dashbordDiscription">
                  This is your Rapidmate enterprise dashboard!
                </p>

                <div className="row">
                  <div className="col-md-4">
                    <div className="enterpriseHome-ActiveBookingCard">
                      <button className="enterpriseHome-infoButton">
                        <FontAwesomeIcon icon={faCircleInfo} />
                      </button>
                      <p className="enterpriseHome-activeBookingText">
                        Active bookings
                      </p>
                      <div className="enterpriseBooking-CountCard">
                        <h4 className="enterprisesHome-ActiveBookingCount">
                          08
                        </h4>
                        <img
                          className="enterpriseHome-CheckIcon"
                          src={ActiveBooking}
                          alt="Icon"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="enterpriseHome-ActiveBookingCard">
                      <button className="enterpriseHome-infoButton">
                        <FontAwesomeIcon icon={faCircleInfo} />
                      </button>
                      <p className="enterpriseHome-activeBookingText">
                        Scheduled bookings
                      </p>
                      <div className="enterpriseBooking-CountCard">
                        <h4 className="enterprisesHome-ActiveBookingCount">
                          52
                        </h4>
                        <img
                          className="enterpriseHome-CheckIcon"
                          src={ScheduledBooking}
                          alt="Icon"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="enterpriseHome-ActiveBookingCard">
                      <button className="enterpriseHome-infoButton">
                        <FontAwesomeIcon icon={faCircleInfo} />
                      </button>
                      <p className="enterpriseHome-activeBookingText">
                        All bookings
                      </p>
                      <div className="enterpriseBooking-CountCard">
                        <h4 className="enterprisesHome-ActiveBookingCount">
                          362
                        </h4>
                        <img
                          className="enterpriseHome-CheckIcon"
                          src={AllBooking}
                          alt="Icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="enterprisesHome-GraphCard">
                  <div className="enterpriseHome-WithoutGraphCard">
                    <div>
                      <h4 className="enterpriseHome-hoursText">Hours booked</h4>
                      <div className="enterpriseHome-locationSelectCard">
                        <Form.Group className="mb-3" controlId="formPlaintext">
                          <Form.Select
                            className="enterpriseHome-FranchiseSelect"
                            aria-label="Default select example"
                          >
                            <option>North Street Franchise</option>
                            <option value="1">South Street Franchise</option>
                            <option value="2">West Street Franchise</option>
                            <option value="3">East Street Franchise</option>
                          </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPlaintext">
                          <Form.Select
                            className="enterpriseHome-FranchiseSelect"
                            aria-label="Default select example"
                          >
                            <option>This week</option>
                            <option value="1">This month</option>
                            <option value="2">This year</option>
                          </Form.Select>
                        </Form.Group>
                      </div>
                    </div>

                    <div className="enterpriseHome-TotalHourseCard">
                      <div className="enterpriseHome-BookedCard">
                        <FontAwesomeIcon
                          className="enterpriseHome-HoursCircleIcon"
                          icon={faCircle}
                        />
                        <p className="enterpriseHome-HoursBookedText">
                          Hours booked
                        </p>
                      </div>

                      <div className="enterpriseHome-BookedCard">
                        <FontAwesomeIcon
                          className="enterpriseHome-HoursusedCircleIcon"
                          icon={faCircle}
                        />
                        <p className="enterpriseHome-HoursBookedText">
                          Hours used
                        </p>
                      </div>

                      <h4 className="enterpriseHome-totalHoursText">32</h4>
                    </div>
                  </div>

                  <div>
                    <div className="chart-container">
                      <Bar data={data} options={options} />
                    </div>
                  </div>
                </div>

                <p className="enterpriseCompany-LocationsText">
                  Company locations
                </p>
                {companyloc.map((company, index) => (
                  <div key={index} className="enterpriseHome-CompanyLocCard">
                    <img
                      className="enterpriseHome-HomeIcon"
                      src={Home}
                      alt="home-icon"
                    />
                    <div>
                      <h4 className="enterpriseHome-CompanyName">
                        {company.name}
                      </h4>
                      <div className="enterpriseHome-addressCard">
                        <FontAwesomeIcon
                          className="enterpriseHome-LocDotIcon"
                          icon={faLocationDot}
                        />
                        <p className="enterpriseHome-CompanyAddress">
                          {company.address}
                        </p>
                      </div>
                    </div>

                    <div className="enterpriseHome-LocSpentCard">
                      <div className="enterpriseHome-HrsBookedCard">
                        <p className="enterpriseHome-LocHsbooked">
                          Hours booked
                        </p>
                        <h4>{company.houresbooked}</h4>
                      </div>

                      <div className="enterpriseHome-HrsBookedCard">
                        <p className="enterpriseHome-LocHsbooked">
                          Hours spent
                        </p>
                        <h4>{company.houresspent}</h4>
                      </div>

                      <div className="enterpriseHome-HrsBookedCard">
                        <p className="enterpriseHome-LocHsbooked">Bookings</p>
                        <h4>{company.booking}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-4">
              <div className="enterpriseHome-CalenderMainCard">
                {/* Calender Start Here  */}
                <EnterpriseHomeCalender />
                {/* Calender End Here  */}
                <div className="enterprisesHome-EnterpriesNameCard">
                  <div className="enterpriseHome-ResturntCard">
                    <FontAwesomeIcon
                      className="enterpriseHome-ResturentCircle"
                      icon={faCircle}
                    />
                    <p className="enerpriseHome-resturentText">Restaurant</p>
                  </div>

                  <div className="enterpriseHome-ResturntCard">
                    <FontAwesomeIcon
                      className="enterpriseHome-SupermarketsCircle"
                      icon={faCircle}
                    />
                    <p className="enerpriseHome-resturentText">Supermarkets</p>
                  </div>

                  <div className="enterpriseHome-ResturntCard">
                    <FontAwesomeIcon
                      className="enterpriseHome-EcommerceCircle"
                      icon={faCircle}
                    />
                    <p className="enerpriseHome-resturentText">E-Commerce</p>
                  </div>
                </div>
                <div className="enterpriseHome-ResturntCard">
                  <FontAwesomeIcon
                    className="enterpriseHome-MoversCircle"
                    icon={faCircle}
                  />
                  <p className="enerpriseHome-resturentText">
                    Packers & Movers
                  </p>
                </div>

                <div>
                  <div className="enterpriseHome-DeliveryHistoryCard">
                    <div>
                      <div className="enterpriseHome-packagedeliveryInfoCard">
                        <div className="enterpriseHome-packageImgCard">
                          <img
                            className="enterpriseHome-Package"
                            src={Package}
                            alt="Icon"
                          />
                          <FontAwesomeIcon
                            className="enterpriseHome-dotCircleResturent"
                            icon={faCircle}
                          />
                        </div>

                        <p className="enterpriseHome-pickupTimeinfo">
                          Pickup on Apr 19, 2024 at 11:30 AM
                        </p>
                      </div>

                      <div className="enterpriseHome-addressFromCard">
                        <FontAwesomeIcon
                          className="enterpriseHome-addresslocDotIcon"
                          icon={faLocationDot}
                        />
                        <p className="enterpriseHome-AddressText">
                          From <b>North Street, ABC</b>
                        </p>
                      </div>

                      <div className="enterpriseHome-addressToCard">
                        <FontAwesomeIcon
                          className="enterpriseHome-addresslocDotIcon"
                          icon={faLocationCrosshairs}
                        />
                        <p className="enterpriseHome-AddressText">
                          To <b>5th Avenue, XYZ</b>
                        </p>
                      </div>

                      <div className="enterpriseHome-OrderidCard">
                        <p className="enterpriseHome-orderIdText">
                          Order ID: <span>98237469</span>
                        </p>

                        <p className="enterpriseHome-orderIdText">
                          Pickup Truck
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="enterpriseHome-DeliveryHistoryCard">
                    <div>
                      <div className="enterpriseHome-packagedeliveryInfoCard">
                        <div className="enterpriseHome-packageImgCard">
                          <img
                            className="enterpriseHome-Package"
                            src={Calender}
                            alt="Icon"
                          />
                          <FontAwesomeIcon
                            className="enterpriseHome-dotCircleResturent"
                            icon={faCircle}
                          />
                        </div>

                        <div className="enterpriseHome-shiftHeaderCard">
                          <p className="enterpriseHome-pickupTimeinfo">
                            11 AM to 04 PM
                          </p>

                          <p className="enterpriseHome-pickupTimeinfo">
                            5 hours shift
                          </p>
                        </div>
                      </div>

                      <div className="enterpriseHome-addressFromCard">
                        <FontAwesomeIcon
                          className="enterpriseHome-addresslocDotIcon"
                          icon={faLocationDot}
                        />
                        <p className="enterpriseHome-AddressText">
                          <b>North Franchise</b>
                        </p>
                      </div>

                      <div className="enterpriseHome-OrderidCard">
                        <p className="enterpriseHome-orderIdText">
                          Order ID: <span>98237469</span>
                        </p>

                        <p className="enterpriseHome-orderIdText">Motor Bike</p>
                      </div>
                    </div>
                  </div>

                  <div className="enterpriseHome-DeliveryHistoryCard">
                    <div>
                      <div className="enterpriseHome-packagedeliveryInfoCard">
                        <div className="enterpriseHome-packageImgCard">
                          <img
                            className="enterpriseHome-Package"
                            src={Package}
                            alt="Icon"
                          />
                          <FontAwesomeIcon
                            className="enterpriseHome-dotCircleEcommerce"
                            icon={faCircle}
                          />
                        </div>

                        <p className="enterpriseHome-pickupTimeinfo">
                          Pickup on Apr 19, 2024 at 11:30 AM
                        </p>
                      </div>

                      <div className="enterpriseHome-addressFromCard">
                        <FontAwesomeIcon
                          className="enterpriseHome-addresslocDotIcon"
                          icon={faLocationDot}
                        />
                        <p className="enterpriseHome-AddressText">
                          From <b>North Street, ABC</b>
                        </p>
                      </div>

                      <div className="enterpriseHome-addressToCard">
                        <FontAwesomeIcon
                          className="enterpriseHome-addresslocDotIcon"
                          icon={faLocationCrosshairs}
                        />
                        <p className="enterpriseHome-AddressText">
                          To <b>5th Avenue, XYZ</b>
                        </p>
                      </div>

                      <div className="enterpriseHome-OrderidCard">
                        <p className="enterpriseHome-orderIdText">
                          Order ID: <span>98237469</span>
                        </p>

                        <p className="enterpriseHome-orderIdText">
                          Pickup Truck
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="enterpriseHome-DeliveryHistoryCard">
                    <div>
                      <div className="enterpriseHome-packagedeliveryInfoCard">
                        <div className="enterpriseHome-packageImgCard">
                          <img
                            className="enterpriseHome-Package"
                            src={Package}
                            alt="Icon"
                          />
                          <FontAwesomeIcon
                            className="enterpriseHome-dotCircleMovers"
                            icon={faCircle}
                          />
                        </div>

                        <p className="enterpriseHome-pickupTimeinfo">
                          Pickup on Apr 19, 2024 at 11:30 AM
                        </p>
                      </div>

                      <div className="enterpriseHome-addressFromCard">
                        <FontAwesomeIcon
                          className="enterpriseHome-addresslocDotIcon"
                          icon={faLocationDot}
                        />
                        <p className="enterpriseHome-AddressText">
                          From <b>North Street, ABC</b>
                        </p>
                      </div>

                      <div className="enterpriseHome-addressToCard">
                        <FontAwesomeIcon
                          className="enterpriseHome-addresslocDotIcon"
                          icon={faLocationCrosshairs}
                        />
                        <p className="enterpriseHome-AddressText">
                          To <b>5th Avenue, XYZ</b>
                        </p>
                      </div>

                      <div className="enterpriseHome-OrderidCard">
                        <p className="enterpriseHome-orderIdText">
                          Order ID: <span>98237469</span>
                        </p>

                        <p className="enterpriseHome-orderIdText">
                          Pickup Truck
                        </p>
                      </div>
                    </div>
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

export default EnterprisesHome;
