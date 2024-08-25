import React, { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import "../../../assets/css/PickupEditAddress.css";
import { MAPS_API_KEY } from "../../../commonComponents/GoogleMapAPI";

const center = { lat: 28.56341236809311, lng: 77.33609181917045 };

function PickupHomeMap({ markerPosition, setMarkerPosition, onSelectPlace }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: MAPS_API_KEY,
    libraries: ["places"],
  });

  const [map, setMap] = useState(null);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ position: "relative", height: "100%", width: "100%" }}>
      <GoogleMap
        center={markerPosition}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "300px" }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        onLoad={(map) => setMap(map)}
      >
        <Marker position={markerPosition} />
      </GoogleMap>
    </div>
  );
}

function EnterpriseAddNewLocationsModal({ show, handleClose }) {
  const [markerPosition, setMarkerPosition] = useState(center);
  const originRef = useRef(null);

  const handleSearch = () => {
    if (originRef.current && originRef.current.value) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode(
        { address: originRef.current.value },
        (results, status) => {
          if (status === "OK" && results[0]) {
            const position = results[0].geometry.location.toJSON();
            setMarkerPosition(position);
            // Call the parent callback if needed
          } else {
            console.error(
              "Geocode was not successful for the following reason:",
              status
            );
          }
        }
      );
    }
  };

  const handleSelectPlace = (place) => {
    if (place && place.geometry && place.geometry.location) {
      const position = place.geometry.location.toJSON();
      setMarkerPosition(position);
      // Call the parent callback if needed
    }
  };

  const handleSaveChanges = () => {
    // Implement save changes logic here
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header>
        <div className="modalPickup-EditAddress-header">
          <p className="vehicleDimensions-TextHead">Add new locations</p>
          <FontAwesomeIcon
            className="modalClose-HeaderBtn"
            icon={faTimes}
            onClick={handleClose}
          />
        </div>
      </Modal.Header>
      <Modal.Body>
        <PickupHomeMap
          markerPosition={markerPosition}
          setMarkerPosition={setMarkerPosition}
          onSelectPlace={handleSelectPlace}
        />
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="enterpriseNewCompany-LocationTitleLabel">
                Location title
              </Form.Label>
              <Form.Control
                className="enterpriseNewCompany-LocationTitleinput"
                type="text"
                placeholder="Type here.."
              />
            </Form.Group>
            <Form.Group className="enterpriseNewCompany-LocationSearchCard">
              <ReactGoogleAutocomplete
                className="enterpriseNewCompany-LocationSearchInput"
                placeholder="Search location"
                // apiKey={MAPS_API_KEY}
                ref={originRef}
                onPlaceSelected={handleSelectPlace}
              />
              <Button
                className="enterpriseNewCompany-LocationSetBtn"
                variant="outline-pink"
                onClick={handleSearch}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </Form.Group>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="enterpriseNewCompanyLocation-addressDeleteBtn"
          onClick={() => {handleClose()}}
        >
          Delete
        </button>
        <button
          className="enterpriseNewCompany-LocationaddressSaveBtn"
          onClick={handleSaveChanges}
        >
          Save
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default EnterpriseAddNewLocationsModal;
