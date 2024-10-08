import { useRef, useState } from "react";
import styled from "styled-components";
import Logo from "../assets/images/Logo-icon.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const SignupVerification = () => {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleOtpSubmit = () => {
    navigate("/enterprises-thankyou-signup");
  };

  const handleInputChange = (index, event) => {
    const value = event.target.value;
    if (!isNaN(value) && value.length <= 1) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      if (index < otp.length - 1 && value !== "") {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleInputPaste = (event) => {
    event.preventDefault();
    const pasteData = event.clipboardData.getData("Text").trim();
    if (pasteData.length === otp.length) {
      const newOTP = [...otp];
      for (let i = 0; i < pasteData.length; i++) {
        newOTP[i] = pasteData[i];
      }
      setOTP(newOTP);
    }
  };

  return (
    <PageContainer>
      <MainContent>
        <Title>OTP Verification</Title>
        <Subtitle>
          We have sent a 6 digit code to your email address please confirm the
          code below
        </Subtitle>
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
        <ResendCodeContainer>
          <button className="resend-code-btn" type="button">
            Resend Code
          </button>
        </ResendCodeContainer>
        <SubmitButton onClick={handleOtpSubmit} type="button">
          Submit
        </SubmitButton>
      </MainContent>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  background: linear-gradient(180deg, #fff2ce 0%, rgba(255, 242, 206, 0) 100%);
`;

const MainContent = styled.main`
  padding: 50px 20px 50px; // Adjust top padding to account for fixed header
  width: 100%;
  max-width: 600px;
  text-align: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
`;

const OTPContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
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

const ResendCodeContainer = styled.div`
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #FFC72B;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 25px;
`;

export default SignupVerification;
