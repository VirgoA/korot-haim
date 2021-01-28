import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BlueTemplate from "./templates/BlueTemplate";
import { Button, Tooltip } from "@material-ui/core";
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import "./resumePreview.css";
import { downloadResume } from "../../api";
import ReactDOMServer from "react-dom/server";
import formSlice from "./state/formSlice";
import requestSlice from "./state/requestSlice";

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
