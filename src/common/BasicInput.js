import React from "react";
import { TextField } from "@material-ui/core";

function BasicInput(props) {
  return (
    <TextField
      error={props.error}
      variant="outlined"
      value={props.value}
      style={{
        flex: 1,
      }}
      label={props.name}
      onChange={(e) => {
        props.handleState(e.target.value);
      }}
    />
  );
}

export default BasicInput;
