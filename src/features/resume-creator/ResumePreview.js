import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BlueTemplate from "./templates/BlueTemplate";
import { Button, Tooltip } from "@material-ui/core";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import "./resumePreview.css";
import exampleData from "../../utils/example_data.json";
import ReactDOMServer from "react-dom/server";
import { pdfDownloadRequest } from "./state/formSlice";

function ResumePreview(props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.form);
  const { downloadRequestInProgress } = data;

  const submitDownloadRequest = function () {
    if (downloadRequestInProgress) {
      console.log("download in progress");
    } else {
      dispatch(
        pdfDownloadRequest(
          ReactDOMServer.renderToStaticMarkup(<BlueTemplate data={data} />)
        )
      );
    }
  };

  return (
    <div className="resume-preview-container">
      <div className="resume-preview">
        <div id="resume-capture">
          <BlueTemplate data={data} />
        </div>
      </div>
      <div className="resume-preview-controls">
        <Tooltip title="הורדה">
          <Button
            variant="contained"
            size="large"
            color="secondary"
            id="download-btn"
            onClick={submitDownloadRequest}
          >
            <SaveAltIcon style={{ fontSize: "1.5em" }} />
          </Button>
        </Tooltip>
      </div>
    </div>
  );
}

export default ResumePreview;
