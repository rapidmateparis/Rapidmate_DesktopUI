import React from 'react'
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
    <div>
        <PickupAccount/>
    </div>
  )
}

export default Main;