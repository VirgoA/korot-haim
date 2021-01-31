import React, { useEffect, useState } from "react";
import BasicInput from "../../../common/BasicInput";
import TextArea from "../../../common/TextArea";
import SwitchButton from "../../../common/SwitchButton";
import formSlice from "../state/formSlice";
import { Button, Chip } from "@material-ui/core";

import "./sections.css";

const { addArmyExperience, removeArmyExperience } = formSlice.actions;

function ArmySection(props) {
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [item, setItem] = useState(undefined);

  const editChip = function (isFormOpen, chip, chipNumber) {
    if (!isFormOpen) {
      setEditItem(true);
      setShowForm(true);
      setItem(chip);
      props.dispatcher(removeArmyExperience(chipNumber));
    }
  };

  return (
    <div className="form-section">
      <span className="title">שירות צבאי/לאומי</span>
      <span className="description">
        בחלק זה תציינו את הניסיון והתפקידים שעשיתם במהלך שירותכם הצבאי.
      </span>
      {props.armyExperience.length !== 0 ? (
        <div className="chipsGroup">
          {props.armyExperience.map((item, index) => {
            return (
              <div key={index}>
                <Chip
                  className="chip"
                  onClick={() => editChip(showForm, item, index)}
                  onDelete={() => {
                    props.dispatcher(removeArmyExperience(index));
                  }}
                  label={`${item.company} - ${item.title}`}
                />
              </div>
            );
          })}
        </div>
      ) : null}

      <SwitchButton
        btnText="הוסף תעסוקה +"
        currentState={showForm}
        switchStateFunc={setShowForm}
      />

      {showForm === true ? (
        <AddEmploymentForm
          setForm={setShowForm}
          setItem={setItem}
          setEdit={setEditItem}
          edit={editItem}
          item={item}
          handleState={(newExpirience) =>
            props.dispatcher(addArmyExperience(newExpirience))
          }
        />
      ) : null}
    </div>
  );
}

function AddEmploymentForm(props) {
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [summary, setSummary] = useState();

  const [titleError, setTitleError] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [startDateError, setStartDateError] = useState("");

  useEffect(() => {
    if (props.edit) {
      setCompany(props.item.company);
      setTitle(props.item.title);
      setStartDate(props.item.startDate);
      setEndDate(props.item.endDate);
    }
  });

  const validateEmployment = () => {
    let titleErrorMsg = "";
    title ? (titleErrorMsg = "") : (titleErrorMsg = "יש להזין תפקיד");
    setTitleError(titleErrorMsg);

    let companyErrorMsg = "";
    company ? (companyErrorMsg = "") : (companyErrorMsg = "יש להזין חיל");
    setCompanyError(companyErrorMsg);

    let startDateErrorMsg = "";
    startDate
      ? (startDateErrorMsg = "")
      : (startDateErrorMsg = "יש להזין תאריך תחילת השירות");
    setStartDateError(startDateErrorMsg);

    if (companyErrorMsg || titleErrorMsg || startDateErrorMsg) {
      return false;
    } else {
      return true;
    }
  };

  const addEmployment = () => {
    let isValid = validateEmployment();
    if (isValid) {
      props.handleState({ title, company, startDate, endDate, summary });
      props.setForm(false);
      props.setItem(null);
      props.setEdit(false);
    }
  };

  return (
    <div className="addForm">
      <div className="row-inputs">
        <BasicInput
          name="שם תפקיד"
          value={company}
          error={!!companyError}
          placeholder={companyError}
          handleState={setCompany}
        />
        <BasicInput
          name="שם החיל"
          value={title}
          error={!!titleError}
          placeholder={titleError}
          handleState={setTitle}
        />
      </div>
      <div className="row-inputs">
        <BasicInput
          name="תאריך תחילת השירות"
          value={startDate}
          error={!!startDateError}
          handleState={setStartDate}
        />
        <BasicInput
          value={endDate}
          name="תאריך סוף השירות"
          handleState={setEndDate}
        />
      </div>
      <div className="row-inputs">
        <TextArea
          onChange={(e) => {
            setSummary(e.target.value);
          }}
        />
      </div>
      <Button variant="outlined" color="primary" onClick={addEmployment}>
        הוספה
      </Button>
    </div>
  );
}

export default ArmySection;
