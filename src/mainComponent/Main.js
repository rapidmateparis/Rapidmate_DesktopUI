import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from '../register/Login';
import ProfileChoose from '../register/ProfileChoose';
import PickupSignup from '../components/pickupAndDropOff/PickupSignup';
import PickupHome from '../components/pickupAndDropOff/PickupHome';
import AddPickupDetails from '../components/pickupAndDropOff/AddPickupDetails';
import PickupOrderPreview from '../components/pickupAndDropOff/PickupOrderPreview';
import PickupPayment from '../components/pickupAndDropOff/PickupPayment';
import PickupLookingForDriver from '../components/pickupAndDropOff/PickupLookingForDriver';
import PickupAccount from '../components/pickupAndDropOff/PickupSettings/PickupAccount';

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile-choose" element={<ProfileChoose />} />
      <Route path="/pickup-signup" element={<PickupSignup />} />
      <Route path="/pickup-home" element={<PickupHome />} />
      <Route path="/add-pickup-details" element={<AddPickupDetails />} />
      <Route path="/pickup-order-preview" element={<PickupOrderPreview />} />
      <Route path="/pickup-payment" element={<PickupPayment />} />
      <Route path="/pickup-looking-for-driver" element={<PickupLookingForDriver />} />
      <Route path="/pickup-account" element={<PickupAccount />} />
    </Routes>
  )
}

export default Main;