import {combineReducers} from 'redux';
import  {createSlice, configureStore} from "@reduxjs/toolkit"

const formSlice = createSlice({
    name: 'form',
    initialState: {},
    reducers: {
        setName: state => state,
        setLastName: state => state,
        setEmail: state => state,
        setPhoneNumber: state => state,
        setProfessionalSummary: state => state,
        addExperience: state => state
    }
})

const rootReducer = combineReducers({
    form: formSlice.reducer
})

const store = configureStore({
    reducer: rootReducer
})