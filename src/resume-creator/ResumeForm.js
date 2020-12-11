import BasicInput from "../common/BasicInput";
import "./resumeForm.css";

import React, { useState } from "react";
import SummaryForm from "./sections/SummarySection";
import EmploymentForm from "./sections/EmploymentSection";

const ResumeForm = () => {
  const [name, setName] = useState();
  const [laseName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [professionalSummary, setProfessionalSummary] = useState("");
  const [experience, setExperience] = useState([]);

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
          handleState={setExperience}
          pastExperience={experience}
        />
      </div>
    </form>
  );
};

export default ResumeForm;
