import React, { useState } from "react";
import BasicInput from "../../../common/BasicInput";
import TextArea from "../../../common/TextArea"
import SwitchButton from "../../../common/SwitchButton";
import formSlice from "../state/formSlice";
import { Button } from '@material-ui/core';


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

      <SwitchButton
        btnText="הוסף תעסוקה +"
        currentState={showForm}
        switchStateFunc={setShowForm}
      />

      {showForm === true ? (
        <AddEmploymentForm
          handleState={(newExpirience) =>
            props.dispatcher(addExperience(newExpirience))
          }
        />
      ) : null}

      {props.experience.length !== 0 ? (
        <div>
          <h1>רשימת ניסיון</h1>
          {props.experience.map((item, i) => {
            return (
              <div key={i}>
                <p>תפקיד: {item.title}</p>
                <p>חברה: {item.company}</p>
                <p>תאריך התחלה: {item.startDate}</p>
                <p>תאריך סיום: {item.endDate}</p>
                <button
                  type="button"
                  onClick={() => {
                    props.dispatcher(removeExperience(i));
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      ) : null} 

    </div>
  );
}

function AddEmploymentForm(props) {
  const [company, setCompany] = useState();
  const [title, setJob] = useState();

  const [startDate, setstartDate] = useState();
  const [endDate, setendDate] = useState();

  return (
    <div className="addForm">
      <div className="row-inputs">
        <BasicInput name="חברה/מעסיק" handleState={setCompany} />
        <BasicInput name="שם תפקיד" handleState={setJob} />
      </div>
      <div className="row-inputs">
        <BasicInput name="תאריך סוף תעסוקה" handleState={setstartDate} />
        <BasicInput name="תאריך תחילת תעסוקה" handleState={setendDate} />
      </div>
      <div className="row-inputs">
        <TextArea/>
      </div>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          props.handleState({ title, company, startDate, endDate });
        }}
      >
        הוספה
      </Button>
    </div>
  );
}

export default EmploymentSection;
