import download from "downloadjs";
import { config } from "./constants";

const url = config.url.API_URL;

export const downloadResume = async (html) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/pdf"
    },
    body: JSON.stringify({html: html})
  }

  try {
    const response = await fetch(url, requestOptions)
    const responseArrayBuffer = await response.arrayBuffer()
    const pdf = new Blob([responseArrayBuffer], { type: "application/pdf" });
    download(pdf, "korothaim.pdf");
    return response
  } catch (error) {
    return error
  }
};

export const wakeupServer = async () => {
  try{
    const res = await fetch(url + 'hello')
    const msgFromServer = await res.json();
    console.log(msgFromServer);
  } catch (error) {
    return error
  }

};
