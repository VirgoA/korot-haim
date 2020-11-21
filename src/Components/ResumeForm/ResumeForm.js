import BasicInput from "../BasicInput";
import "./resumeForm.css";

import React, { Component } from "react";

export default class ResumeForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      lastName: "",
      email: "",
      phone: "",
    };
    this.setName = this.setName.bind(this);
    this.setLastName = this.setLastName.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPhoneNumber = this.setPhoneNumber.bind(this);
  }

  setName(newName) {
    console.log("changing name state to:" + newName);
    this.setState({ name: newName });
  }
  setLastName(newLastName) {
    console.log("changing lastname state to:" + newLastName);
    this.setState({ lastName: newLastName });
  }
  setEmail(newEmail) {
    console.log("changing email state to:" + newEmail);
    this.setState({ email: newEmail });
  }
  setPhoneNumber(newNumber) {
    console.log("changing phone # state to:" + newNumber);
    this.setState({ phone: newNumber });
  }

  render() {
    return (
      <form>
        <h3>פרטים אישיים</h3>
        <div className="form-section">
          <div className="row-inputs">
            <BasicInput name={"שם משפחה"} handleState={this.setLastName} />
            <BasicInput name={"שם פרטי"} handleState={this.setName} />
          </div>

          <div className="row-inputs">
            <BasicInput name={"מייל"} handleState={this.setEmail} />
            <BasicInput name={"טלפון"} handleState={this.setPhoneNumber} />
          </div>
        </div>
      </form>
    );
  }
}
