import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faCheck,
  faLocationDot,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
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
import Banner from "../../assets/images/EnterpriseSignup-banner.png";
import { Link } from "react-router-dom";

const EnterpriseSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const checkboxTypes = ["checkbox"];

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
                      Enterprise signup
                    </h2>
                    <p className="choose-profile-subheading">
                      Let’s create your profile so you can request continuous
                      scheduled deliveries
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
                              placeholder="First Name"
                            />
                          </div>
                        </Form.Group>
                      </div>

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
                              placeholder="Last Name"
                            />
                          </div>
                        </Form.Group>
                      </div>

                      <div className="col-md-12">
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
                              type={showConfirmPassword ? "text" : "password"}
                              placeholder="Confirm password"
                            />
                            <FontAwesomeIcon
                              icon={showConfirmPassword ? faEye : faEyeSlash}
                              onClick={toggleConfirmPasswordVisibility}
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

                      <div className="col-md-12">
                        <Form.Group className="mb-3" controlId="formPlaintext">
                          <div className="pickupSignup-container">
                            <FontAwesomeIcon
                              className="pickup-signupFields-icons"
                              icon={faBuilding}
                            />
                            <Form.Control
                              className="signup-user-name"
                              type="text"
                              placeholder="Company name"
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
                            <option>Industry</option>
                            <option value="1">France</option>
                            <option value="2">India</option>
                            <option value="3">Nepal</option>
                          </Form.Select>
                        </Form.Group>
                      </div>

                      <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="formPlaintext">
                          <div className="pickupSignup-container">
                            <FontAwesomeIcon
                              className="pickup-signupFields-icons"
                              icon={faTruckFast}
                            />
                            <Form.Control
                              className="signup-user-name"
                              type="text"
                              placeholder="Deliveries per month / Hours per month"
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
                            <option>Ain</option>
                            <option value="1">France</option>
                            <option value="2">India</option>
                            <option value="3">Nepal</option>
                          </Form.Select>
                        </Form.Group>
                      </div>

                      <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="formPlaintext">
                          <Form.Select
                            className="pickup-singup-countrySelect"
                            aria-label="Default select example"
                          >
                            <option>ambérieu-e...</option>
                            <option value="1">France</option>
                            <option value="2">India</option>
                            <option value="3">Nepal</option>
                          </Form.Select>
                        </Form.Group>
                      </div>

                      <div className="col-md-12">
                        <Form.Group className="mb-3" controlId="formPlaintext">
                          <div className="pickupSignup-container">
                            <FontAwesomeIcon
                              className="pickup-signupFields-icons"
                              icon={faLocationDot}
                            />
                            <Form.Control
                              className="signup-user-name"
                              type="text"
                              placeholder="Siret"
                            />
                          </div>
                        </Form.Group>
                      </div>

                      <div className="col-md-12">
                        <Form.Group className="mb-3" controlId="formPlaintext">
                          <div className="pickupSignup-container">
                            <Form.Control className="signup-user-name" placeholder="Describe your projects here" as="textarea" rows={3} />
                          </div>
                        </Form.Group>
                      </div>

                      <div className="col-md-12">
                        <Form>
                          {checkboxTypes.map((type) => (
                            <div
                              key={`default-${type}`}
                              className="mb-3 deliveryboySignup-checkbox-card"
                            >
                              <Form.Check
                                type={type}
                                id={`default-${type}`}
                                label={null}
                                className="DeliveryboySignup-customcheckbox"
                              />
                              <p className="check-text">
                                We collect this data for the purposes of
                                processing your application to become a courier.
                                By clicking this box, you acknowledge that you
                                have read and understood the{" "}
                                <a
                                  className="deliverySignup-Policycheck"
                                  href="#"
                                >
                                  Privacy Policy
                                </a>
                              </p>
                            </div>
                          ))}
                        </Form>
                      </div>
                    </div>
                  </Form>

                  <div>
                    <Link
                      to="/enterprises-thankyou-signup"
                      className="pickup-signup-continueBtn"
                      type="button"
                    >
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
                <img className="enterpriseSignup-Bannerimg" src={Banner} alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnterpriseSignup;
