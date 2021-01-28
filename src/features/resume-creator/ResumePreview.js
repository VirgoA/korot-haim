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

  const dispatch = useDispatch();

  const { 
    sentDownloadRequest, 
    downloadRequestSucceeded,
    downloadRequestFailed
  } = requestSlice.actions;

  const formData = useSelector((state) => state.form);
  const requestData = useSelector((state) => state.request);

  const downloadRequest = async () => {
    if(requestData.downloadRequest.status !== "loading") {

      dispatch(sentDownloadRequest());
      try {

        const res = await downloadResume(
          ReactDOMServer.renderToStaticMarkup(<BlueTemplate data={formData}/>)
        )

        if(res.status === 200) {
          await new Promise(r => setTimeout(r, 2000));
          dispatch(downloadRequestSucceeded())
        } else {
          dispatch(downloadRequestFailed());
        }

      } catch(error) {
        dispatch(downloadRequestFailed());
      }

    }
  }

  return (
    <div className="resume-preview-container">
      <div className="resume-preview">
        <div id="resume-capture">
          <BlueTemplate data={formData} />
        </div>
      </div>
      <div className="resume-preview-controls">
          <Tooltip title="הורדה">
            <Button
              variant="contained"
              size="large"
              color="secondary"
              id="download-btn"
              onClick={downloadRequest}
            >
              <SaveAltIcon style={{fontSize:"1.5em"}}/>
            </Button>
          </Tooltip>
      </div>
    </div>
  );

}

export default ResumePreview;
