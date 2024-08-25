import React, { useState } from "react";
import "../assets/css/home.css";
import Loginbanner from "../assets/images/Login-banner.png";
import Logo from "../assets/images/Logo-icon.png";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import ForgotPasswordEmailModal from './ForgotPasswordEmailModal';
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const checkboxTypes = ["checkbox"];
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <>
      <section className="login-section">
        <div className="row manageRow">
          <div className="col-md-5">
            <div className="login-main">
              <div>
                <a className="logo-card" href="#">
                  <img className="logo" src={Logo} alt="banner" />
                  <h2 className="companyName">Rapidmate</h2>
                </a>
              </div>

              <div className="login-card">
                <div className="welcomeuser-card">
                  <h1 className="welcome-login">Welcome!</h1>
                  <p className="loginInfo">Login with email</p>
                </div>

                <div>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="login-labels">Email</Form.Label>
                      <Form.Control
                        className="login-inputs"
                        type="email"
                        placeholder="Type here.."
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="formPlaintextPassword"
                    >
                      <Form.Label className="login-labels">Password</Form.Label>
                      <div className="password-input-container">
                        <Form.Control
                          className="password-field login-inputs"
                          type={showPassword ? "text" : "password"}
                          placeholder="Type here.."
                        />
                        <FontAwesomeIcon
                          icon={showPassword ? faEyeSlash : faEye}
                          onClick={togglePasswordVisibility}
                          className="eye-icon"
                        />
                      </div>
                    </Form.Group>
                  </Form>
                  <div className="forgot-card">
                    <a onClick={handleShowModal} className="forgot-password" href="#">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div>
                  <Link className="signin-btn" to='/profile-choose'>
                    Sign in
                  </Link>
                  <div>
                    <Form>
                      {checkboxTypes.map((type) => (
                        <div key={`default-${type}`} className="mb-3 checkbox-card">
                          <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label={null}
                            className="custom-checkbox"
                          />
                          <p className="check-text">I have read & agree to the <a className="terms-check" href="#">Terms of Use</a></p>
                        </div>
                      ))}
                    </Form>
                  </div>
                </div>
              </div>

              <div className="register-card">
                <p className="no-account">Don't have an account yet? <Link to="/profile-choose" className="register-text" href="#">Register</Link></p>
              </div>
            </div>
          </div>

          <div className="col-md-7">
            <div>
              <img className="login-banner" src={Loginbanner} alt="banner" />
            </div>
          </div>

          {/* ---------- Modal include here ---------  */}
          <ForgotPasswordEmailModal show={showModal} handleClose={handleCloseModal} />

        </div>
      </section>
    </>
  );
};

export default Login;
