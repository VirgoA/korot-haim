import "./resumeForm.css";

import React from "react";
import SummarySection from "./sections/SummarySection";
import EmploymentSection from "./sections/EmploymentSection";
import { useSelector, useDispatch } from "react-redux";
import formSlice from "./state/formSlice";
import PersonalInfoSection from "./sections/PersonalInfoSection";
import EducationSection from "./sections/EducationSection";

const ResumeForm = () => {
  const dispatch = useDispatch();

  const {
    setProfessionalSummary,
    addExperience,
    removeExperience,
  } = formSlice.actions;

  const { experience, education } = useSelector((state) => state.form);
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

        <EducationSection dispatcher={dispatch} education={education} />
      </div>
    </form>
  );
};

export default ResumeForm;
