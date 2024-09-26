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
import SearchButton from "../elements/SearchButton.jsx";
import CreateButton from "../elements/CreateButton.jsx";
import HeaderMenu from "../components/HeaderMenu.jsx";


export const settingMenu = {
    mainContent: [<SettingButton1/>, <SettingButton2 />],
    headerContent: ["Настройки"],
    scanContent: "none",
    filterContent: "none",
    invoicesList: "none",
};

export const caseMenu = {
    mainContent: [<WarehouseButton/>, <ManufactureButton/>],
    headerContent: ["Задачи"],
    scanContent: "none",
    filterContent: "none",
    invoicesList: "none",
};

export const manufactureMenu = {
    mainContent: [<InventoryButton/>, <InPlantInvoiceINButton/>, <InPlantInvoiceOUTButton/>, <LimitCardButton/>, <WorkshopNomenclatureButton/>],
    headerContent: ["Учет в производстве"],
    scanContent: "none",
    filterContent: "none",
    invoicesList: "none",
};

export const scanScreen = {
    mainContent: [],
    headerContent: [<CloseButton/>, "Сканировать номер объекта"],
    scanContent: "block",
    filterContent: "none",
    invoicesList: "none",
}

export const filterScreenOut = {
    mainContent: [],
    headerContent: [<CloseButton/>, "Фильтр ВЗН УП (расход)"],
    scanContent: "none",
    filterContent: "block",
    filterType: "out",
    invoicesList: "none",
}

export const filteredInvoicesListOut = {
    mainContent: [],
    headerContent: ["ВЗН УП (Расход)", <HeaderMenu menu={[<SearchButton/>, <CreateButton/>]}/>],
    scanContent: "none",
    filterContent: "none",
    invoicesList: "block",
}

export const filterScreenIn = {
    mainContent: [],
    headerContent: [<CloseButton/>, "Фильтр ВЗН УП (приход)"],
    scanContent: "none",
    filterContent: "block",
    filterType: "in",
    invoicesList: "none",
}

export const filteredInvoicesListIn = {
    mainContent: [],
    headerContent: ["ВЗН УП (Приход)", <HeaderMenu menu={[<CreateButton/>]}/>],
    scanContent: "none",
    filterContent: "none",
    invoicesList: "block",
}


