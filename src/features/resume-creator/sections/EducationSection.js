import React, { useState } from "react";
import formSlice from "../state/formSlice";
import BasicInput from "../../../common/BasicInput";
import SwitchButton from "../../../common/SwitchButton";
import "./employmentSection.css";

const { addEducation, removeEducation } = formSlice.actions;

function AddEducationForm(props) {
  const [schoolName, setschoolName] = useState();
  const [degree, setDegree] = useState();

  const [startDate, setstartDate] = useState();
  const [endDate, setendDate] = useState();

  //const [summary, setSummary] = useState();

  return (
    <div className="employment-form">
      <div className="row-inputs">
        <BasicInput name="שם המוסד" handleState={setschoolName} />
        <BasicInput name="תיאור ההשכלה" handleState={setDegree} />
      </div>
      <div className="row-inputs">
        <BasicInput name="תאריך סוף לימודים" handleState={setstartDate} />
        <BasicInput name="תאריך תחילת לימודים" handleState={setendDate} />
      </div>
      <div className="row-inputs">
        <textarea dir="rtl" name="paragraph_text" cols="70" rows="3"></textarea>
      </div>
      <button
        type="button"
        onClick={() => {
          props.handleState({ degree, schoolName, startDate, endDate });
        }}
      >
        הוספה
      </button>
    </div>
  );
}

function EducationSection(props) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <h1>השכלה</h1>
      <p>בחלק זה תציינו את ההשכלה שלכם, איכן למדתם וכמה שנים</p>

      {props.education.length !== 0 ? (
        <div>
          <h1>רשימת השכלה</h1>
          {props.education.map((item, i) => {
            return (
              <div key={i}>
                <p>תיאור: {item.degree}</p>
                <p>שם המוסד: {item.schoolName}</p>
                <p>תאריך התחלה: {item.startDate}</p>
                <p>תאריך סיום: {item.endDate}</p>
                <button
                  type="button"
                  onClick={() => {
                    props.dispatcher(removeEducation(i));
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
        <AddEducationForm
          handleState={(newEducation) =>
            props.dispatcher(addEducation(newEducation))
          }
        />
      ) : null}

      {
        //button for displaying the form
      }

      <SwitchButton
        btnText="הוסף לימודים +"
        currentState={showForm}
        switchStateFunc={setShowForm}
      />
    </div>
  );
}

export default EducationSection;
