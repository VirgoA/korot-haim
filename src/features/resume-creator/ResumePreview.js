import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BlueTemplate from "./templates/BlueTemplate";
import { Button, Tooltip } from "@material-ui/core";
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import "./resumePreview.css";
import { downloadResume } from "../../api";
import ReactDOMServer from "react-dom/server";

function ResumePreview(props) {
  const data = useSelector((state) => state.form);
  const [downloadAvailable, setAvailability] = useState(true);

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
              onClick={downloadRequest}
            >
              <SaveAltIcon style={{fontSize:"1.5em"}}/>
            </Button>
          </Tooltip>
      </div>
    </div>
  );

  function downloadRequest() {
    setAvailability(false);
    submitRequest(downloadAvailable, data);
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        setAvailability(true);
      }, 5000); //5 seconds delay.
    });
  }
}

function submitRequest(downloadAvailable, data) {
  if (downloadAvailable) {
    downloadResume(
      ReactDOMServer.renderToStaticMarkup(<BlueTemplate data={data} />)
    );
  } else {
    console.log("request canceled - download delay");
    console.log("only 1 request is allowed every 5 seconds");
  }
}

export default ResumePreview;
