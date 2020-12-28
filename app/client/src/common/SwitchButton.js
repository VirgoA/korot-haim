import React from "react";
import { Button } from "@material-ui/core";

function SwitchButton(props) {
  return (
    <div>
      <Button 
        color="primary"
        onClick={() => {
          props.switchStateFunc(!props.currentState);
        }}
      >
        {props.btnText}
      </Button>
    </div>
  )
}

export default SwitchButton;
