import React from "react";
import { Button } from "@material-ui/core";

const SwitchButton = (props) => (
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

export default SwitchButton;
