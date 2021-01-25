import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BlueTemplate from "./templates/BlueTemplate";
import { Button } from "@material-ui/core";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
import "./displayResume.css";
import { downloadResume } from "../../api";
import exampleData from "../../utils/example_data.json";
import ReactDOMServer from "react-dom/server";

function ResumePreview(props) {
  const data = useSelector((state) => state.form);
  const [downloadAvailable, setAvailability] = useState(true);

  return (
    <div className="resume-preview">
      <div id="resume-capture">
        <BlueTemplate data={data} />
      </div>
      <div className="resume-preview-controls">
        <Button
          variant="contained"
          size="large"
          color="secondary"
          id="download-btn"
          onClick={downloadRequest}
        >
          הורד
          <GetAppRoundedIcon style={{ marginTop: "4px" }} />
        </Button>
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
