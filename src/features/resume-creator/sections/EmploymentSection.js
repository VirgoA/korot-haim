import "./sections.css";
import React, { useState, useEffect } from "react";
import { Button, Chip } from "@material-ui/core";
import formSlice from "../state/formSlice";
import BasicInput from "../../../common/BasicInput";
import TextArea from "../../../common/TextArea";
import SwitchButton from "../../../common/SwitchButton";

const { addExperience, removeExperience } = formSlice.actions;

const EmploymentSection = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [item, setItem] = useState(undefined);

  const editChip = function (isFormOpen, chip, chipNumber) {
    if (!isFormOpen) {
      setEditItem(true);
      setShowForm(true);
      setItem(chip);
      props.dispatcher(removeExperience(chipNumber));
    }
  };

  return (
    <div className="form-section">
      <span className="title">ניסיון תעסוקתי</span>
      <span className="description">
        תוסיפו לפחות 3 שנות ניסיון רלוונטיות ותאריכים בחלק זה. תציינו את
        התפקידים האחרונים שלכם קודם
      </span>

      {props.experience.length !== 0 && (
        <div className="chipsGroup">
          {props.experience.map((item, index) => {
            return (
              <div key={index}>
                <Chip
                  className="chip"
                  onClick={() => editChip(showForm, item, index)}
                  onDelete={() => {
                    props.dispatcher(removeExperience(index));
                  }}
                  label={`${item.title} - ${item.company}`}
                />
              </div>
            );
          })}
        </div>
      )}

      <SwitchButton
        btnText="הוסף תעסוקה +"
        currentState={showForm}
        switchStateFunc={setShowForm}
      />

      {showForm && (
        <AddEmploymentForm
          setForm={setShowForm}
          setItem={setItem}
          setEdit={setEditItem}
          edit={editItem}
          item={item}
          handleState={(newExpirience) =>
            props.dispatcher(addExperience(newExpirience))
          }
        />
      )}
    </div>
  );
};

const AddEmploymentForm = (props) => {
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
    company
      ? (companyErrorMsg = "")
      : (companyErrorMsg = "יש להזין חברה/מעסיק");
    setCompanyError(companyErrorMsg);

    let startDateErrorMsg = "";
    startDate
      ? (startDateErrorMsg = "")
      : (startDateErrorMsg = "יש להזין שנה לתחילת העסקה");
    setStartDateError(startDateErrorMsg);

    if (companyErrorMsg || titleErrorMsg || startDateErrorMsg) {
      return false;
    } else {
      return true;
    }
  };

  const addEmployment = () => {
    let isValid = validateEmployment();
    console.log(isValid);
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
          name="חברה/מעסיק"
          value={company}
          error={!!companyError}
          placeholder={companyError}
          handleState={setCompany}
        />
        <BasicInput
          name="שם תפקיד"
          value={title}
          error={!!titleError}
          placeholder={titleError}
          handleState={setTitle}
        />
      </div>
      <div className="row-inputs">
        <BasicInput
          name="תאריך תחילת תעסוקה"
          value={startDate}
          error={!!startDateError}
          handleState={setStartDate}
        />
        <BasicInput
          value={endDate}
          name="תאריך סוף תעסוקה"
          handleState={setEndDate}
        />
      </div>
      <div className="row-inputs">
        <TextArea
          onChange={(content) => {
            setSummary(content);
          }}
        />
      </div>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          console.log("cliucked");
          addEmployment();
        }}
      >
        הוספה
      </Button>
    </div>
  );
};

export default EmploymentSection;
