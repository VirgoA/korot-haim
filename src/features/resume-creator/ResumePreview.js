import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BlueTemplate from "./templates/BlueTemplate";
import { Button } from "@material-ui/core";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
import "./displayResume.css";
import { sendPostReq } from "../../communication";
import exampleData from "../../utils/example_data.json"

function ResumePreview(props) {
  const data = useSelector((state) => state.form);

  return (
    <div className="resume-preview">
      <div id="resume-capture">
        <BlueTemplate exampleData={exampleData} data={data}/>
      </div>
      <div className="resume-preview-controls">
        <Button
          variant="contained"
          size="large"
          color="secondary"
          id="download-btn"
          onClick={() => {
            sendPostReq(data);
          }}
        >
          הורד
          <GetAppRoundedIcon style={{ marginTop: "4px" }} />
        </Button>
      </div>
    </div>
  );
}

export default ResumePreview;
