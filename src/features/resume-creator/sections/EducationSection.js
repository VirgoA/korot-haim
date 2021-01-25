import React, { useState } from "react";
import formSlice from "../state/formSlice";
import BasicInput from "../../../common/BasicInput";
import TextArea from "../../../common/TextArea";
import SwitchButton from "../../../common/SwitchButton";
import { Button, Chip } from "@material-ui/core";
import "./sections.css";

const { addEducation, removeEducation } = formSlice.actions;

function EducationSection(props) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="form-section">
      <span className="title">השכלה</span>
      <span className="description">
        בחלק זה תציינו את ההשכלה שלכם, היכן למדתם וכמה שנים
      </span>

      {props.education.length !== 0 ? (
        <div className="chipsGroup">
          {props.education.map((item, index) => {
            return (
              <div key={index}>
                <Chip
                  className="chip"
                  onDelete={() => {
                    props.dispatcher(removeEducation(index));
                  }}
                  label={`${item.schoolName} - ${item.degree}`}
                />
              </div>
            )
          })}
        </div>
      ) : null}

      <SwitchButton
        btnText="הוסף לימודים +"
        currentState={showForm}
        switchStateFunc={setShowForm}
      />

      {showForm === true ? (
        <AddEducationForm
          setButton={setShowForm}
          handleState={(newEducation) =>
            props.dispatcher(addEducation(newEducation))
          }
        />
      ) : null}

    </div>
  );
}

function AddEducationForm(props) {
  const [schoolName, setschoolName] = useState();
  const [degree, setDegree] = useState();

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const [summary, setSummary] = useState();

  const [degreeError, setDegreeError] = useState('');
  const [schoolNameError, setSchoolNameError] = useState('');

  const validateEducation = () => {
    let degreeErrorMsg = ""
    if(!degree){
      degreeErrorMsg = "יש להזין תיאור השלכה"
      setDegreeError(degreeErrorMsg)
    }
    else{
      degreeErrorMsg = ""
      setDegreeError(degreeErrorMsg)
    }

    let schoolNameError = ""
    if(!schoolName){
      schoolNameError = "יש להזין שם מוסד"
      setSchoolNameError(schoolNameError)
    }
    else{
      schoolNameError = ""
      setSchoolNameError(schoolNameError)
    }

    if(schoolNameError || degreeErrorMsg){
      return false
    }
    else{
      return true
    }
  }

  const addEducation = () => {
    let isValid = validateEducation()
    if(isValid){
      props.handleState({
        degree,
        schoolName,
        startDate,
        endDate,
        summary,
      });
      props.setButton(false);
    }
  }

  return (
    <div className="addForm">
      <div className="row-inputs">
        <BasicInput name="שם המוסד" error={!!schoolNameError} handleState={setschoolName} />
        <BasicInput name="תיאור ההשכלה" error={!!degreeError} handleState={setDegree} />
      </div>
      <div className="row-inputs">
        <BasicInput name="תאריך תחילת לימודים" handleState={setStartDate} />
        <BasicInput name="תאריך סוף לימודים" handleState={setEndDate} />
      </div>
      <div className="row-inputs">
        <TextArea
          onChange={(e) => {
            setSummary(e.target.value);
          }}
        />
      </div>
      <Button
        variant="outlined"
        color="primary"
        onClick={addEducation}
      >
        הוספה
      </Button>
    </div>
  );
}

export default EducationSection;
