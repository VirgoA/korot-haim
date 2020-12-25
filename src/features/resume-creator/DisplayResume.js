import React, { useState } from "react";
import ResumeOne from "./templates/ResumeOne";
import "./displayResume.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Button } from '@material-ui/core';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';

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

  return (
    <div>
      <div
        id="resume-capture"
        style={{
          // height: 792,
          height: 528,
          // width: 636,
          width: 424,
          padding: "none",
          backgroundColor: "white",
          boxShadow: "5px 5px 5px black",
          margin: "auto",
          overflowX: "hidden",
          overflowY: "hidden",
        }}
      >
        <ResumeOne />
      </div>
      <div style={{display:"flex", justifyContent:"center"}}>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          style={{
            fontSize:"22px",
            marginTop:"16px",
            alignContent:"center",
            fontWeight:"bold",
            width:"250px"
          }}
          onClick={captureResume}
        >
          הורד
        <GetAppRoundedIcon style={{marginTop:"4px"}}/>
        </Button>
      </div>
    </div>
  );
}

export default DisplayResume;
