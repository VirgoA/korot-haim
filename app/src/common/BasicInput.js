import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

function BasicInput(props){
  return (
    <TextField 
      variant="outlined" 
      style={{
        flex: 1
      }}
      label={props.name} 
      onChange={(e)=>{
        props.handleState(e.target.value)
      }}
    />
  )
}

export default BasicInput;
