import React from "react";

function BasicInput(props) {
  return (
    <div className="input-box">
      <label>{props.name}</label>
      <input
        type="text"
        name={props.name}
        dir="rtl"
        onChange={(e) => {
          props.handleState(e.target.value);
        }}
      />
    </div>
  );
}

export default BasicInput;
