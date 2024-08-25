import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "../register/Login";
import ProfileChoose from "../register/ProfileChoose";
import PickupSignup from "../components/pickupAndDropOff/PickupSignup";
import PickupHome from "../components/pickupAndDropOff/PickupHome";
import AddPickupDetails from "../components/pickupAndDropOff/AddPickupDetails";
import PickupOrderPreview from "../components/pickupAndDropOff/PickupOrderPreview";
import PickupPayment from "../components/pickupAndDropOff/PickupPayment";
import PickupLookingForDriver from "../components/pickupAndDropOff/PickupLookingForDriver";
import PickupAccount from "../components/pickupAndDropOff/PickupSettings/PickupAccount";
import PickupHistory from "../components/pickupAndDropOff/PickupHistory";
import PickupDeliveryDetails from "../components/pickupAndDropOff/PickupDeliveryDetails";
import PickupNotifications from "../components/pickupAndDropOff/PickupNotifications";
import PickupFeedback from "../components/pickupAndDropOff/PickupFeedback";
import PickupOrderTracking from "../components/pickupAndDropOff/PickupOrderTracking";
import PickupAddressBook from "../components/pickupAndDropOff/PickupSettings/PickupAddressBook";
import PickupNotificationSettings from "../components/pickupAndDropOff/PickupSettings/PickupNotificationSettings";
import PickupPaymentMethods from "../components/pickupAndDropOff/PickupSettings/PickupPaymentMethods";
import PickupChangePassword from "../components/pickupAndDropOff/PickupSettings/PickupChangePassword";
import PickupAboutUs from "../components/pickupAndDropOff/PickupSettings/PickupAboutUs";
import PickupHelp from "../components/pickupAndDropOff/PickupSettings/PickupHelp";
import PrivacyPolicy from "./PrivacyPolicy";
import TermAndConditions from "./TermAndConditions";
import CancellationAndRefunds from "./CancellationAndRefunds";
import DataDeletion from "./DataDeletion";
import DeliveryboySignup from "../components/Deliveryboy/DeliveryboySignup";
import EnterpriseSignup from "../components/Enterprise/EnterpriseSignup";
import DeliveryboyAddVehicle from "../components/Deliveryboy/DeliveryboyAddVehicle";
import DeliveryboyProfileType from "../components/Deliveryboy/DeliveryboyProfileType";
import DeliveryboyThankyouSignup from "../components/Deliveryboy/DeliveryboyThankyouSignup";
import EnterprisesThankyouSignup from "../components/Enterprise/EnterprisesThankyouSignup";
import EnterprisesHome from "../components/Enterprise/EnterprisesHome";
import EnterprisePlaning from "../components/Enterprise/EnterprisePlaning";
import EnterprisesNewSchedule from "../components/Enterprise/EnterprisesNewSchedule";
import EnterpriseOneTimeSelectLocation from "../components/Enterprise/EnterpriseOneTimeSelectLocation";
import EnterpriseOneTimeSelectServiceType from "../components/Enterprise/EnterpriseOneTimeSelectServiceType";
import EnterpriseScheduleApproved from "../components/Enterprise/EnterpriseScheduleApproved";
import EnterpriseMultipleDeliveriesSelectService from "../components/Enterprise/EnterpriseMultipleDeliveriesSelectService";
import EnterpriseMultipleDeliverySelectLocation from "../components/Enterprise/EnterpriseMultipleDeliverySelectLocation";
import EnterpriseCreateShiftSelectLocation from "../components/Enterprise/EnterpriseCreateShiftSelectLocation";
import EnterpriseCreateShiftSelectServiceType from "../components/Enterprise/EnterpriseCreateShiftSelectServiceType";
import EnterpriseCreateShiftAvailablity from "../components/Enterprise/EnterpriseCreateShiftAvailablity";
import EnterpriseCreateShiftRequestApproved from "../components/Enterprise/EnterpriseCreateShiftRequestApproved";
import EnterpriseHistory from "../components/Enterprise/EnterpriseHistory";
import EnterpriseShiftDetails from "../components/Enterprise/EnterpriseShiftDetails";
import EnterpriseDeliveryboyShiftPage from "../components/Enterprise/EnterpriseDeliveryboyShiftPage";
import EnterpriseAccount from "../components/Enterprise/EnterprisesSettings/EnterpriseAccount";
import EnterpriseAddressBook from "../components/Enterprise/EnterprisesSettings/EnterpriseAddressBook";
import EnterpriseNotificationSettings from "../components/Enterprise/EnterprisesSettings/EnterpriseNotificationSettings";
import EnterprisePaymentMethods from "../components/Enterprise/EnterprisesSettings/EnterprisePaymentMethods";
import EnterpriseChangePassword from "../components/Enterprise/EnterprisesSettings/EnterpriseChangePassword";
import EnterpriseAboutUs from "../components/Enterprise/EnterprisesSettings/EnterpriseAboutUs";
import EnterpriseHelp from "../components/Enterprise/EnterprisesSettings/EnterpriseHelp";
import EnterpriseManageCompanyLocations from "../components/Enterprise/EnterprisesSettings/EnterpriseManageCompanyLocations";
import EnterpriseManageAds from "../components/Enterprise/EnterprisesSettings/EnterpriseManageAds";
import EnterpriseNotification from "../components/Enterprise/EnterprisesSettings/EnterpriseNotification";

