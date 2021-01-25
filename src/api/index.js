import download from "downloadjs";
import axios from "axios";

const url = "https://korothaim-api.herokuapp.com/";

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

export const wakeupServer = async () => {
  axios.get(url + "hello").then((res) => {
    console.log(res.data);
  });
};
