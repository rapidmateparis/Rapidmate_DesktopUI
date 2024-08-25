import React from "react";
import "../../assets/css/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faGear,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import Driver from "../../assets/images/Driver-Image.jpeg";
import PackageDrop from "../../assets/images/PackageDrop.png";
import OrderTag from "../../assets/images/OrderFare-Tag.png";
import MasterCard from "../../assets/images/MasterCard-Logo.png";
import Invoice from "../../assets/images/Invoice-Img.png";
import { Link } from "react-router-dom";
import PickupHeader from "./PickupSettings/PickupHeader";

const PickupDeliveryDetails = () => {
  return (
    <>
      {/* Header Start Here  */}
      <PickupHeader />
      {/* Header End Here  */}
      <section className="pickupDeliveryDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                <div className="pickupDeliveryDetails-head">
                  <div className="pickupDeliveryDetails-HeaderCard">
                    <Link>
                      <FontAwesomeIcon
                        className="pickupHistory-BackspaceButton"
                        icon={faArrowLeft}
                      />
                    </Link>
                    <h4 className="pickupHistory-HeaderTitle">
                      Delivery Details
                    </h4>
                  </div>
                  <button className="pickupDeliveryDetails-settingsIcon">
                    <FontAwesomeIcon icon={faGear} />
                  </button>
                </div>
                {/* Map  */}
                <div className="pickupDeliveryDetails-MapCard"></div>

                <div className="pickupDeliveryDetail-DriverMainCard">
                  <div className="pickupDeliveryDetail-DrivernameCard">
                    <img
                      className="pickupDeliveryDetail-DriverImg"
                      src={Driver}
                      alt="driver"
                    />
                    <h4 className="pickupDeliveryDetail-DriverName">
                      John Doe
                    </h4>
                  </div>
                  <p className="pickupDevliveryDetail-vehicleNumber">
                    VOLVO FH16 2022
                  </p>
                </div>

                <div className="pickupDeliveryDetail-PackageCard">
                  <img
                    className="pickupDeliveryDetail-Package"
                    src={PackageDrop}
                    alt="package"
                  />
                  <div>
                    <p className="pickupDeliveryDetail-DropInfo">
                      Drop off information
                    </p>
                    <h4 className="pickupDeliverDetail-CompanyName">
                      Company Name
                    </h4>
                    <p className="pickupDeliveryDetail-CompanyAddress">
                      22 Rue de la Liberté, Paris, Île-de-France.
                    </p>
                  </div>
                </div>

                <div className="pickupDeliveryDetail-orderfareMainCard">
                  <div>
                    <div className="pickupDeliveryDetail-orderPrice">
                      <div className="pickupDeliveryDetail-pickupCard">
                        <img
                          className="pickupdeliveryDetail-orderfareIcon"
                          src={OrderTag}
                          alt="icon"
                        />
                        <p className="pickupDeliveryDetail-OrderfareText">
                          Order fare
                        </p>
                      </div>
                      <h4 className="pickupDeliveryDetail-orderPriceText">
                        €34.00
                      </h4>
                    </div>
                    <div className="pickupDeliveryDetail-pickuppriceCard">
                      <p className="pickupDeliveryDetail-traveledDistance">
                        Travelled 12 km in 32 mins
                      </p>
                      <div className="pickupDeliveryDetails-AllPriceCard">
                        <p className="pickupDeliveryDetail-Orderfaretext">
                          Order fare
                        </p>
                        <p className="pickupDeliveryDetail-pricesText">
                          €30.00
                        </p>
                      </div>
                      <div className="pickupDeliveryDetails-AllPriceCard">
                        <p className="pickupDeliveryDetail-Orderfaretext">
                          Waiting
                        </p>
                        <p className="pickupDeliveryDetail-pricesText">
                          €03.00
                        </p>
                      </div>
                      <div className="pickupDeliveryDetails-AllPriceCard">
                        <p className="pickupDeliveryDetail-Orderfaretext">
                          Platform fee
                        </p>
                        <p className="pickupDeliveryDetail-pricesText">
                          €01.00
                        </p>
                      </div>
                      <div className="pickupDeliveryDetails-AllPriceCard">
                        <p className="pickupDeliveryDetail-Orderfaretext">
                          Amount charged
                        </p>
                        <p className="pickupDeliveryDetail-pricesText">
                          €34.00
                        </p>
                      </div>
                      <div className="pickupDeliveryDetail-mastercard-Card">
                        <img
                          className="pickupDeliveryDetail-mastercardImg"
                          src={MasterCard}
                          alt="mastercard"
                        />
                        <p className="pickupDeliveryDetail-masterCardtext">
                          Paid with mastercard
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pickupDeliveryDetail-packageInformaitionCard">
                  <p className="pickupDeliveryDetails-packageInfoText">
                    Package information
                  </p>

                  <p className="pickupDeliveryDetail-orderId">
                    Order ID: <b>20394</b>
                  </p>
                  <p className="pickupDeliveryDetail-orderId">
                    Comments:{" "}
                    <b>
                      Lorem ipsum dolor sit amet conse ctetur. Ridiculus nunc
                      platea sed.
                    </b>
                  </p>
                  <p className="pickupDeliveryDetail-orderId">
                    Vehicle: <b>Pickup truck </b>
                  </p>
                </div>

                <div className="pickupDeliveryDetail-InvoiceCard">
                  <div className="pickupDeliveryDetail-invoiceTextCard">
                    <img
                      className="pickupDeliveryDetails-invoiceImg"
                      src={Invoice}
                      alt="invoice"
                    />
                    <p className="pickupDeliveryDetail-downloadInvoiceText">
                      Download invoice
                    </p>
                  </div>
                  <button className="pickupDeliveryDetail-downloadIcon">
                    <FontAwesomeIcon icon={faDownload} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PickupDeliveryDetails;
