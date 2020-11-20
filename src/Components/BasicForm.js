import React from "react";

function BasicForm(props) {
  return (
    <div className="input-box">
      <label>{props.name}</label>
      <input
        type="text"
        name="name"
        dir="rtl"
        onChange={(e) => {
          props.func(e.target.value);
        }}
      />
    </div>
  );
}

export default BasicForm;
