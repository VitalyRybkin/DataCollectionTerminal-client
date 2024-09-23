import {combineReducers} from "@reduxjs/toolkit";
import menuReducer from "./MenuReducer.jsx";

const rootReducer = combineReducers({
    mainWindowSlice: menuReducer,
})

export default rootReducer;