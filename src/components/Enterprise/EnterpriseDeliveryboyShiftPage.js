import React, { useState, useRef, useEffect } from "react";
import "../../assets/css/home.css";
import EnterprisesHeader from "./EnterprisesSettings/EnterprisesHeader";
import Driver from "../../assets/images/Driver-Image.jpeg";
import Package from "../../assets/images/One-TimePackage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faArrowRight, faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Stopwatch = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const startTime = useRef(Date.now());
  const requestRef = useRef(null);

  const updateTimer = () => {
    const now = Date.now();
    setElapsedTime(now - startTime.current);
    requestRef.current = requestAnimationFrame(updateTimer);
  };

  useEffect(() => {
    startTime.current = Date.now(); // Reset start time when component mounts
    requestRef.current = requestAnimationFrame(updateTimer);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  const formatTime = (ms) => {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="enterpriseShiftPage-DeliveryTimerCard">
      <p className="enterpriseShiftPage-DeliveryTimerText">
        {formatTime(elapsedTime)}
      </p>
    </div>
  );
};

const EnterpriseDeliveryboyShiftPage = () => {
  return (
    <>
      {/* Header Start Here */}
      <EnterprisesHeader />
      {/* Header End Here */}
      <section className="enterpriseShiftPage-section">
        <div className="row manageRow">
          <div className="col-md-4">
            <div className="enterpriseShiftPage-detailsDriverMainCard">
              <div className="enterpriseShiftPage-detailsDriverCard">
                <img
                  className="enterpriseShiftPage-detailsDriverImg"
                  src={Driver}
                  alt="driverImg"
                />
                <p className="enterpriseShiftPage-driverReadyText">Ready</p>
              </div>
              <div className="enterpriseShiftPage-DeliveryBoyReadyCard">
                <h4 className="enterpriseShiftPage-DeliveryBoyReadyText">
                  Delivery boy ready
                </h4>
                <p className="enterpriseShiftPage-DeliveryBoyReadyDiscription">
                  John Doe is at your location and ready to deliver
                </p>
              </div>
              <div>
                <Stopwatch />
                <p className="enterpriseShiftPage-ShiftEndHours">
                  6 hours left before shift ends
                </p>
              </div>
              <div>
                <div className="enterpriseShiftPage-totaldeliveryCountCard">
                  <h4 className="enterpriseShiftPage-totaldeliveryCount">03</h4>
                  <p className="enterpriseShiftPage-totaldeliveryText">
                    Deliveries
                  </p>
                </div>

                <div className="enterpriseShiftPage-totaldeliveryCountCard">
                  <h4 className="enterpriseShiftPage-totaldeliveryCount">
                    1.5
                  </h4>
                  <p className="enterpriseShiftPage-totaldeliveryText">
                    Total hours
                  </p>
                </div>

                <div className="enterpriseShiftPage-totaldeliveryCountCard">
                  <h4 className="enterpriseShiftPage-totaldeliveryCount">
                    4.2
                  </h4>
                  <p className="enterpriseShiftPage-totaldeliveryText">
                    km Distance
                  </p>
                </div>
              </div>

              <Link className="enterpriseShiftPage-ActiveDelivriesUpperCard">
                <div className="enterpriseShiftPage-ActiveDelivriesPackageCard">
                  <img
                    className="enterpriseShiftPage-ActiveDelivriesPackageImg"
                    src={Package}
                    alt="img"
                  />
                  <p className="enterpriseShiftPage-ActiveDelivriesText">
                    Active deliveries <span>(02)</span>
                  </p>
                </div>
                <FontAwesomeIcon
                  className="enterpriseShiftPage-ActiveDelivriesPackageArrowIcon"
                  icon={faArrowRight}
                />
              </Link>

              <Link className="enterpriseShiftPage-ActiveDelivriesLowerCard">
                <div className="enterpriseShiftPage-ActiveDelivriesPackageCard">
                  <img
                    className="enterpriseShiftPage-ActiveDelivriesPackageImg"
                    src={Package}
                    alt="img"
                  />
                  <p className="enterpriseShiftPage-ActiveDelivriesText">
                    Request new delivery
                  </p>
                </div>
                <FontAwesomeIcon
                  className="enterpriseShiftPage-ActiveDelivriesPackageArrowIcon"
                  icon={faArrowRight}
                />
              </Link>
            </div>
          </div>

          <div className="col-md-8">
            <div className="enterpriseShiftPage-ActiveDelivriesDetailMaincard">
              <h4 className="enterpriseShiftPage-ActiveDelivriesHeadTitle">
                Active deliveries (03)
              </h4>
              <div className="enterpriseShiftPage-orderDetailMainCard">
                <p className="enterpriseShiftPage-orderId">
                  Order ID: 98237469
                </p>
                <div className="enterpriseShiftPage-orderDetailLocmaincard">
                  <div className="enterpriseShiftPage-orderDetailFromLocCard">
                    <FontAwesomeIcon className="enterpriseShiftPage-orderDetailFromLocIcon" icon={faLocationDot} />
                    <p className="enterpriseShiftPage-orderDetailFromLoc">
                      From <b>North Street, ABC</b>
                    </p>
                  </div>
                  <div className="enterpriseShiftPage-orderDetailBorderShowOff"/>
                  <div className="enterpriseShiftPage-orderDetailFromLocCard">
                    <FontAwesomeIcon className="enterpriseShiftPage-orderDetailFromLocIcon" icon={faLocationCrosshairs} />
                    <p className="enterpriseShiftPage-orderDetailFromLoc">
                      To <b>5th Avenue, XYZ</b>
                    </p>
                  </div>
                </div>
                <div className="enterpriseShiftPage-orderDetailMainBorderShowOff"/>
                <div className="enterpriseShiftPage-orderDetaildistanceCardMain">
                    <div className="enterpriseShiftPage-orderDetaildistanceCard">
                        <p className="enterpriseShiftPage-orderDetaildistance">Total distance: <b>2.6 km</b></p>
                        <p className="enterpriseShiftPage-orderDetaildistance">Time required: <b>1.2 hrs</b></p>
                    </div>
                    <p className="enterpriseShiftPage-orderDetailPending">Pending</p>
                </div>
              </div>

              <div className="enterpriseShiftPage-orderDetailMainCard">
                <p className="enterpriseShiftPage-orderId">
                  Order ID: 98237469
                </p>
                <div className="enterpriseShiftPage-orderDetailLocmaincard">
                  <div className="enterpriseShiftPage-orderDetailFromLocCard">
                    <FontAwesomeIcon className="enterpriseShiftPage-orderDetailFromLocIcon" icon={faLocationDot} />
                    <p className="enterpriseShiftPage-orderDetailFromLoc">
                      From <b>North Street, ABC</b>
                    </p>
                  </div>
                  <div className="enterpriseShiftPage-orderDetailBorderShowOff"/>
                  <div className="enterpriseShiftPage-orderDetailFromLocCard">
                    <FontAwesomeIcon className="enterpriseShiftPage-orderDetailFromLocIcon" icon={faLocationCrosshairs} />
                    <p className="enterpriseShiftPage-orderDetailFromLoc">
                      To <b>5th Avenue, XYZ</b>
                    </p>
                  </div>
                </div>
                <div className="enterpriseShiftPage-orderDetailMainBorderShowOff"/>
                <div className="enterpriseShiftPage-orderDetaildistanceCardMain">
                    <div className="enterpriseShiftPage-orderDetaildistanceCard">
                        <p className="enterpriseShiftPage-orderDetaildistance">Total distance: <b>2.6 km</b></p>
                        <p className="enterpriseShiftPage-orderDetaildistance">Time required: <b>1.2 hrs</b></p>
                    </div>
                    <p className="enterpriseShiftPage-orderDetailprogress">In progress</p>
                </div>
              </div>

              <div className="enterpriseShiftPage-orderDetailMainCard">
                <p className="enterpriseShiftPage-orderId">
                  Order ID: 98237469
                </p>
                <div className="enterpriseShiftPage-orderDetailLocmaincard">
                  <div className="enterpriseShiftPage-orderDetailFromLocCard">
                    <FontAwesomeIcon className="enterpriseShiftPage-orderDetailFromLocIcon" icon={faLocationDot} />
                    <p className="enterpriseShiftPage-orderDetailFromLoc">
                      From <b>North Street, ABC</b>
                    </p>
                  </div>
                  <div className="enterpriseShiftPage-orderDetailBorderShowOff"/>
                  <div className="enterpriseShiftPage-orderDetailFromLocCard">
                    <FontAwesomeIcon className="enterpriseShiftPage-orderDetailFromLocIcon" icon={faLocationCrosshairs} />
                    <p className="enterpriseShiftPage-orderDetailFromLoc">
                      To <b>5th Avenue, XYZ</b>
                    </p>
                  </div>
                </div>
                <div className="enterpriseShiftPage-orderDetailMainBorderShowOff"/>
                <div className="enterpriseShiftPage-orderDetaildistanceCardMain">
                    <div className="enterpriseShiftPage-orderDetaildistanceCard">
                        <p className="enterpriseShiftPage-orderDetaildistance">Total distance: <b>2.6 km</b></p>
                        <p className="enterpriseShiftPage-orderDetaildistance">Time required: <b>1.2 hrs</b></p>
                    </div>
                    <p className="enterpriseShiftPage-orderDetailComplete">Complete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnterpriseDeliveryboyShiftPage;
