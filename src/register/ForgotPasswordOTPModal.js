import { useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";
import Logo from "../assets/images/Logo-icon.png";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import ResetPasswordModal from "./ResetPasswordModal";

const ForgotPasswordOTPModal = ({ show, handleClose }) => {
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleShowResetPasswordModal = () => setShowResetPasswordModal(true);
  const handleCloseResetPasswordModal = () => setShowResetPasswordModal(false);

  const handleOtpSubmit = () => {
    // Handle email submission logic here
    // For demo purposes, let's just open the ResetPasswordModal and close the current modal
    handleShowResetPasswordModal();
    handleClose();
  };

  const handleInputChange = (index, event) => {
    const value = event.target.value;
    // Ensure only numbers are entered
    if (!isNaN(value) && value.length <= 1) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);

      // Auto focus next input
      if (index < otp.length - 1 && value !== "") {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleInputPaste = (event) => {
    event.preventDefault();
    const pasteData = event.clipboardData.getData("Text").trim();
    if (pasteData.length === otp.length) {
      // Update OTP state with pasted value
      const newOTP = [...otp];
      for (let i = 0; i < pasteData.length; i++) {
        newOTP[i] = pasteData[i];
      }
      setOTP(newOTP);
    }
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
              We have sent a 6 digit code to your email address{" "}
              <b> joh***********@gmail.com</b>, please confirm the code below
            </p>
          </div>

          <OTPContainer>
            {otp.map((digit, index) => (
              <OTPInputBox
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleInputChange(index, e)}
                onPaste={(e) => handleInputPaste(e)}
                placeholder="0"
              />
            ))}
          </OTPContainer>

          <div className="resend-code-card">
            <button className="resend-code-btn" type="button">
              Resend code
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="modal-submit-btn-card">
            <button
              className="modal-email-submit-btn"
              onClick={handleOtpSubmit}
              type="button" // Ensure this is type="button" to prevent form submission
            >
              Submit
            </button>
          </div>
        </Modal.Footer>
      </Modal>
      {/* Render ResetPasswordModal conditionally based on showResetPasswordModal state */}
      <ResetPasswordModal
        show={showResetPasswordModal}
        handleClose={handleCloseResetPasswordModal}
      />
    </>
  );
};

const OTPContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const OTPInputBox = styled.input`
  width: 40px;
  height: 40px;
  margin: 0 5px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  border: 2px solid #ccc;
  border-radius: 5px;
  ::placeholder {
    color: #aaa; /* Placeholder text color */
  }
`;

export default ForgotPasswordOTPModal;
