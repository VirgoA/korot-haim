import "./sections.css";
import React, { useState, useEffect } from "react";
import { Button, Chip } from "@material-ui/core";
import formSlice from "../state/formSlice";
import BasicInput from "../../../common/BasicInput";
import TextArea from "../../../common/TextArea";
import SwitchButton from "../../../common/SwitchButton";

const { addEducation, removeEducation } = formSlice.actions;

const EducationSection = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [item, setItem] = useState(undefined);

  const editChip = function (isFormOpen, chip, chipNumber) {
    if (!isFormOpen) {
      setEditItem(true);
      setShowForm(true);
      setItem(chip);
      props.dispatcher(removeEducation(chipNumber));
    }
  };
  return (
    <div className="form-section">
      <span className="title">השכלה</span>
      <span className="description">
        בחלק זה תציינו את ההשכלה שלכם, היכן למדתם וכמה שנים
      </span>

      {props.education.length !== 0 && (
        <div className="chipsGroup">
          {props.education.map((item, index) => {
            return (
              <div key={index}>
                <Chip
                  className="chip"
                  onClick={() => editChip(showForm, item, index)}
                  onDelete={() => {
                    props.dispatcher(removeEducation(index));
                  }}
                  label={`${item.degree} - ${item.schoolName}`}
                />
              </div>
            );
          })}
        </div>
      )}

      <SwitchButton
        btnText="הוסף לימודים +"
        currentState={showForm}
        switchStateFunc={setShowForm}
      />

      {showForm && (
        <AddEducationForm
          setForm={setShowForm}
          setItem={setItem}
          setEdit={setEditItem}
          edit={editItem}
          item={item}
          handleState={(newEducation) =>
            props.dispatcher(addEducation(newEducation))
          }
        />
      )}
    </div>
  );
};

const AddEducationForm = (props) => {
  const [schoolName, setschoolName] = useState();
  const [degree, setDegree] = useState();

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const [summary, setSummary] = useState();

  const [degreeError, setDegreeError] = useState("");
  const [schoolNameError, setSchoolNameError] = useState("");
  const [startDateError, setStartDateError] = useState("");

  useEffect(() => {
    if (props.edit) {
      setschoolName(props.item.schoolName);
      setDegree(props.item.degree);
      setStartDate(props.item.startDate);
      setEndDate(props.item.endDate);
    }
  });

  const validateEducation = () => {
    let degreeErrorMsg = "";
    degree ? (degreeErrorMsg = "") : (degreeErrorMsg = "יש להזין תיאור השלכה");
    setDegreeError(degreeErrorMsg);

    let schoolNameErrorMsg = "";
    schoolName
      ? (schoolNameErrorMsg = "")
      : (schoolNameErrorMsg = "יש להזין שם מוסד");
    setSchoolNameError(schoolNameErrorMsg);

    let startDateErrorMsg = "";
    startDate
      ? (startDateErrorMsg = "")
      : (startDateErrorMsg = "יש להזין שנה לתחילת לימודים");
    setStartDateError(startDateErrorMsg);

    if (schoolNameErrorMsg || degreeErrorMsg || startDateErrorMsg) {
      return false;
    } else {
      return true;
    }
  };

  const addEducation = () => {
    let isValid = validateEducation();
    if (isValid) {
      props.handleState({
        degree,
        schoolName,
        startDate,
        endDate,
        summary,
      });
      props.setForm(false);
      props.setItem(null);
      props.setEdit(false);
    }
  };

  return (
    <div className="addForm">
      <div className="row-inputs">
        <BasicInput
          name="שם המוסד"
          value={schoolName}
          error={!!schoolNameError}
          handleState={setschoolName}
        />
        <BasicInput
          name="תיאור ההשכלה"
          value={degree}
          error={!!degreeError}
          handleState={setDegree}
        />
      </div>
      <div className="row-inputs">
        <BasicInput
          value={startDate}
          name="תאריך תחילת לימודים"
          error={!!startDateError}
          handleState={setStartDate}
        />
        <BasicInput
          value={endDate}
          name="תאריך סוף לימודים"
          handleState={setEndDate}
        />
      </div>
      <div className="row-inputs">
        <TextArea
          onChange={(content) => {
            setSummary(content);
          }}
        />
      </div>
      <Button variant="outlined" color="primary" onClick={addEducation}>
        הוספה
      </Button>
    </div>
  );
};
export default EducationSection;
