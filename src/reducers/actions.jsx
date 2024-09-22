import CaseButton from "../elements/CaseButton.jsx";
import SettingsButton from "../elements/SettingsButton.jsx";
import InfoButton from "../elements/InfoButton.jsx";
import SettingButton1 from "../elements/SettingButton1.jsx";
import SettingButton2 from "../elements/SettingButton2.jsx";
import ManufactureButton from "../elements/ManufactureButton.jsx";
import WarehouseButton from "../elements/WarehouseButton.jsx";
import {useDispatch} from "react-redux";
import {menuSLice} from "./MenuReducer.jsx";

export const MAIN_MENU = 'MAIN_MENU';
export const SETTINGS = 'SETTINGS';
export const TASKS = 'TASKS';
export const ROLL_BACK = 'ROLL_BACK';
export const SYSTEM_INFO = 'SYSTEM_INFO';

export const setInitialState = [
    <CaseButton/>,
    <SettingsButton/>,
    <InfoButton/>
]

export const mainMenu = () => {
    return {
    type: MAIN_MENU,
    payload: [
        <CaseButton/>,
        <SettingsButton/>,
        <InfoButton/>
    ],
}};

export const settings = () => {
    console.log('kj')
    return {
    type: SETTINGS,
    payload: [
        <SettingButton1/>,
        <SettingButton2/>
    ],
}}

export const tasks = () => ({
    type: TASKS,
    payload: [
        <WarehouseButton/>,
        <ManufactureButton/>,
    ],
})

export const rollBack = () => ({
    type: ROLL_BACK
})

export const systemInfo = () => ({
    type: SYSTEM_INFO
})