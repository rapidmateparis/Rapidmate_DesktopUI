import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faEnvelope,
  faEye,
  faEyeSlash,
  faBuilding,
} from "@fortawesome/free-regular-svg-icons";
import "../../assets/css/home.css";
import Logo from "../../assets/images/Logo-icon.png";
import Flag from "../../assets/images/numberFlag.png";
import SignupBanner from "../../assets/images/Pickup-Signup-Banner.png";
import { Link } from "react-router-dom";

const PickupSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  const handleSelection = (type) => {
    setSelectedType(type);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <section className="profile-choose-sec">
        <div className="container">
          <div>
            <a className="logo-card" href="#">
              <img className="logo" src={Logo} alt="logo" />
              <h2 className="companyName">Rapidmate</h2>
            </a>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="pickup-signup-form-main-card">
                <div className="choose-main-card">
                  <div className="choose-profile-card">
                    <h2 className="choose-profile-heading">
                      Pickup & Drop-off signup
                    </h2>
                    <p className="choose-profile-subheading">
                      Let’s create your profile so you can have complete
                      experience of the app
                    </p>
                  </div>
                </div>
                <div>
                  <Form>
                    <div className="row">
                      <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="formPlaintext">
                          <div className="pickupSignup-container">
                            <FontAwesomeIcon
                              className="pickup-signupFields-icons"
                              icon={faUser}
                            />
                            <Form.Control
                              className="signup-user-name"
                              type="text"
                              placeholder="Name"
                            />
                          </div>
                        </Form.Group>
                      </div>

                      <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="formPlaintext">
                          <div className="pickupSignup-container">
                            <FontAwesomeIcon
                              className="pickup-signupFields-icons"
                              icon={faEnvelope}
                            />
                            <Form.Control
                              className="signup-user-name"
                              type="text"
                              placeholder="Email"
                            />
                          </div>
                        </Form.Group>
                      </div>

                      <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="formPlaintext">
                          <div className="pickupSignup-container">
                            <FontAwesomeIcon
                              className="pickup-signupFields-icons"
                              icon={faLock}
                            />
                            <Form.Control
                              className="password-field signup-user-name"
                              type={showPassword ? "text" : "password"}
                              placeholder="Password"
                            />
                            <FontAwesomeIcon
                              icon={showPassword ? faEye : faEyeSlash}
                              onClick={togglePasswordVisibility}
                              className="signupPassword-eye-icon"
                            />
                          </div>
                        </Form.Group>
                      </div>

                      <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="formPlaintext">
                          <div className="pickupSignup-container">
                            <FontAwesomeIcon
                              className="pickup-signupFields-icons"
                              icon={faLock}
                            />
                            <Form.Control
                              className="password-field signup-user-name"
                              type={showPassword ? "text" : "password"}
                              placeholder="Confirm password"
                            />
                            <FontAwesomeIcon
                              icon={showPassword ? faEye : faEyeSlash}
                              onClick={togglePasswordVisibility}
                              className="signupPassword-eye-icon"
                            />
                          </div>
                        </Form.Group>
                      </div>

                      <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="formPlaintext">
                          <div className="pickupSignup-container">
                            <Form.Select
                              className="select-numberByCountry"
                              aria-label="Default select example"
                            >
                              <option value="1">+33</option>
                              <option value="2">+91</option>
                              <option value="3">+11</option>
                            </Form.Select>
                            <Form.Control
                              className="password-field signup-user-name"
                              type="text"
                              placeholder="0 00 00 00 00"
                            />
                          </div>
                        </Form.Group>
                      </div>

                      <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="formPlaintext">
                          <Form.Select
                            className="pickup-singup-countrySelect"
                            aria-label="Default select example"
                          >
                            <option>Country</option>
                            <option value="1">France</option>
                            <option value="2">India</option>
                            <option value="3">Nepal</option>
                          </Form.Select>
                        </Form.Group>
                      </div>
                    </div>

                    <div className="row">
                      <p className="pickup-singup-accountType">
                        Create account as:
                      </p>
                      <div className="col-md-6">
                        <div
                          className={`pickup-signup-typeOfAc ${
                            selectedType === "Individual" ? "selected" : ""
                          }`}
                          onClick={() => handleSelection("Individual")}
                        >
                          <FontAwesomeIcon
                            className="pickup-signupFields-icons"
                            icon={faUser}
                          />
                          <p className="acNames-type">Individual</p>
                          <div
                            className={`pickup-signup-AcCircle ${
                              selectedType === "Individual" ? "selected" : ""
                            }`}
                          >
                            {selectedType === "Individual" && (
                              <FontAwesomeIcon
                                className="selected-check"
                                icon={faCheck}
                              />
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div
                          className={`pickup-signup-typeOfAc ${
                            selectedType === "Company" ? "selected" : ""
                          }`}
                          onClick={() => handleSelection("Company")}
                        >
                          <FontAwesomeIcon
                            className="pickup-signupFields-icons"
                            icon={faBuilding}
                          />
                          <p className="acNames-type">Company</p>
                          <div
                            className={`pickup-signup-AcCircle ${
                              selectedType === "Company" ? "selected" : ""
                            }`}
                          >
                            {selectedType === "Company" && (
                              <FontAwesomeIcon
                                className="selected-check"
                                icon={faCheck}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                  <div>
                    <Link to="/pickup-home" className="pickup-signup-continueBtn" type="button">
                      Continue
                    </Link>
                    <p className="pickup-signup-acLogin-text">
                      Already have an account?{" "}
                      <Link to="/login" className="login-text-signup" href="#">
                        Login
                      </Link>
                    </p>
                    <p className="pickup-signup-acLogin-text">
                      By signing up you agree to{" "}
                      <a className="login-text-signup" href="#">
                        Privacy policy
                      </a>{" "}
                      &{" "}
                      <a className="login-text-signup" href="#">
                        Terms
                      </a>{" "}
                      of RapidMate{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="profile-choose-bannerCard">
                <img className="PickupSignup-banner" src={SignupBanner} alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PickupSignup;
