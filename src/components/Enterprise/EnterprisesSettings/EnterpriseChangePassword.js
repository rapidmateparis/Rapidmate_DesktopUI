import React, { useState } from "react";
import "../../../assets/css/home.css";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const EnterpriseChangePassword = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = (field) => {
    switch (field) {
      case "current":
        setShowCurrentPassword(!showCurrentPassword);
        break;
      case "new":
        setShowNewPassword(!showNewPassword);
        break;
      case "confirm":
        setShowConfirmPassword(!showConfirmPassword);
        break;
      default:
        break;
    }
  };

  return (
    <section className="addressBook-MainSec">
      <div className="row">
        <div className="col-md-12">
          <div className="addressBook-addressCard">
            <p className="addressBook-headerTitleText">Change password</p>
            <button className="addressBook-plusIconBtn">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>

          <div>
            <div>
              <Form>
                <Form.Group
                  className="mb-1"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="pickupChangePassword-LabelText">
                    Before setting up a new password, please confirm your
                    current password
                  </Form.Label>
                  <div className="pickupChange-PasswordCard">
                    <FontAwesomeIcon
                      className="pickupChangePassword-LockIcon"
                      icon={faLock}
                    />
                    <Form.Control
                      className="pickupChangePassword-inputs"
                      type={showCurrentPassword ? "text" : "password"}
                      placeholder="Current password"
                    />
                    <FontAwesomeIcon
                      className="pickupChangePassword-eyeIcon"
                      icon={showCurrentPassword ? faEye : faEyeSlash}
                      onClick={() => togglePasswordVisibility("current")}
                    />
                  </div>
                </Form.Group>
                <div className="changepassword-LinkCard">
                  <Link className="changePassword-ForgotPassword">
                    Forgot your password?
                  </Link>
                </div>

                <Form.Group
                  className="mb-1"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="pickupChangePassword-LabelText">
                    Use at least 12 characters, mixing uppercase, lowercase,
                    numbers, and symbols.
                  </Form.Label>
                  <div className="pickupChange-PasswordCard mb-3">
                    <FontAwesomeIcon
                      className="pickupChangePassword-LockIcon"
                      icon={faLock}
                    />
                    <Form.Control
                      className="pickupChangePassword-inputs"
                      type={showNewPassword ? "text" : "password"}
                      placeholder="New password"
                    />
                    <FontAwesomeIcon
                      className="pickupChangePassword-eyeIcon"
                      icon={showNewPassword ? faEye : faEyeSlash}
                      onClick={() => togglePasswordVisibility("new")}
                    />
                  </div>

                  <div className="pickupChange-PasswordCard">
                    <FontAwesomeIcon
                      className="pickupChangePassword-LockIcon"
                      icon={faLock}
                    />
                    <Form.Control
                      className="pickupChangePassword-inputs"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm new password"
                    />
                    <FontAwesomeIcon
                      className="pickupChangePassword-eyeIcon"
                      icon={showConfirmPassword ? faEye : faEyeSlash}
                      onClick={() => togglePasswordVisibility("confirm")}
                    />
                  </div>
                </Form.Group>
              </Form>

              <div className="pickupUpdate-PasswordCard">
                <button className="pickupUpdate-PasswordBtn">
                  Update password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseChangePassword;
