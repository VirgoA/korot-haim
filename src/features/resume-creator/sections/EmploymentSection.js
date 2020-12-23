import React, { useState } from "react";
import BasicInput from "../../../common/BasicInput";
import SwitchButton from "../../../common/SwitchButton";
import formSlice from "../state/formSlice";

import "./employmentSection.css";

const { addExperience, removeExperience } = formSlice.actions;

function AddEmploymentForm(props) {
  const [company, setCompany] = useState();
  const [title, setJob] = useState();

  const [startDate, setstartDate] = useState();
  const [endDate, setendDate] = useState();

  //const [summary, setSummary] = useState();

  return (
    <div className="employment-form">
      <div className="row-inputs">
        <BasicInput name="חברה/מעסיק" handleState={setCompany} />
        <BasicInput name="שם תפקיד" handleState={setJob} />
      </div>
      <div className="row-inputs">
        <BasicInput name="תאריך סוף תעסוקה" handleState={setstartDate} />
        <BasicInput name="תאריך תחילת תעסוקה" handleState={setendDate} />
      </div>
      <div className="row-inputs">
        <textarea dir="rtl" name="paragraph_text" cols="70" rows="3"></textarea>
      </div>
      <button
        type="button"
        onClick={() => {
          props.handleState({ title, company, startDate, endDate });
          props.setButton(false);
        }}
      >
        הוספה
      </button>
    </div>
  );
}

function EmploymentForm(props) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <h1>ניסיון תעסוקתי</h1>
      <p>
        תוסיפו לפחות 3 שנות ניסיון רלוונטיות ותאריכים בחלק זה. תציינו את
        התפקידים האחרונים שלכם קודם
      </p>

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

      {showForm === true ? (
        <AddEmploymentForm
          setButton={setShowForm}
          handleState={(newExpirience) =>
            props.dispatcher(addExperience(newExpirience))
          }
        />
      ) : null}

      {
        //button for displaying the form
      }

      <SwitchButton
        btnText="הוסף תעסוקה +"
        currentState={showForm}
        switchStateFunc={setShowForm}
      />
    </div>
  );
}

export default EmploymentForm;
