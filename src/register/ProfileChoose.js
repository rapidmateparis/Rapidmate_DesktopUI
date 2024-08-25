import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/home.css';
import Logo from '../assets/images/Logo-icon.png';
import Home from '../assets/images/home-icon.png';
import Pickup from '../assets/images/pickup-icon.png';
import Deliveryboy from '../assets/images/deliveryboy.png';
import HomeBanner from '../assets/images/home-banner.png';

const ProfileChoose = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate(); 

  const handleCardClick = (option) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (selectedOption === 'pickup') {
      navigate('/pickup-signup');
    } else if (selectedOption === 'enterprise') {
      navigate('/enterprises-signup');
    } else if (selectedOption === 'delivery') {
      navigate('/deliveryboy-signup');
    }
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
            <div className="col-md-6">
              <div className="choose-main-card">
                <div className="choose-profile-card">
                  <h2 className="choose-profile-heading">Choose profile</h2>
                  <p className="choose-profile-subheading">
                    Before creating your profile, please select your role on
                    this app.
                  </p>
                </div>

                <div>
                  <div
                    className={`category-cards ${
                      selectedOption === 'enterprise' ? 'selected' : ''
                    }`}
                    onClick={() => handleCardClick('enterprise')}
                  >
                    <img className="Enterprise-icon" src={Home} alt="icon" />
                    <div className="category-types-card">
                      <p className="here-text">I am here as</p>
                      <h2 className="category-types">Enterprise</h2>
                    </div>
                    <div
                      className={`circle-choose ${
                        selectedOption === 'enterprise' ? 'selected' : ''
                      }`}
                    >
                      {selectedOption === 'enterprise' && (
                        <FontAwesomeIcon
                          className="selected-check"
                          icon={faCheck}
                        />
                      )}
                    </div>
                  </div>

                  <div
                    className={`category-cards ${
                      selectedOption === 'pickup' ? 'selected' : ''
                    }`}
                    onClick={() => handleCardClick('pickup')}
                  >
                    <img className="Pickup-icon" src={Pickup} alt="icon" />
                    <div className="category-types-card">
                      <p className="here-text">I am here as</p>
                      <h2 className="category-types">Pickup & Drop-off</h2>
                    </div>
                    <div
                      className={`circle-choose ${
                        selectedOption === 'pickup' ? 'selected' : ''
                      }`}
                    >
                      {selectedOption === 'pickup' && (
                        <FontAwesomeIcon
                          className="selected-check"
                          icon={faCheck}
                        />
                      )}
                    </div>
                  </div>

                  <div
                    className={`category-cards ${
                      selectedOption === 'delivery' ? 'selected' : ''
                    }`}
                    onClick={() => handleCardClick('delivery')}
                  >
                    <img
                      className="Deliveryboy-icon"
                      src={Deliveryboy}
                      alt="icon"
                    />
                    <div className="category-types-card">
                      <p className="here-text">I am here as</p>
                      <h2 className="category-types">Delivery boy</h2>
                    </div>
                    <div
                      className={`circle-choose ${
                        selectedOption === 'delivery' ? 'selected' : ''
                      }`}
                    >
                      {selectedOption === 'delivery' && (
                        <FontAwesomeIcon
                          className="selected-check"
                          icon={faCheck}
                        />
                      )}
                    </div>
                  </div>

                  <div className="choose-continue-card">
                    <button
                      className="choose-continue-btn"
                      onClick={handleContinue}
                    >
                      Continue
                    </button>
                  </div>

                  <div>
                    <p className="account-login">
                      Already have an account?{' '}
                      <Link to="/login" className="login-go-btn">
                        Login
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="profile-choose-bannerCard">
                <img className="choose-banner" src={HomeBanner} alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileChoose;
