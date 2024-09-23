import {createSlice} from "@reduxjs/toolkit";
import CaseButton from "../elements/CaseButton.jsx";
import SettingsButton from "../elements/SettingsButton.jsx";
import InfoButton from "../elements/InfoButton.jsx";

const startingMenuData = {
    mainContent: [<CaseButton/>, <SettingsButton/>, <InfoButton/>],
    headerContent: ["Меню"],
}

export let stateStack = [startingMenuData];

const initialState = {
    windowContent: startingMenuData,
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
                state.windowContent = {mainContent: startingMenuData.mainContent, headerContent: startingMenuData.headerContent};
            }
        },
        renderScanner: (state, action) => {
            stateStack.push(action.payload);
            state.windowContent = action.payload;
        },
        rollBack: (state) => {
            if (stateStack.length > 1) {
                stateStack.pop()
                const lastState = stateStack[stateStack.length - 1];
                state.windowContent = {mainContent: lastState.mainContent, headerContent: lastState.headerContent};
            }
        }
    }
});

export const {
    renderMainContent,
    renderMainMenu,
    rollBack,
    renderScanner,
} = mainWindowSlice.actions;

export default mainWindowSlice.reducer;
