import React from "react";
import DeliveryService from "../assets/images/Delivery-Services-Icon.png";
import CourierService from "../assets/images/Courier-Service-Icon.png";
import MultiSkilled from "../assets/images/Multi-Siklled-Icon.png";
import HireMovers from "../assets/images/Hire-Movers-Icon.png";

const Services = () => {
  return (
    <>
      <section className="HomeourServices-Sec">
        <div className="container">
          <div className="row">
            <div className="HomeourServices-TitleMainCard">
              <h2 className="HomeourServices-Title">Our services</h2>
            </div>
            <div className="col-md-3">
              <div className="Delivery-Services-ImagesCard">
                <div>
                  <img
                    className="Delivery-Services-Images"
                    src={DeliveryService}
                    alt="Delivery"
                  />
                </div>
                <h4 className="Delivery-Services-Title">
                  Courier service with scooter
                </h4>
                <p className="Delivery-Services-Subtitle">
                  For establishments without a scooter fleet, we provide
                  couriers with their own means of transport equipped with a
                  durable "top case", thus ensuring the safety and protection of
                  food during delivery.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="Delivery-Services-ImagesCard">
                <div>
                  <img
                    className="Delivery-Services-Images"
                    src={CourierService}
                    alt="CourierService"
                  />
                </div>
                <h4 className="Delivery-Services-Title">Courier service</h4>
                <p className="Delivery-Services-Subtitle">
                  Experienced professionals for safe and punctual deliveries.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="Delivery-Services-ImagesCard">
                <div>
                  <img
                    className="Delivery-Services-Images"
                    src={MultiSkilled}
                    alt="MultiSkilled"
                  />
                </div>
                <h4 className="Delivery-Services-Title">
                  Multi-skilled employee
                </h4>
                <p className="Delivery-Services-Subtitle">
                  Trained staff to support your production operations.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="Delivery-Services-ImagesCard">
                <div>
                  <img
                    className="Delivery-Services-Images"
                    src={HireMovers}
                    alt="HireMovers"
                  />
                </div>
                <h4 className="Delivery-Services-Title">Hire Movers</h4>
                <p className="Delivery-Services-Subtitle">
                  Hire professional movers to manage your move transparently and
                  efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
