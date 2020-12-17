import React from "react";
import { TextField } from '@material-ui/core';

function oldBasicInput(props) {
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

function BasicInput(props){
  return (
    <TextField 
      variant="outlined" 
      style={{marginLeft: 16}}
      m={2} 
      p={2} 
      label={props.name} 
      onChange={(e)=>{
        props.handleState(e.target.value)
      }}
    />
  )
}

export default BasicInput;
