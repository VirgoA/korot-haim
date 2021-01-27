import download from "downloadjs";
import axios from "axios";
import { config } from "./constants";

const url = config.url.API_URL;

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
  try{
    const res = await fetch(url + '/hello')
    const msgFromServer = await res.json();
    console.log(msgFromServer);
  } catch (error) {
    return error
  }

};
