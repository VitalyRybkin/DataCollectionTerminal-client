import {createSlice} from "@reduxjs/toolkit";
import {MAIN_MENU, setInitialState, SETTINGS} from "./actions.jsx";

class MenuDataStorage {
    constructor(
        menuListItems,
    ) {
        this.menuListItems = menuListItems;
    }

    get menuListItemsData() {
        return this.menuListItems;
    }

    set menuSetListItemsData(data) {
        this.menuListItems = data;
    }
}

export const menuDataStorage = new MenuDataStorage([]);

const initialState = {
    toggleMenuSwitch: setInitialState,
    toggleHeaderText: "Меню"
};

export const menuSLice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        menuSwitch: (state, action) => {
            state.toggleMenuSwitch = action.payload;
        },
        headerText: (state, action) => {
            state.toggleHeaderText = action.payload;
        },
    }
});

export const {
    menuSwitch, headerText
} = menuSLice.actions;

export default menuSLice.reducer;
