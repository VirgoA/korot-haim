import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  template: "blueTemplate",
}

const settingSlice = createSlice({
  name: "setting",
  initialState: initialState,
  reducers: {
    setTemplate: (state, action) => {
      state.template = action.payload;
    },
  },
});

export default settingSlice;
