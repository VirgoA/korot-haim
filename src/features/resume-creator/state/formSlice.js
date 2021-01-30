import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  professionalSummary: "",
  experience: [],
  armyExperience: [],
  education: [],
  skills: {},
};

const formSlice = createSlice({
  name: "form",
  initialState: initialState,
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
    addArmyExperience: (state, action) => {
      state.armyExperience = [...state.armyExperience, action.payload];
    },
    removeArmyExperience: (state, action) => {
      state.armyExperience = state.armyExperience.filter((item, index) => {
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

    addSkill: (state, action) => {
      if (state.skills[action.payload.sphere]) {
        state.skills[action.payload.sphere] = [
          ...state.skills[action.payload.sphere],
          action.payload.skill,
        ];
      } else {
        state.skills[action.payload.sphere] = [action.payload.skill];
      }
    },
    removeSkill: (state, action) => {
      const sphere = action.payload.sphere;
      if (state.skills[sphere].length <= 1) {
        const { [sphere]: value, ...restSkills } = state.skills;
        state.skills = restSkills;
      } else {
        state.skills[sphere] = state.skills[sphere].filter((item) => {
          return item !== action.payload.skill;
        });
      }
    },
    setExampleState: (state, action) => {
      for (let key in { ...state }) {
        state[key] = action.payload[key];
      }
    },
  },
});

export default formSlice;
