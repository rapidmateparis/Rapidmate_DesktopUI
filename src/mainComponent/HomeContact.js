import React from 'react';
import { Form } from "react-bootstrap";
import Sender from "../assets/images/ContactForm-SenderImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const HomeContact = () => {
  return (
    <>
    <section className="homeContact-Sec">
        <div>
          <div className="row manageRow">
            <div className="col-md-6">
              <div className="homeContact-DetailsCard">
                <h4 className="homeContact-TitleText">Contact us</h4>
                <p className="homeContact-DiscriptionText">
                  Say something to start an email thread
                </p>
                <div className="homeContact-NumberMainCard">
                  <div className="homeContact-NumberCard">
                    <FontAwesomeIcon
                      className="homeContact-PhoneIcon"
                      icon={faPhone}
                    />
                    <p className="homeContact-Numbertext">+33761406084</p>
                  </div>

                  <div className="homeContact-NumberCard">
                    <FontAwesomeIcon
                      className="homeContact-PhoneIcon"
                      icon={faEnvelope}
                    />
                    <p className="homeContact-Numbertext">elyas@rapidmate.fr</p>
                  </div>

                  <div className="homeContact-NumberCard">
                    <FontAwesomeIcon
                      className="homeContact-PhoneIcon"
                      icon={faLocationDot}
                    />
                    <p className="homeContact-Numbertext">
                      8B Avenue Danielle Casanova, 95210 Saint-Gratien, France
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <Form className="homeContact-FormMainCardForm">
                <div className="row manageRow">
                  <div className="col-md-6">
                    <Form.Group
                      className="mb-3 mr-2"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="homeContact-FormLabel">
                        First Name
                      </Form.Label>
                      <Form.Control
                        className="homeContact-FormInput"
                        type="text"
                        placeholder="Type here.."
                      />
                    </Form.Group>
                  </div>

                  <div className="col-md-6">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="homeContact-FormLabel">
                        Last Name
                      </Form.Label>
                      <Form.Control
                        className="homeContact-FormInput"
                        type="text"
                        placeholder="Type here.."
                      />
                    </Form.Group>
                  </div>

                  <div className="col-md-6">
                    <Form.Group
                      className="mb-3 mr-2"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="homeContact-FormLabel">
                        Email
                      </Form.Label>
                      <Form.Control
                        className="homeContact-FormInput"
                        type="email"
                        placeholder="Type here.."
                      />
                    </Form.Group>
                  </div>

                  <div className="col-md-6">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="homeContact-FormLabel">
                        Phone Number
                      </Form.Label>
                      <Form.Control
                        className="homeContact-FormInput"
                        type="text"
                        placeholder="Type here.."
                      />
                    </Form.Group>
                  </div>

                  <div className="col-md-12">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="homeContact-FormLabel">
                        Subject
                      </Form.Label>
                      <Form.Control
                        className="homeContact-FormInput"
                        type="text"
                        placeholder="Type here.."
                      />
                    </Form.Group>
                  </div>

                  <div className="col-md-12">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="homeContact-FormLabel">
                        Message
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        className="homeContact-FormInput"
                        type="text"
                        placeholder="Type here.."
                      />
                    </Form.Group>
                  </div>
                  <div className="col-md-12">
                    <div className="HomeContact-FromMessageSendBtnCard">
                      <button className="HomeContact-FromMessageSendBtn">Send Message</button>
                      <img className="homeContact-SenderImg" src={Sender} alt="img"/>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeContact