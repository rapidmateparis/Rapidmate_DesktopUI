import React, { useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import UploadIcon from "../../../assets/images/workout-card-1.png";
import LargeIcon from "../../../assets/images/workout-card-2.png";
import "../../../assets/css/PickupEditAddress.css";
import { Form } from "react-bootstrap";

function EnterpriseCreateNewAdModal({ show, handleClose }) {
  const [isPushNotificationChecked, setIsPushNotificationChecked] =
    useState(true);
  const [previewUrl1, setPreviewUrl1] = useState(null);
  const [previewUrl2, setPreviewUrl2] = useState(null);
  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);

  const handlePushNotificationChange = () => {
    setIsPushNotificationChecked(!isPushNotificationChecked);
    // Additional logic for push notifications toggle
  };

  const handleImageClick1 = () => {
    if (fileInputRef1.current) {
      fileInputRef1.current.click();
    }
  };

  const handleImageClick2 = () => {
    if (fileInputRef2.current) {
      fileInputRef2.current.click();
    }
  };

  const handleFileChange1 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newPreviewUrl = URL.createObjectURL(file);
      setPreviewUrl1(newPreviewUrl);
      return () => URL.revokeObjectURL(newPreviewUrl);
    }
  };

  const handleFileChange2 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newPreviewUrl = URL.createObjectURL(file);
      setPreviewUrl2(newPreviewUrl);
      return () => URL.revokeObjectURL(newPreviewUrl);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header>
        <div className="modalPickup-EditAddress-header">
          <p className="vehicleDimensions-TextHead">List New Ad</p>
          <FontAwesomeIcon
            className="modalClose-HeaderBtn"
            icon={faTimes}
            onClick={handleClose}
          />
        </div>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className="row">
            <div className="col-md-4">
              <div onClick={handleImageClick1} style={{ cursor: "pointer" }}>
                <img
                  className="enterpriseAddNewAd-UploadIconimg"
                  src={previewUrl1 || UploadIcon}
                  alt="Upload"
                />
              </div>
              <input
                type="file"
                ref={fileInputRef1}
                style={{ display: "none" }}
                onChange={handleFileChange1}
              />
            </div>
            <div className="col-md-8">
              <div onClick={handleImageClick2} style={{ cursor: "pointer" }}>
                <img
                  className="enterpriseAddNewAd-LargeIconimg"
                  src={previewUrl2 || LargeIcon}
                  alt="Large Icon"
                />
              </div>
              <input
                type="file"
                ref={fileInputRef2}
                style={{ display: "none" }}
                onChange={handleFileChange2}
              />
            </div>
          </div>

          <Form>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label className="enterpriseNewCompany-LocationTitleLabel">
                Title
              </Form.Label>
              <Form.Control
                className="enterpriseNewCompany-LocationTitleinput"
                type="text"
                placeholder="Type here.."
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label className="enterpriseNewCompany-LocationTitleLabel">
                Description
              </Form.Label>
              <Form.Control
                as="textarea"
                className="enterpriseNewCompany-LocationTitleinput"
                placeholder="Type here.."
                rows={3}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="enterpriseNewCompany-LocationTitleLabel">
                URL
              </Form.Label>
              <Form.Control
                className="enterpriseNewCompany-LocationTitleinput"
                type="text"
                placeholder="Type here.."
              />
            </Form.Group>
            <div className="pickupPushNotification-enableCard">
              <p className="pickupPush-NotificationSettings">
              Make it active now
              </p>
              <Form>
                <Form.Check
                  type="switch"
                  id="push-notification-switch"
                  checked={isPushNotificationChecked}
                  onChange={handlePushNotificationChange}
                  className={
                    isPushNotificationChecked ? "push-notifications-switch" : ""
                  }
                />
              </Form>
            </div>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="enterpriseNewCompanyLocation-addressDeleteBtn"
          onClick={() => {
            handleClose();
          }}
        >
          Cancel
        </button>
        <button className="enterpriseNewCompany-LocationaddressSaveBtn">
          Submit
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default EnterpriseCreateNewAdModal;
