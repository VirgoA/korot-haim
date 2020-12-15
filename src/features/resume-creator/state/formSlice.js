import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    professionalSummary: "",
    experience: [],
    education: [],
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setProfessionalSummary: (state, action) => {
      state.professionalSummary = action.payload;
    },
    addExperience: (state, action) => {
      state.experience = [...state.experience, action.payload];
    },
    removeExperience: (state, action) => {
      state.experience = state.experience.filter((item, index) => {
        return index !== action.payload;
      });
    },

    addEducation: (state, action) => {
      state.education = [...state.education, action.payload];
    },
    removeEducation: (state, action) => {
      state.education = state.education.filter((item, index) => {
        return index !== action.payload;
      });
    },
  },
});

export default formSlice;