const MainRoutes = () => {
  return (
    <Routes>
      {/* Coomon Pages Routes Start Here  */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/term-and-conditions" element={<TermAndConditions />} />
      <Route
        path="/cancellation-and-refunds"
        element={<CancellationAndRefunds />}
      />
      <Route path="/data-deletion" element={<DataDeletion />} />
      {/* Pickup Pages Routes Start Here  */}
      <Route path="/profile-choose" element={<ProfileChoose />} />
      <Route path="/pickup-signup" element={<PickupSignup />} />
      <Route path="/pickup-home" element={<PickupHome />} />
      <Route path="/add-pickup-details" element={<AddPickupDetails />} />
      <Route path="/pickup-order-preview" element={<PickupOrderPreview />} />
      <Route path="/pickup-payment" element={<PickupPayment />} />
      <Route
        path="/pickup-looking-for-driver"
        element={<PickupLookingForDriver />}
      />
      <Route path="/pickup-history" element={<PickupHistory />} />
      <Route
        path="/pickup-delivery-details"
        element={<PickupDeliveryDetails />}
      />
      <Route path="/pickup-notifications" element={<PickupNotifications />} />
      <Route path="/pickup-feedback" element={<PickupFeedback />} />
      <Route path="/pickup-ordertracking" element={<PickupOrderTracking />} />
      {/* Pickup Accounts Routes Start here  */}
      <Route path="/pickup-account" element={<PickupAccount />}>
        <Route index element={<PickupAddressBook />} />
        <Route path="pickup-address-book" element={<PickupAddressBook />} />
        <Route
          path="pickup-notification-settings"
          element={<PickupNotificationSettings />}
        />
        <Route
          path="pickup-payment-methods"
          element={<PickupPaymentMethods />}
        />
        <Route
          path="pickup-change-password"
          element={<PickupChangePassword />}
        />
        <Route path="pickup-about-us" element={<PickupAboutUs />} />
        <Route path="pickup-help" element={<PickupHelp />} />
      </Route>
      {/* Pickup Accounts Routes End here  */}
      {/* Deliveryboy Routes Start Here  */}
      <Route path="/deliveryboy-signup" element={<DeliveryboySignup />} />
      <Route
        path="/deliveryboy-add-vehicle"
        element={<DeliveryboyAddVehicle />}
      />
      <Route
        path="/deliveryboy-profile-type"
        element={<DeliveryboyProfileType />}
      />
      <Route
        path="/deliveryboy-thankyou-signup"
        element={<DeliveryboyThankyouSignup />}
      />
      {/* Enterprises Routes Start Here  */}
      <Route path="/enterprises-signup" element={<EnterpriseSignup />} />
      <Route
        path="/enterprises-thankyou-signup"
        element={<EnterprisesThankyouSignup />}
      />
      <Route path="/enterprises-home" element={<EnterprisesHome />} />
      <Route path="/enterprises-planing" element={<EnterprisePlaning />} />
      <Route
        path="/enterprises-new-schedule"
        element={<EnterprisesNewSchedule />}
      />
      <Route
        path="/enterprises-onetime-selectlocation"
        element={<EnterpriseOneTimeSelectLocation />}
      />
      <Route
        path="/enterprises-onetime-selectservicetype"
        element={<EnterpriseOneTimeSelectServiceType />}
      />
      <Route
        path="/enterprises-schedule-approved"
        element={<EnterpriseScheduleApproved />}
      />
      <Route
        path="/enterprises-multiple-deliveries-serviceselect"
        element={<EnterpriseMultipleDeliveriesSelectService />}
      />
      <Route
        path="/enterprises-multiple-deliveries-selectlocation"
        element={<EnterpriseMultipleDeliverySelectLocation />}
      />
      <Route
        path="/enterprises-createshift-selectlocation"
        element={<EnterpriseCreateShiftSelectLocation />}
      />
      <Route
        path="/enterprises-createshift-serviceselect"
        element={<EnterpriseCreateShiftSelectServiceType />}
      />
      <Route
        path="/enterprises-createshift-availability"
        element={<EnterpriseCreateShiftAvailablity />}
      />
      <Route
        path="/enterprises-createshift-requestapproved"
        element={<EnterpriseCreateShiftRequestApproved />}
      />
      <Route path="/enterprises-history" element={<EnterpriseHistory />} />
      <Route path="/enterprises-notification" element={<EnterpriseNotification />} />
      <Route
        path="/enterprises-shift-details"
        element={<EnterpriseShiftDetails />}
      />
      <Route
        path="/enterprises-deliveryboy-shiftpage"
        element={<EnterpriseDeliveryboyShiftPage />}
      />
      {/* Enterprise Account Routes Start Here  */}
      <Route path="/enterprise-account" element={<EnterpriseAccount />}>
        <Route index element={<EnterpriseAddressBook />} />
        <Route path="enterprise-address-book" element={<EnterpriseAddressBook />} />
        <Route path="enterprise-managecompany-location" element={<EnterpriseManageCompanyLocations />} />
        <Route path="enterprise-manage-ads" element={<EnterpriseManageAds />} />
        <Route
          path="enterprise-notification-settings"
          element={<EnterpriseNotificationSettings />}
        />
        <Route
          path="enterprise-payment-methods"
          element={<EnterprisePaymentMethods />}
        />
        <Route
          path="enterprise-change-password"
          element={<EnterpriseChangePassword />}
        />
        <Route path="enterprise-about-us" element={<EnterpriseAboutUs />} />
        <Route path="enterprise-help" element={<EnterpriseHelp />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
