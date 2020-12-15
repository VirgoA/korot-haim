import "./resumeForm.css";

import React from "react";
import SummarySection from "./sections/SummarySection";
import EmploymentSection from "./sections/EmploymentSection";
import { useSelector, useDispatch } from "react-redux";
import formSlice from "./state/formSlice";
import PersonalInfoSection from "./sections/PersonalInfoSection";

const ResumeForm = () => {
  const dispatch = useDispatch();

  const {
    setProfessionalSummary,
    addExperience,
    removeExperience,
  } = formSlice.actions;

  const { experience } = useSelector((state) => state.form);
  console.log(useSelector((state) => state));

  return (
    <form>
      <div className="form-section">
        <PersonalInfoSection dispatcher={dispatch} />

        <SummarySection
          dispatcher={dispatch}
          reducer={setProfessionalSummary}
        />

        <EmploymentSection
          dispatcher={dispatch}
          reducers={[addExperience, removeExperience]}
          experience={experience}
        />
      </div>
    </form>
  );
};

export default ResumeForm;
