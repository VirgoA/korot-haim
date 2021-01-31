import React from "react";
import formSlice from "../state/formSlice";
import BasicInput from "../../../common/BasicInput";

const { setName, setLastName, setEmail, setPhoneNumber } = formSlice.actions;

const PersonalInfoSection = (props) => {

  const dispatchFunc = (actionType) => {
    return (inputValue) => {
      props.dispatcher(actionType(inputValue));
    };
  };

  return (
    <div className="form-section">
      <span className="title">פרטים אישיים</span>
      <div>
        <div className="row-inputs">
          <BasicInput name={"שם פרטי"} handleState={dispatchFunc(setName)} />
          <BasicInput
            name={"שם משפחה"}
            handleState={dispatchFunc(setLastName)}
          />
        </div>

        <div className="row-inputs">
          <BasicInput name={"מייל"} handleState={dispatchFunc(setEmail)} />
          <BasicInput
            name={"טלפון"}
            handleState={dispatchFunc(setPhoneNumber)}
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalInfoSection;
