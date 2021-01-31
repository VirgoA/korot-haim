import "./resumePreview.css";
import React from "react";

const ResumePreview = (props) => {
  return (
    <div className="resume-preview-container">
      <div className="resume-preview">
        <div id="resume-capture">{props.renderTemplate()}</div>
      </div>
    </div>
  );
};

export default ResumePreview;
