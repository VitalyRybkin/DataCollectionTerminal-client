import CaseButton from "../elements/CaseButton.jsx";
import SettingsButton from "../elements/SettingsButton.jsx";
import InfoButton from "../elements/InfoButton.jsx";
import SettingButton1 from "../elements/SettingButton1.jsx";
import SettingButton2 from "../elements/SettingButton2.jsx";
import WarehouseButton from "../elements/WarehouseButton.jsx";
import ManufactureButton from "../elements/ManufactureButton.jsx";
import InventoryButton from "../elements/InventoryButton.jsx";
import InPlantInvoiceINButton from "../elements/InPlantInvoiceIN.jsx";
import InPlantInvoiceOUTButton from "../elements/InPlantInvoiceOUT.jsx";
import LimitCardButton from "../elements/LimitCardButton.jsx";
import WorkshopNomenclatureButton from "../elements/WorkshopNomenclatureButton.jsx";
import CloseButton from "../elements/CloseButton.jsx";
// import SettingButton1 from "../elements/SettingButton1.jsx";
// import SettingButton2 from "../elements/SettingButton2.jsx";
// import ManufactureButton from "../elements/ManufactureButton.jsx";
// import WarehouseButton from "../elements/WarehouseButton.jsx";
// import {useDispatch} from "react-redux";
// import {mainWindowSlice} from "./MenuReducer.jsx";
//
// export const MAIN_MENU = 'MAIN_MENU';
// export const SETTINGS = 'SETTINGS';
// export const TASKS = 'TASKS';
// export const ROLL_BACK = 'ROLL_BACK';
// export const SYSTEM_INFO = 'SYSTEM_INFO';

export const settingMenu = {
    mainContent: [<SettingButton1/>, <SettingButton2 />],
    headerContent: ["Настройки"],
};

export const caseMenu = {
    mainContent: [<WarehouseButton/>, <ManufactureButton/>],
    headerContent: ["Задачи"],
};

export const manufactureMenu = {
    mainContent: [<InventoryButton/>, <InPlantInvoiceINButton/>, <InPlantInvoiceOUTButton/>, <LimitCardButton/>, <WorkshopNomenclatureButton/>],
    headerContent: ["Учет в производстве"],
};

export const scanScreen = {
    mainContent: [],
    headerContent: [<CloseButton/>, "Сканировать номер объекта"],
}



