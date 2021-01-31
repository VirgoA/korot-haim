import React, { useEffect, useState } from "react";
import BasicInput from "../../../common/BasicInput";
import TextArea from "../../../common/TextArea";
import SwitchButton from "../../../common/SwitchButton";
import formSlice from "../state/formSlice";
import { Button, Chip } from "@material-ui/core";

import "./sections.css";

const { addExperience, removeExperience } = formSlice.actions;

function EmploymentSection(props) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="form-section">
      <span className="title">ניסיון תעסוקתי</span>
      <span className="description">
        תוסיפו לפחות 3 שנות ניסיון רלוונטיות ותאריכים בחלק זה. תציינו את
        התפקידים האחרונים שלכם קודם
      </span>

      {props.experience.length !== 0 ? (
        <div className="chipsGroup">
          {props.experience.map((item, index) => {
            return (
              <div key={index}>
                <Chip
                  className="chip"
                  onDelete={() => {
                    props.dispatcher(removeExperience(index));
                  }}
                  label={`${item.company} - ${item.title}`}
                />
              </div>
            );
          })}
        </div>
      ) : null}

      <SwitchButton
        btnText="הוסף תעסוקה +"
        currentState={showForm}
        switchStateFunc={setShowForm}
      />

      {showForm === true ? (
        <AddEmploymentForm
          setButton={setShowForm}
          handleState={(newExpirience) =>
            props.dispatcher(addExperience(newExpirience))
          }
        />
      ) : null}
    </div>
  );
}

function AddEmploymentForm(props) {
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [summary, setSummary] = useState();

  const [titleError, setTitleError] = useState('');
  const [companyError, setCompanyError] = useState('');
  const [startDateError, setStartDateError] = useState('');


  const validateEmployment = () => {

    let titleErrorMsg = ""
    title ? titleErrorMsg = "" : titleErrorMsg = "יש להזין תפקיד"
    setTitleError(titleErrorMsg)

    let companyErrorMsg = ""
    company ? companyErrorMsg = "" : companyErrorMsg = "יש להזין חברה/מעסיק"
    setCompanyError(companyErrorMsg)

    let startDateErrorMsg = ""
    startDate ? startDateErrorMsg = "" : startDateErrorMsg = "יש להזין שנה לתחילת העסקה"
    setStartDateError(startDateErrorMsg)

    if(companyErrorMsg || titleErrorMsg || startDateErrorMsg){
      return false
    }
    else{
      return true
    }
  }

  const addEmployment = () => {
    let isValid = validateEmployment()
    if(isValid){
      props.handleState({ title, company, startDate, endDate, summary });
      props.setButton(false);
    }
  }

  return (
    <div className="addForm">
      <div className="row-inputs">
        <BasicInput name="חברה/מעסיק" 
          error={!!companyError} 
          placeholder={companyError} 
          handleState={setCompany} 
        />
        <BasicInput name="שם תפקיד" 
          error={!!titleError} 
          placeholder={titleError} 
          handleState={setTitle} 
        />
      </div>
      <div className="row-inputs">
        <BasicInput 
          name="שנת תחילת העסקה" 
          error={!!startDateError}
          inputProps={{ maxLength: 4 }} 
          handleState={setStartDate} 
        />
        <BasicInput 
          name="שנת סיום העסקה" 
          inputProps={{ maxLength: 4 }}
          handleState={setEndDate} 
        />
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
        onClick={addEmployment}
      >
        הוספה
      </Button>
    </div>
  );
}

export default EmploymentSection;
