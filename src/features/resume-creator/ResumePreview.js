import React from "react";

import "./resumePreview.css";

function ResumePreview(props) {
  return (
    <div className="resume-preview-container">
      <div className="resume-preview">
        <div id="resume-capture">{props.renderTemplate()}</div>
      </div>
    </div>
  );
}

export default ResumePreview;
