import React, { useState } from "react";
import ResumeOne from "./templates/ResumeOne";
import "./displayResume.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

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
          height: 792,
          width: 636,
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

      <button
        onClick={captureResume}
        style={{
          width: "300px",
          margin: "auto",
          marginTop: "24px",
          display: "block",
          alignContent: "center",
          fontSize: "30px",
        }}
      >
        download
      </button>
    </div>
  );
}

export default DisplayResume;
