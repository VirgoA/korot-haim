import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./features/resume-creator/state/formSlice";
import requestSlice from "./features/resume-creator/state/requestSlice";
import settingSlice from "./features/resume-creator/state/settingSlice";

const rootReducer = combineReducers({
  form: formSlice.reducer,
  request: requestSlice.reducer,
  setting: settingSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
