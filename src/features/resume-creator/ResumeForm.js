import "./resumeForm.css";
import React from "react";
import SummarySection from "./sections/SummarySection";
import EmploymentSection from "./sections/EmploymentSection";
import { useSelector, useDispatch } from "react-redux";
import formSlice from "./state/formSlice";
import PersonalInfoSection from "./sections/PersonalInfoSection";
import EducationSection from "./sections/EducationSection";
import SkillSection from "./sections/SkillSection";
import ArmySection from "./sections/ArmySection";
import LanguageSection from "./sections/LanguageSection";

const ResumeForm = () => {
  const dispatch = useDispatch();

  const { setProfessionalSummary } = formSlice.actions;

  const {
    experience,
    armyExperience,
    education,
    skills,
    languages,
  } = useSelector((state) => state.form);

  return (
    <form>
      <div className="form-section">
        <PersonalInfoSection dispatcher={dispatch} />

        <SummarySection
          dispatcher={dispatch}
          reducer={setProfessionalSummary}
        />

        <EmploymentSection dispatcher={dispatch} experience={experience} />

        <EducationSection dispatcher={dispatch} education={education} />

        <ArmySection dispatcher={dispatch} armyExperience={armyExperience} />

        <SkillSection dispatcher={dispatch} skills={skills} />

        <LanguageSection dispatcher={dispatch} languages={languages} />
      </div>
    </form>
  );
};

export default ResumeForm;
