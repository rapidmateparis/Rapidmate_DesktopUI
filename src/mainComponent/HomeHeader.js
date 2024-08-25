import React from "react";
import "../assets/css/HomeHeader.css";
import Form from "react-bootstrap/Form";
import Logo from "../assets/images/Logo-icon.png";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <div className="homeHeader">
      <nav className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <Link to="/" className="homeHeader-Logocard">
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link>Product</Link>
          </li>
          <li>
            <Link>FAQ</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
          <li>
            <Link>About Us</Link>
          </li>
          <div className="login-nav-list">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link className="homeHeader-Signuplink" to="/profile-choose">Sign Up</Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default HomeHeader;
