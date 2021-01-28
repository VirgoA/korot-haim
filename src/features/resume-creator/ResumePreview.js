import React from "react";
import { useSelector } from "react-redux";
import BlueTemplate from "./templates/BlueTemplate";
import "./resumePreview.css";

function ResumePreview(props) {

  const formData = useSelector((state) => state.form);

  return (
    <div className="resume-preview-container">
      <div className="resume-preview">
        <div id="resume-capture">
          <BlueTemplate data={formData} />
        </div>
      </div>
    </div>
  );

}

export default ResumePreview;
