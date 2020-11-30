import React from "react";

function SwitchButton(props) {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          props.switchStateFunc(!props.currentState);
        }}
      >
        {props.btnText}
      </button>
    </div>
  );
}

export default SwitchButton;
