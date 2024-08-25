import React, { useState } from "react";
import "../../assets/css/home.css";
import EnterprisesHeader from "./EnterprisesSettings/EnterprisesHeader";
import Track from "../../assets/images/Track-Order-availability.png";
import CreateShift from "../../assets/images/CreateShift-Calender.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faX,
  faClock,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";

const EnterpriseCreateShiftAvailablity = () => {
  const [value, setValue] = useState(new Date());
  const [rows, setRows] = useState([{ from: "", to: "" }]);

  const handleAddRow = () => {
    setRows([...rows, { from: "", to: "" }]);
  };

  const handleChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const handleDeleteRow = (index) => {
    // Avoid deleting the initial row
    if (rows.length > 1) {
      const updatedRows = rows.filter((_, i) => i !== index);
      setRows(updatedRows);
    }
  };

  const dateStyles = [
    { date: new Date(2024, 6, 15), color: "orange" },
    { date: new Date(2024, 6, 20), color: "mediumaquamarine" },
    { date: new Date(2024, 6, 25), color: "steelblue" },
    { date: new Date(2024, 6, 28), color: "mediumpurple" },
  ];

  const tileClassName = ({ date }) => {
    const style = dateStyles.find(
      (d) =>
        date.getDate() === d.date.getDate() &&
        date.getMonth() === d.date.getMonth() &&
        date.getFullYear() === d.date.getFullYear()
    );
    return style ? `marked-date-${style.color}` : null;
  };

  return (
    <>
      {/* Header Start Here  */}
      <EnterprisesHeader />
      {/* Header End Here  */}
      <section className="enterprisenew-ScheduleSec">
        <div>
          <div className="row manageRow">
            <div className="col-md-4">
              <div className="enterpriseNew-ScheduleTitleCard">
                <div>
                  <h4 className="enterpriseNew-ScheduleText">Create shift</h4>
                  <img
                    className="enterprise-CreateShiftTrackImg"
                    src={Track}
                    alt="img"
                  />
                </div>
                <div>
                  <img
                    className="enterprise-CreateShiftImg"
                    src={CreateShift}
                    alt="Img"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="enterpriseCreateShift-setavailabilityActionBtnCard">
                <h4 className="enterpriseNew-ScheduleSelectType">
                  Set availability
                </h4>
                <div>
                  <button className="enterpriseCreateShift-setavailabilitycancelBtn">
                    Cancel
                  </button>
                  <button className="enterpriseCreateShift-setavailabilitySaveBtn">
                    Save
                  </button>
                </div>
              </div>
              <div className="row manageRow">
                <div className="col-md-8">
                  <div className="enterpriseCreateShift-setavailabilityMainCard">
                    <div className="enterprisePlanning-CalenderMain">
                      <Calendar
                        onChange={setValue}
                        value={value}
                        tileClassName={tileClassName}
                      />
                      <style>
                        {`
                    .react-calendar__tile {
                     position: relative;
                    }
                   .marked-date-orange::after {
                    content: '';
                    position: absolute;
               bottom: 5px;
            left: 50%;
            transform: translateX(-50%);
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: orange;
          }
          .marked-date-mediumaquamarine::after {
            content: '';
            position: absolute;
            bottom: 5px;
            left: 50%;
            transform: translateX(-50%);
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: mediumaquamarine;
          }
          .marked-date-steelblue::after {
            content: '';
            position: absolute;
            bottom: 5px;
            left: 50%;
            transform: translateX(-50%);
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: steelblue;
          }
            .marked-date-mediumpurple::after {
            content: '';
            position: absolute;
            bottom: 5px;
            left: 50%;
            transform: translateX(-50%);
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: mediumpurple;
          }
        `}
                      </style>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="enterpriseCreateShift-availabilityMainCard">
                    <div className="enterpriseCreateShift-availabilityHeader">
                      <div>
                        <p className="enterpriseCreateShift-availabilityText">
                          Set availability of
                        </p>
                        <h4 className="enterpriseCreateShift-availabilityDate">
                          June 5, 2024
                        </h4>
                      </div>
                      <button className="enterprisePlannig-dateCloseIcon">
                        <FontAwesomeIcon icon={faX} />
                      </button>
                    </div>
                    <div className="enterpriseCreateShift-availabilitySlotsMainCard">
                      <div>
                        <button className="enterpriseCreateShift-availabilityPasteSlot">
                          Paste time slots
                        </button>
                        <button className="enterpriseCreateShift-availabilityCopySlot">
                          Copy time slots
                        </button>
                      </div>
                      <div>
                        {rows.map((row, index) => (
                          <div
                            key={index}
                            className="enterpriseCreateShift-availabilityAddrowCard"
                          >
                            <Form className="enterpriseCreateShift-availabilityFromCard">
                              <Form.Control
                                className="enterpriseCreateShift-availabilityFromInput"
                                type="text"
                                placeholder="From HH:MM"
                                value={row.from}
                                onChange={(e) =>
                                  handleChange(index, "from", e.target.value)
                                }
                              />
                              <FontAwesomeIcon
                                className="enterpriseCreateShift-availabilityEnableClock"
                                icon={faClock}
                                style={{
                                  color:
                                    index === rows.length - 1
                                      ? "#FF0058"
                                      : "#ccc",
                                }} // Apply color only to the last row
                              />
                            </Form>

                            <Form className="enterpriseCreateShift-availabilityFromCard">
                              <Form.Control
                                className="enterpriseCreateShift-availabilityFromInput"
                                type="text"
                                placeholder="To HH:MM"
                                value={row.to}
                                onChange={(e) =>
                                  handleChange(index, "to", e.target.value)
                                }
                              />
                              <FontAwesomeIcon
                                className="enterpriseCreateShift-availabilityEnableClock"
                                icon={faClock}
                                style={{
                                  color:
                                    index === rows.length - 1
                                      ? "#FF0058"
                                      : "#ccc",
                                }} // Apply color only to the last row
                              />
                            </Form>

                            {/* Render the delete button only if it's not the last row */}
                            {index !== rows.length - 1 && (
                              <button
                                className="enterpriseCreateShift-availabilityDeleteBtn"
                                onClick={() => handleDeleteRow(index)}
                              >
                                <FontAwesomeIcon icon={faTrash} />
                              </button>
                            )}

                            {/* Render the "+" button only for the last row */}
                            {index === rows.length - 1 && (
                              <button
                                className="enterpriseCreateShift-availabilityPlusBtn"
                                onClick={handleAddRow}
                              >
                                <FontAwesomeIcon icon={faPlus} />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="enterpriseCreateShift-availabilityFinishCard">
                <Link to="/enterprises-createshift-requestapproved" className="enterpriseCreateShift-availabilityFinish">Finish</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnterpriseCreateShiftAvailablity;
