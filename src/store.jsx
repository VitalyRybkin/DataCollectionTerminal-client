import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./reducers/index.jsx";
import {thunk} from "redux-thunk";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(thunk),

})

export default store;