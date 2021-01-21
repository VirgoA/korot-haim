import download from "downloadjs";
import axios from "axios";

const url = "http://localhost:3001";

export const downloadResume = async (html) => {
  try {
    let response = await axios.post(url, JSON.stringify({ html: html }), {
      responseType: "arraybuffer",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/pdf",
      },
    });
    let pdf = new Blob([response.data], { type: "application/pdf" });
    download(pdf, "korothaim.pdf");
  } catch (error) {
    return error;
  }
};
