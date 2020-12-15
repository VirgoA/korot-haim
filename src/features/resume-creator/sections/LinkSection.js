import React, { useState } from "react";
import formSlice from "../state/formSlice";
import BasicInput from "../../../common/BasicInput";
import SwitchButton from "../../../common/SwitchButton";
import "./employmentSection.css";

const { addLink, removeLink } = formSlice.actions;

function AddLinkForm(props) {
  const [labelName, setLabelName] = useState();
  const [link, setLink] = useState();

  //const [summary, setSummary] = useState();

  return (
    <div className="employment-form">
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

function LinkSection(props) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <h1>קישורים</h1>
      <p>נוסף קישורים שונים לקורות החיים</p>

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

      {showForm === true ? (
        <AddLinkForm
          handleState={(newLink) => props.dispatcher(addLink(newLink))}
        />
      ) : null}

      {
        //button for displaying the form
      }

      <SwitchButton
        btnText="הוסף קישור +"
        currentState={showForm}
        switchStateFunc={setShowForm}
      />
    </div>
  );
}

export default LinkSection;
