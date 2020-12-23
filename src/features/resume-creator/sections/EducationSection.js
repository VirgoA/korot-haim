import React, { useState } from "react";
import formSlice from "../state/formSlice";
import BasicInput from "../../../common/BasicInput";
import TextArea from "../../../common/TextArea"
import SwitchButton from "../../../common/SwitchButton";
import "./sections.css";

const { addEducation, removeEducation } = formSlice.actions;

function EducationSection(props) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="form-section">
      <span className="title">השכלה</span>
      <span className="description">בחלק זה תציינו את ההשכלה שלכם, איכן למדתם וכמה שנים</span>

      <SwitchButton
        btnText="הוסף לימודים +"
        currentState={showForm}
        switchStateFunc={setShowForm}
      />

      {showForm === true ? (
        <AddEducationForm
          handleState={(newEducation) =>
            props.dispatcher(addEducation(newEducation))
          }
        />
      ) : null}

      
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

    </div>
  );
}

function AddEducationForm(props) {
  const [schoolName, setschoolName] = useState();
  const [degree, setDegree] = useState();

  const [startDate, setstartDate] = useState();
  const [endDate, setendDate] = useState();

  return (
    <div className="addForm">
      <div className="row-inputs">
        <BasicInput name="שם המוסד" handleState={setschoolName} />
        <BasicInput name="תיאור ההשכלה" handleState={setDegree} />
      </div>
      <div className="row-inputs">
        <BasicInput name="תאריך סוף לימודים" handleState={setstartDate} />
        <BasicInput name="תאריך תחילת לימודים" handleState={setendDate} />
      </div>
      <div className="row-inputs">
        <TextArea/>
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

export default EducationSection;
