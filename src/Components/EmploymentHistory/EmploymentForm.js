import React, { useState } from "react";
import BasicInput from "../BasicInput";
import "./employmentForm.css";

class jobObject {
  constructor(
    name,
    company,
    startDate,
    endDate
    //summary
  ) {
    this.name = name;
    this.company = company;
    this.startDate = startDate;
    this.endDate = endDate;
    //this.summary = summary;
  }
}

function AddEmploymentForm(props) {
  const [company, setCompany] = useState();
  const [job, setJob] = useState();

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
        // onClick={() => {
        //   props.handleState(
        //     ...props.pastExperience,
        //     new jobObject(job, company, startDate, endDate)
        //   );
        // }}
      >
        הוספה
      </button>
    </div>
  );
}

function AddEmploymentButton(props) {
  return (
    <div className="AddEmployment">
      <button
        type="button"
        onClick={() => {
          props.onChangeHandler(!props.currentShowStatus);
          console.log("showing form", !props.currentShowStatus);
        }}
      >
        תוסיף תעסוקה +
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
        תוסיפו לפחות 3 שנות ניסיון רלוונטיות ותעריכים בחלק זה. תציינו את
        התפקידים האחרונים שלכם קודם
      </p>

      {props.pastExperience !== [] ? <p>{props.pastExperience}</p> : null}

      {showForm === true ? (
        <AddEmploymentForm
          handleState={props.handleState}
          pastExperience={props.pastExperience}
        />
      ) : null}

      {
        //button for displaying the form
      }
      <AddEmploymentButton
        onChangeHandler={setShowForm}
        currentShowStatus={showForm}
      />
    </div>
  );
}

export default EmploymentForm;
