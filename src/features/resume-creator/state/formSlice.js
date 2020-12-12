import {createSlice} from "@reduxjs/toolkit"

const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        professionalSummary: "",
        experience: []
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
            console.log(state);
        },
        setLastName: (state, action) => {
            state.lastName = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setPhoneNumber: (state, action) => {
            state.phoneNumber = action.payload
        },
        setProfessionalSummary: (state, action) => {
            state.professionalSummary = action.payload
        },
        addExperience: (state, action) => {
            state.experience = [...state.experience, action.payload]
        }
    }
})

export default formSlice;
