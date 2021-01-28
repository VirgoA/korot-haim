import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./features/resume-creator/state/formSlice";
import requestSlice from "./features/resume-creator/state/requestSlice";

const rootReducer = combineReducers({
  form: formSlice.reducer,
  request: requestSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
