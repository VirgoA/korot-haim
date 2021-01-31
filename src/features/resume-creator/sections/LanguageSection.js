import "./sections.css";
import React, { useState } from "react";
import { Button, Chip } from "@material-ui/core";
import formSlice from "../state/formSlice";
import BasicInput from "../../../common/BasicInput";
import SwitchButton from "../../../common/SwitchButton";

const { addLanguage, removeLangauge } = formSlice.actions;

const LanguageSection = (props) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="form-section">
      <span className="title">שפות</span>
      <span className="description">

      </span>

      {props.languages.length !== 0 && (
        <div className="chipsGroup">
          {props.languages.map((language, index) => {
            return (
              <div key={index}>
                <Chip
                  className="chip"
                  onDelete={() => {
                    props.dispatcher(removeLangauge(index));
                  }}
                  label={`${language}`}
                />
              </div>
            )
          })}
        </div>
      )}

      <SwitchButton
        btnText="הוסף שפה +"
        currentState={showForm}
        switchStateFunc={setShowForm}
      />

      {showForm && (
        <AddLanguageForm
          setButton={setShowForm}
          handleState={(newLanguage) =>
            props.dispatcher(addLanguage(newLanguage))
          }
        />
      )}

    </div>
  );
}

const AddLanguageForm = (props) => {
  const [language, setLanguage] = useState();

  const [languageError, setLanguageError] = useState('');

  const validateLanguage = () => {
    
    let languageErrorMsg = ""
    language ? languageErrorMsg = "" : languageErrorMsg = "יש להזין שפה"
    setLanguageError(languageErrorMsg)

    if(languageErrorMsg){
      return false
    }
    else{
      return true
    }
  }

  const addLanguage = () => {
    let isValid = validateLanguage()
    if(isValid){
      props.handleState(language);
      props.setButton(false);
    }
  }

  return (
    <div className="addForm">
      <div className="row-inputs">
        <BasicInput 
          name="שפה" 
          error={!!languageError} 
          handleState={setLanguage} 
        />
      </div>
      <Button
        variant="outlined"
        color="primary"
        onClick={addLanguage}
      >
        הוספה
      </Button>
    </div>
  );
}

export default LanguageSection;
