import "./sections.css";
import React, { useState } from "react";
import { Button, Chip } from "@material-ui/core";
import formSlice from "../state/formSlice";
import BasicInput from "../../../common/BasicInput";
import TextArea from "../../../common/TextArea";
import SwitchButton from "../../../common/SwitchButton";

const { addExperience, removeExperience } = formSlice.actions;

const EmploymentSection = (props) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="form-section">
      <span className="title">ניסיון תעסוקתי</span>
      <span className="description">
        תוסיפו לפחות 3 שנות ניסיון רלוונטיות ותאריכים בחלק זה. תציינו את
        התפקידים האחרונים שלכם קודם
      </span>

      {props.experience.length !== 0 && (
        <div className="chipsGroup">
          {props.experience.map((item, index) => {
            return (
              <div key={index}>
                <Chip
                  className="chip"
                  onDelete={() => {
                    props.dispatcher(removeExperience(index));
                  }}
                  label={`${item.title} - ${item.company}`}
                />
              </div>
            );
          })}
        </div>
      )}

      <SwitchButton
        btnText="הוסף תעסוקה +"
        currentState={showForm}
        switchStateFunc={setShowForm}
      />

      {showForm && (
        <AddEmploymentForm
          setButton={setShowForm}
          handleState={(newExpirience) =>
            props.dispatcher(addExperience(newExpirience))
          }
        />
      )}
    </div>
  );
}

const AddEmploymentForm = (props) => {
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
        <BasicInput name="שם תפקיד" 
          error={!!titleError} 
          placeholder={titleError} 
          handleState={setTitle} 
        />        
        <BasicInput name="חברה/מעסיק" 
          error={!!companyError} 
          placeholder={companyError} 
          handleState={setCompany} 
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
