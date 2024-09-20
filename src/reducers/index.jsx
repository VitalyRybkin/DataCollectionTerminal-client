import {combineReducers} from "@reduxjs/toolkit";
import menuReducer from "./MenuReducer.jsx";

const rootReducer = combineReducers({
    menuSLice: menuReducer,
})

export default rootReducer;