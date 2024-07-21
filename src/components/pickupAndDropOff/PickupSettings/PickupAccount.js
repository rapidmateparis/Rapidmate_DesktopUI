import React from 'react';
import "../../../assets/css/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faArrowRight,
  faLocationCrosshairs,
} from "@fortawesome/free-solid-svg-icons";
import UserProfile from "../../../assets/images/PickupUser-Profile.jpeg";
import PickupAddressBook from './PickupAddressBook';
import PickupNotificationSettings from './PickupNotificationSettings';

const PickupAccount = () => {
  return (
    <>
     <section className='pickupAccount-Sec'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='pickupAccount-UserHeaderCard'>
                        <img className='pickupAccount-UserProfile' src={UserProfile} alt='User-Profile' />
                        <div>
                            <h5 className='pickupAccount-HeaderUserName'>John Doe</h5>
                            <p className='pickupAccount-HeaderUserEmail'>johndoe@email.com</p>
                        </div>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='pickupAccount-sidebarNav'>
                        <div className='pickupAccount-sideNavBtns'>
                          <a className='pickupAccount-NavLinkText' href="#">Address book</a>
                        </div>

                        <div className='pickupAccount-sideNavBtns'>
                          <a className='pickupAccount-NavLinkText' href="#">Payment methods</a>
                        </div>

                        <div className='pickupAccount-sideNavBtns'>
                          <a className='pickupAccount-NavLinkText' href="#">Billing details</a>
                        </div>

                        <div className='pickupAccount-sideNavBtns'>
                          <a className='pickupAccount-NavLinkText' href="#">Change password</a>
                        </div>

                        <div className='pickupAccount-sideNavBtns'>
                          <a className='pickupAccount-NavLinkText' href="#">Notifications</a>
                        </div>

                        <div className='pickupAccount-sideNavBtns'>
                          <a className='pickupAccount-NavLinkText' href="#">Language</a>
                        </div>

                        <div className='pickupAccount-sideNavBtns'>
                          <a className='pickupAccount-NavLinkText' href="#">Help</a>
                        </div>

                        <div className='pickupAccount-sideNavBtns'>
                          <a className='pickupAccount-NavLinkText' href="#">About us</a>
                        </div>

                        <div className='pickupAccount-sideNavBtns'>
                          <a className='pickupAccount-NavLinkText' href="#">Logout</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-8'>
                    <div>
                        {/* <PickupAddressBook/> */}
                        <PickupNotificationSettings /> 
                    </div>
                </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default PickupAccount; 