import BasicInput from "../../common/BasicInput";
import "./resumeForm.css";

import React, { useState } from "react";
import SummarySection from "./sections/SummarySection";
import EmploymentSection from "./sections/EmploymentSection";
import {useSelector, useDispatch} from 'react-redux';
import formSlice from './state/formSlice';

const ResumeForm = () => {

  const dispatch = useDispatch();

  const {
    setName,
    setLastName,
    setEmail,
    setPhoneNumber,
    setProfessionalSummary,
    addExperience
  } = formSlice.actions

  const {experience} = useSelector(state => state.form)
  console.log(useSelector(state => state))

  return (
    <form>
      <h3>פרטים אישיים</h3>
      <div className="form-section">
        <div className="row-inputs">
          <BasicInput name={"שם משפחה"} handleState={(inputValue)=>dispatch(setLastName(inputValue))} />
          <BasicInput name={"שם פרטי"} handleState={(inputValue)=>dispatch(setName(inputValue))} />
        </div>

        <div className="row-inputs">
          <BasicInput name={"מייל"} handleState={(inputValue)=>dispatch(setEmail(inputValue))} />
          <BasicInput name={"טלפון"} handleState={(inputValue)=>dispatch(setPhoneNumber(inputValue))} />
        </div>

        <SummarySection handleState={(inputValue)=>dispatch(setProfessionalSummary(inputValue))} />

        <EmploymentSection
          handleState={(newExpirience)=>dispatch(addExperience(newExpirience))}
          experience={experience}
        />
      </div>
    </form>
  );
};

export default ResumeForm;
