import React, { useState } from "react";
import formSlice from "../state/formSlice";
import BasicInput from "../../../common/BasicInput";
import SwitchButton from "../../../common/SwitchButton";
import { Button, Chip } from '@material-ui/core';
import "./sections.css";

const { addSkill, removeSkill } = formSlice.actions;

function SkillSection(props) {
  const [showForm, setShowForm] = useState(false);

  const renderChips = () => {
    const toRender = [];

    for(const sphere in props.skills){
      props.skills[sphere].forEach(skill=>toRender.push({skill, sphere}));
    }

    return (
      toRender.map((item, index) => {
        return (
          <div key={index}>
            <Chip
              className="chip"
              onDelete={() => {
                props.dispatcher(removeSkill(item));
              }}
              label={`${item.skill}`}
            />
          </div>
        )
      })
    )
  }

  return (
    <div className="form-section">
      <span className="title">מיומנויות</span>
      <span className="description">תציינו את המיומנויות שלכם</span>

      {props.skills && (
        <div className="chipsGroup">
          {renderChips()}
        </div>
      )}       

      <SwitchButton
        btnText="הוסף קישור +"
        currentState={showForm}
        switchStateFunc={setShowForm}
      />

      {showForm === true ? (
        <AddSkillForm
          setButton={setShowForm}
          handleState={(newSkill) => props.dispatcher(addSkill(newSkill))}
        />
      ) : null}

    </div>
  );
}

function AddSkillForm(props) {
  const [sphere, setSphere] = useState();
  const [skill, setSkill] = useState();

  const [skillError, setSkillError] = useState('');

  const validateSkill = () => {
    let skillErrorMsg
    if(!skill){
      skillErrorMsg = "יש לתת שם למיומנות שברצונכם להוסיף"
      setSkillError(skillErrorMsg)
    }
    else{
      skillErrorMsg = ""
      setSkillError(skillErrorMsg)
    }

    if(skillErrorMsg){
      return false
    }
    else{
      return true
    }
  }

  const addSkill = () => {
    let isValid = validateSkill()
    if(isValid){
      props.handleState({ skill, sphere });
      props.setButton(false);
    }
  }

  return (
    <div className="addForm">
      <div className="row-inputs">
        <BasicInput name="מיומנות" error={!!skillError} handleState={setSkill} />
        <BasicInput name="תחום" handleState={setSphere} />
      </div>

      <Button
        variant="outlined"
        color="primary"
        onClick={addSkill}
      >
        הוספה
      </Button>
    </div>
  );
}

export default SkillSection;
