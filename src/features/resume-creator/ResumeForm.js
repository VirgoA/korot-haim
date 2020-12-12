import BasicInput from "../../common/BasicInput";
import "./resumeForm.css";

import React, { useState } from "react";
import SummaryForm from "./sections/SummarySection";
import EmploymentForm from "./sections/EmploymentSection";
import {useSelector, useDispatch} from 'react-redux';
import formSlice from './state/formSlice';

const ResumeForm = () => {

  const {
    setName,
    setLastName,
    setEmail,
    setPhoneNumber,
    setProfessionalSummary,
    addExperience
  } = formSlice.actions

  const experience = useSelector(state => state.experience)

  return (
    <form>
      <h3>פרטים אישיים</h3>
      <div className="form-section">
        <div className="row-inputs">
          <BasicInput name={"שם משפחה"} handleState={setLastName} />
          <BasicInput name={"שם פרטי"} handleState={setName} />
        </div>

        <div className="row-inputs">
          <BasicInput name={"מייל"} handleState={setEmail} />
          <BasicInput name={"טלפון"} handleState={setPhoneNumber} />
        </div>

        <SummaryForm handleState={setProfessionalSummary} />

        <EmploymentForm
          handleState={addExperience}
          pastExperience={experience}
        />
      </div>
    </form>
  );
};

export default ResumeForm;
