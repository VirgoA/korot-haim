import BasicForm from "../BasicForm";
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
        {/* 
                      We should probably split each section of the form to be its own component,
                      it will make it easier to add and remove sections as we go.
                  */}
        <h3>פרטים אישיים</h3>
        <div className="form-section">
          <div className="row-inputs">
            <BasicForm name={"שם משפחה"} func={this.setLastName} />
            <BasicForm name={"שם פרטי"} func={this.setName} />
          </div>

          <div className="row-inputs">
            <BasicForm name={"מייל"} func={this.setEmail} />
            <BasicForm name={"טלפון"} func={this.setPhoneNumber} />
          </div>
        </div>
      </form>
    );
  }
}
