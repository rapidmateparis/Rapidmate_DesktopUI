import React from "react";
import LogoFooter from "../assets/images/Logo-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

const HomeFooter = () => {
  return (
    <>
      <section className="HomeFooter-Sec">
        <div className="container">
          <div className="row">
            <div className="HomeFooter-logoCard">
              <img className="HomeFooter-logoImg" src={LogoFooter} alt="logo" />
              <h4 className="HomeFooter-CompanyName">Rapidmate</h4>
            </div>
            <div className="col-md-3">
              <div className="">
                <h4 className="HomeFooter-ReachTexttitle">Reach us</h4>
                <div className="HomeFooter-ReachCard">
                  <FontAwesomeIcon
                    className="HomeFooter-ReachCallIcon"
                    icon={faPhone}
                  />
                  <p className="HomeFooter-ReachText">+33761406084</p>
                </div>

                <div className="HomeFooter-ReachCard">
                  <FontAwesomeIcon
                    className="HomeFooter-ReachCallIcon"
                    icon={faEnvelope}
                  />
                  <p className="HomeFooter-ReachText">elyas@rapidmate.fr</p>
                </div>

                <div className="HomeFooter-ReachCard">
                  <FontAwesomeIcon
                    className="HomeFooter-ReachCallIcon"
                    icon={faLocationDot}
                  />
                  <p className="HomeFooter-ReachText">8B Avenue Danielle Casanova, 95210 Saint-Gratien, France</p>
                </div>
              </div>
            </div>

            <div className="col-md-2">
              <div className="">
                <h4 className="HomeFooter-ReachTexttitle">Company</h4>
                <div className="HomeFooter-CompanyLinksCards">
                  <Link className="HomeFooter-CompanyLinks">About</Link>
                </div>
                <div className="HomeFooter-CompanyLinksCards">
                  <Link className="HomeFooter-CompanyLinks">Contact</Link>
                </div>
                <div className="HomeFooter-CompanyLinksCards">
                  <Link className="HomeFooter-CompanyLinks">Blogs</Link>
                </div>
              </div>
            </div>

            <div className="col-md-2">
              <div className="">
                <h4 className="HomeFooter-ReachTexttitle">Legal</h4>
                <div className="HomeFooter-CompanyLinksCards">
                  <Link className="HomeFooter-CompanyLinks">
                    Privacy Policy
                  </Link>
                </div>
                <div className="HomeFooter-CompanyLinksCards">
                  <Link className="HomeFooter-CompanyLinks">
                    Terms & Services
                  </Link>
                </div>
                <div className="HomeFooter-CompanyLinksCards">
                  <Link className="HomeFooter-CompanyLinks">Terms of Use</Link>
                </div>
                <div className="HomeFooter-CompanyLinksCards">
                  <Link className="HomeFooter-CompanyLinks">Refund Policy</Link>
                </div>
              </div>
            </div>

            <div className="col-md-2">
              <div className="">
                <h4 className="HomeFooter-ReachTexttitle">Quick Links</h4>
                <div className="HomeFooter-CompanyLinksCards">
                  <Link className="HomeFooter-CompanyLinks">Home</Link>
                </div>
                <div className="HomeFooter-CompanyLinksCards">
                  <Link className="HomeFooter-CompanyLinks">Product</Link>
                </div>
                <div className="HomeFooter-CompanyLinksCards">
                  <Link className="HomeFooter-CompanyLinks">FAQs</Link>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="">
                <h4 className="HomeFooter-ReachTexttitle">
                  Join Our Newsletter
                </h4>
                <div>
                  <Form>
                    <div className="HomeFooter-SubscribeNewsletterCard">
                      <Form.Control
                        className="HomeFooter-SubscribeNewsletterInput"
                        type="email"
                        placeholder="Your email address"
                      />
                      <button className="HomeFooter-SubscribeBtn">
                        Subscribe
                      </button>
                    </div>
                    <p className="HomeFooter-SubscribeNewsletterDiscription">
                      * Will send you weekly updates and news about the company
                    </p>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeFooter;
