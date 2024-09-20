import {combineReducers} from "@reduxjs/toolkit";
import unitsReducer, {menuSLice} from "./MenuReducer.jsx";
import menuReducer from "./MenuReducer.jsx";

const rootReducer = combineReducers({
    menuSLice: menuReducer,
})

export default rootReducer;