import "./resumeForm.css";

import React from "react";
import SummarySection from "./sections/SummarySection";
import EmploymentSection from "./sections/EmploymentSection";
import { useSelector, useDispatch } from "react-redux";
import formSlice from "./state/formSlice";
import PersonalInfoSection from "./sections/PersonalInfoSection";

const ResumeForm = () => {
  const dispatch = useDispatch();

  const { setProfessionalSummary, addExperience } = formSlice.actions;

  const { experience } = useSelector((state) => state.form);
  console.log(useSelector((state) => state));

  return (
    <form>
      <div className="form-section">
        <PersonalInfoSection dispatcher={dispatch} />

        <SummarySection
          handleState={(inputValue) =>
            dispatch(setProfessionalSummary(inputValue))
          }
        />

        <EmploymentSection
          handleState={(newExpirience) =>
            dispatch(addExperience(newExpirience))
          }
          experience={experience}
        />
      </div>
    </form>
  );
};

export default ResumeForm;
