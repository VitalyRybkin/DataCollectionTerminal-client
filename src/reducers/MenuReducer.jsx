import {createSlice} from "@reduxjs/toolkit";

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

const initialState = menuDataStorage.menuListItemsData;

export const menuSLice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        menuSwitch: (state, action) => {
            return action.payload;
        }
    }
});

export const {
    menuSwitch
} = menuSLice.actions;

export default menuSLice.reducer;
