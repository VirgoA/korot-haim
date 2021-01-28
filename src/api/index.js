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
    return true;
  } catch (error) {
    return error;
  }
};

export const wakeupServer = async () => {
<<<<<<< HEAD
  try {
    const res = await fetch(url + "/hello");
    const msgFromServer = await res.json();
    console.log(msgFromServer);
  } catch (error) {
    return error;
  }
=======
  try{
    const res = await fetch(url + '/hello')
    const msgFromServer = await res.json();
    console.log(msgFromServer);
  } catch (error) {
    return error
  }

>>>>>>> 34fded07b62a65c95bb6c54d07d7ea7ff8ab6d5f
};
