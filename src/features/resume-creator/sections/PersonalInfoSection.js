import React from "react";
import formSlice from "../state/formSlice";
import BasicInput from "../../../common/BasicInput";

const { setName, setLastName, setEmail, setPhoneNumber } = formSlice.actions;

function PersonalInfoSection(props) {
  const dispatchFunc = function (actionType) {
    return (inputValue) => {
      props.dispatcher(actionType(inputValue));
    };
  };

  return (
    <div>
      <h3>פרטים אישיים</h3>
      <div className="form-section">
        <div className="row-inputs">
          <BasicInput
            name={"שם משפחה"}
            handleState={dispatchFunc(setLastName)}
          />
          <BasicInput name={"שם פרטי"} handleState={dispatchFunc(setName)} />
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
