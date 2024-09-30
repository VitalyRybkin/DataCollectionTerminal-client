import {createSlice} from "@reduxjs/toolkit";
import CaseButton from "../elements/CaseButton.jsx";
import SettingsButton from "../elements/SettingsButton.jsx";
import InfoButton from "../elements/InfoButton.jsx";

const _STARTING_MENU_DATA = {
    mainContent: [<CaseButton/>, <SettingsButton/>, <InfoButton/>],
    headerContent: ["Меню"],
    scanContent: "none",
    filterContent: "none",
    invoicesList: "none",
    newInvoice: "none",
    newInvoiceForm: "none",
}

export let stateStack = [_STARTING_MENU_DATA];

const initialState = {
    windowContent: _STARTING_MENU_DATA,
};


export const mainWindowSlice = createSlice({
    name: "content",
    initialState,
    reducers: {
        renderMainContent: (state, action) => {
            stateStack.push(action.payload);
            state.windowContent = action.payload;
        },
        renderMainMenu: (state) => {
            if (stateStack.length > 1) {
                stateStack.splice(1);
                state.windowContent = _STARTING_MENU_DATA;
            }
        },
        renderScreen: (state, action) => {
            stateStack.push(action.payload);
            state.windowContent = action.payload;
        },
        rollBack: (state) => {
            if (stateStack.length > 1) {
                stateStack.pop()
                state.windowContent = stateStack[stateStack.length - 1];
            }
        }
    }
});

export const {
    renderMainContent,
    renderMainMenu,
    rollBack,
    renderScreen,
} = mainWindowSlice.actions;

export default mainWindowSlice.reducer;
