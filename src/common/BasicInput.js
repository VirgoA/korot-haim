import React from "react";
import { TextField } from "@material-ui/core";

const BasicInput = (props) => (
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
    inputProps={props.inputProps}
  />
);

export default BasicInput;
