import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../assets/css/PasswordModal.css";
import Logo from "../assets/images/Logo-icon.png";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ForgotPasswordOTPModal from "./ForgotPasswordOTPModal";

const ForgotPasswordEmailModal = ({ show, handleClose }) => {
  const [showOtpModal, setShowOtpModal] = useState(false); // State to manage ResetPasswordModal visibility

  const handleShowOtpModal = () => setShowOtpModal(true);
  const handleCloseOtpModal = () => setShowOtpModal(false);

  const handleEmailSubmit = () => {
    // Handle email submission logic here
    // For demo purposes, let's just open the ResetPasswordModal and close the current modal
    handleShowOtpModal();
    handleClose();
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        dialogClassName="modal-main"
      >
        <Modal.Header>
          <div className="modal-main-header">
            <FontAwesomeIcon
              className="modal-back-close"
              onClick={handleClose}
              icon={faArrowLeft}
            />
            <div className="logo-header-main-card">
              <div className="logo-header-card">
                <img className="logo-small" src={Logo} alt="Logo" />
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="forgot-title-header-card">
            <h2 className="forgot-password-title">Forgot password</h2>
            <p className="forgot-password-subtitle">
              Please confirm your email address, we will send OTP there
            </p>
          </div>

          <div>
            <Form>
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
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="modal-submit-btn-card">
            <button
              className="modal-email-submit-btn"
              onClick={handleEmailSubmit}
              type="button"
            >
              Submit
            </button>
          </div>
        </Modal.Footer>
      </Modal>

      {/* Render OtpModal conditionally based on showOtpModal state */}
      {showOtpModal && (
        <ForgotPasswordOTPModal
          show={showOtpModal}
          handleClose={handleCloseOtpModal}
        />
      )}
    </>
  );
};

export default ForgotPasswordEmailModal;
