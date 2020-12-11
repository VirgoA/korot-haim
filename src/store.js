import {combineReducers} from 'redux';
import {configureStore} from "@reduxjs/toolkit"
import formSlice from './features/resume-creator/state/formSlice'

const rootReducer = combineReducers({
    form: formSlice.reducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store;