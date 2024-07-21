import React from "react";
import "../../assets/css/home.css";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faLocationDot,
  faLocationCrosshairs,
  faGlobe,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Truck from "../../assets/images/Truck.png";

const PickupOrderPreview = () => {
  const checkboxTypes = ["checkbox"];

  return (
    <>
      <section className="addPickupDetails-Sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                <div>
                  <a className="addPickup-DetailsBackArrow" href="#">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </a>
                  <h2 className="addPickupDetailsText">Order preview</h2>
                  <p className="addPickupDetails-Subtext">
                    Let’s review your order details. if it looks ok please
                    proceed to payment
                  </p>
                </div>

                <div className="pickupOrder-PreviewAddresCard">
                  <div className="pickupOrderPreview-PickupAddressCard">
                    <FontAwesomeIcon
                      className="pickupOrderPreview-LocationIcon"
                      icon={faLocationDot}
                    />
                    <p className="pickuporderPreview-PickupAddressText">
                      3891 Ranchview , California 62639
                    </p>
                  </div>

                  <div className="PickupOrderPreview-BorderShowOff" />

                  <div className="pickupOrderPreview-PickupAddressCard">
                    <FontAwesomeIcon
                      className="pickupOrderPreview-LocationIcon"
                      icon={faLocationCrosshairs}
                    />
                    <p className="pickuporderPreview-PickupAddressText">
                      1901 Thornridge Cir. Shiloh, California
                    </p>
                  </div>
                </div>

                <div className="pickupOrderPreview-VehicleCard">
                  <p className="pickupOrderPreview-vehicleDetailsText">
                    Vehicle details
                  </p>
                  <div className="pickupOrderPreview-VehicleDetailsCard">
                    <div>
                      <h5 className="pickupOrderPreview-VehicleType">
                        Semi Truck
                      </h5>
                      <p className="pickupOrderPreview-companyName">
                        20000 liters max capacity
                      </p>
                    </div>
                    <div>
                      <img
                        className="PickupOrderPreview-TruckImage"
                        src={Truck}
                        alt="icon"
                      />
                    </div>
                  </div>
                </div>

                <div className="pickupOrderPreview-VehicleCard">
                  <p className="pickupOrderPreview-vehicleDetailsText">
                    Pickup details
                  </p>
                  <div>
                    <h5 className="pickupOrderPreview-VehicleType">
                      Adam Smith
                    </h5>
                    <p className="pickupOrderPreview-companyName">Adam Inc.</p>
                  </div>

                  <div className="pickupOrderPreview-AdminDetailsMainCard">
                    <div className="pickupOrderPreview-adminDetailsCard">
                      <FontAwesomeIcon
                        className="pickupOrderglobeIcon"
                        icon={faGlobe}
                      />
                      <p className="pickupOrder-adminEmail">
                        adaminc@email.com
                      </p>
                    </div>

                    <div className="pickupOrderPreview-adminDetailsCard">
                      <FontAwesomeIcon
                        className="pickupOrderglobeIcon"
                        icon={faPhone}
                      />
                      <p className="pickupOrder-adminEmail">
                        +33 1 23 45 67 89
                      </p>
                    </div>
                  </div>

                  <p className="pickupOrderPreview-PickupNotes">
                    Lorem ipsum dolor sit amet consectetur. Ornare faucibus ac
                    ultricies sed penatibus. Integer sit sagit tis tempor cursus
                    amet. Nunc cursus cras fermen tum elit pulvinar amet.
                  </p>
                </div>

                <div className="pickupOrderPreview-VehicleCard">
                  <p className="pickupOrderPreview-vehicleDetailsText">
                    Estimated cost
                  </p>
                  <div className="pickupOrderPreview-VehicleDetailsCard">
                    <div>
                      <h5 className="pickupOrderPreview-VehicleType">€34</h5>
                      <p className="pickupOrderPreview-companyName">
                        <div className="pickupOrderNormal-detailsCard">
                          <p className="pickupOrderPreview-NormalDetails">
                            2.6 km
                          </p>
                          <p className="pickupOrderPreview-NormalDetails pickupPreviewB">
                            Semi truck
                          </p>
                          <p className="pickupOrderPreview-NormalDetails">
                            23 minutes
                          </p>
                        </div>
                      </p>
                    </div>
                    <div>
                      <h1 className="PickupOrderEuroText-big">€</h1>
                    </div>
                  </div>
                </div>

                <div>
                    <Form>
                      {checkboxTypes.map((type) => (
                        <div
                          key={`default-${type}`}
                          className="mb-3 checkbox-card"
                        >
                          <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label={null}
                            className="saveAddresslater-CheckBox"
                          />
                          <p className="check-text">Save these addresses for later</p>
                        </div>
                      ))}
                    </Form>
                  </div>

                <div className="addPickup-detailsBtnCard">
                  <button className="addPickup-detailsCancelBTn">Cancel</button>
                  <button className="addPickupDetails-NextBtn">
                    Proceed to payment
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

export default PickupOrderPreview;
