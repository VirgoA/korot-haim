import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ResumeOne from "./templates/ResumeOne";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Button } from "@material-ui/core";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
import "./displayResume.css";
import { sendPostReq } from "../../communication";

function DisplayResume(props) {
  // const [resume, setResume] = useState();

  // const exportPDF = () => {
  //   resume.save();
  // };
  const doc = new jsPDF();
  const captureResume = () => {
    html2canvas(document.querySelector("#resume-capture")).then((canvas) => {
      //document.body.appendChild(canvas); // if you want see your screenshot in body.
      const imgData = canvas.toDataURL("image/png");

      //document.write('<img src="' + imgData + '"/>');
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("download.pdf");
    });
  };

  const data = useSelector((state) => state.form);

  return (
    <div>
      <div
        style={{
          width: "90%",
          maxWidth: "640px",
          height: "75vh"
        }}
        id="resume-capture"
      >
        <ResumeOne />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          style={{
            fontSize: "22px",
            marginTop: "14px",
            alignContent: "center",
            fontWeight: "bold",
            width: "250px",
          }}
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

export default DisplayResume;
