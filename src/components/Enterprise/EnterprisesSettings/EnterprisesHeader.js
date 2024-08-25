import React, { useState } from "react";
import "../../../assets/css/PickupHeader.css";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Logo from "../../../assets/images/Logo-icon.png";
import Profile from "../../../assets/images/PickupHead-Profile.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faUser, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import PickupNotificationModal from "../../pickupAndDropOff/PickupSettings/PickupNotificationModal";
import EnterpriseNotificationModal from "./EnterpriseNotificationModal";


const EnterprisesHeader = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div className="pickupHeader">
      <nav className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <Link to="/enterprises-home" className="homeHeader-Logocard">
            <img className="homeHeader-Logo" src={Logo} alt="logo" />
            <h4 className="homeHeader-companyName">Rapidmate</h4>
          </Link>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <ul className="nav-list">
          <li>
            <Link to="/enterprises-planing">Planning</Link>
          </li>
          <li>
            <Link to="/enterprises-history">Past orders</Link>
          </li>
          <li>
            <Link>Messages</Link>
          </li>
          <div className="login-nav-list">
            <li>
              <button className="pickupHome-SettingsBtn">
                <FontAwesomeIcon icon={faGear} />
              </button>
            </li>
            <li>
              <button onClick={openModal} className="pickupHome-SettingsBtn">
                <FontAwesomeIcon icon={faBell} />
              </button>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle
                  className="pickupHeader-profileActionBtn"
                  id="dropdown-basic"
                >
                  <img
                    className="pickupHeader-ProfileImg"
                    src={Profile}
                    alt="Profile"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                  <Link className="pickupHeader-accountTextsActions" to="/enterprise-account"><FontAwesomeIcon className="pickupHeader-accounts-Icons" icon={faUser} /> Account</Link>
                  </Dropdown.Item>
                  <Dropdown.Item className="pickupHeader-accountTextsActions" href="#/action-2">
                  <div><FontAwesomeIcon className="pickupHeader-accounts-Icons" icon={faGear} /> Settings</div>
                  </Dropdown.Item>
                  <Dropdown.Item className="pickupHeader-accountTextsActions" href="#/action-3">
                  <div><FontAwesomeIcon className="pickupHeader-accounts-Icons" icon={faRightToBracket} /> Sign Out</div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </div>
        </ul>
      </nav>
      <EnterpriseNotificationModal
        show={showModal}
        handleClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default EnterprisesHeader;
