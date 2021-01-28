import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  downloadRequest: {
    status: "idle"
  }
}

const requestSlice = createSlice({
  name: "request",
  initialState: initialState,
  reducers: {
    sentDownloadRequest: (state) => {
      state.downloadRequest.status = "loading"
    },
    downloadRequestSucceeded: (state) => {
      state.downloadRequest.status = "succeeded"
    },
    downloadRequestFailed: (state) => {
      state.downloadRequest.status = "failed"
    },    
  },
});

export default requestSlice;
