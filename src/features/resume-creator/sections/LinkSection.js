import React, { useState } from "react";
import formSlice from "../state/formSlice";
import BasicInput from "../../../common/BasicInput";
import SwitchButton from "../../../common/SwitchButton";
import "./sections.css";

const { addLink, removeLink } = formSlice.actions;

function LinkSection(props) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="form-section">
      <span className="title">קישורים</span>
      <span className="description">נוסף קישורים שונים לקורות החיים</span>
      
      <SwitchButton
        btnText="הוסף קישור +"
        currentState={showForm}
        switchStateFunc={setShowForm}
      />

      {showForm === true ? (
        <AddLinkForm
          handleState={(newLink) => props.dispatcher(addLink(newLink))}
        />
      ) : null}
      
      {props.links.length !== 0 ? (
        <div>
          <h1>רשימת קישורים</h1>
          {props.links.map((item, i) => {
            return (
              <div key={i}>
                <p>תיאור: {item.labelName}</p>
                <p>שם המוסד: {item.link}</p>
                <button
                  type="button"
                  onClick={() => {
                    props.dispatcher(removeLink(i));
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      ) : null}

    </div>
  );
}

function AddLinkForm(props) {
  const [labelName, setLabelName] = useState();
  const [link, setLink] = useState();

  return (
    <div className="addForm">
      <div className="row-inputs">
        <BasicInput name="שם הקישור" handleState={setLabelName} />
        <BasicInput name="הקישור" handleState={setLink} />
      </div>

      <button
        type="button"
        onClick={() => {
          props.handleState({ link, labelName });
        }}
      >
        הוספה
      </button>
    </div>
  );
}

export default LinkSection;
