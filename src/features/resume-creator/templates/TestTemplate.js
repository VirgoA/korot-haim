import './test.css';
import React from "react";

const TestTemplate = (props) => {

    const {
      experience,
      education,
      skills,
      email,
      lastName,
      name,
      phoneNumber,
      professionalSummary,
    } = props.data;

    const css = ``

    return (
      <div className="A4">
          <style>
              {css}
          </style>
        <div>Test</div>
      </div>
    );
}

export default TestTemplate;
