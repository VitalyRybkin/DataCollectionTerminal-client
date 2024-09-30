import ScanComponent from "./ScanComponent.jsx";
import FilterComponent from "./FilterComponent.jsx";
import {createContext, useState} from "react";
import FilteredInvoicesListComponent from "./FilteredInvoicesListComponent.jsx";
import CreateInvoiceComponent from "./CreateInvoiceComponent.jsx";
import NewInvoiceComponent from "./NewInvoiceComponent.jsx";

export const FilteredInvoicesContext = createContext(null);
export const NewInvoiceContext = createContext(null);

function DocumentContent() {

    const style = {
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
    }

    const [filteredInvoices, setFilteredInvoices] = useState([]);
    const [fieldsValues, setFieldsValues] = useState({
        "invoiceNumberElem": "",
        "invoiceSenderElem": "",
        "invoiceReceiverElem": "",
        "invoiceGiveOutResponsibleElem": "",
        "invoiceAcceptanceResponsibleElem": "",
        "invoiceDateElem": "",
    });

    return (
        <div style={style}>
            <FilteredInvoicesContext.Provider value={[filteredInvoices, setFilteredInvoices]}>
            <NewInvoiceContext.Provider value={[fieldsValues, setFieldsValues]}>
                <ScanComponent/>
                <FilterComponent />
                <FilteredInvoicesListComponent />
                <CreateInvoiceComponent />
                <NewInvoiceComponent />
            </NewInvoiceContext.Provider>
            </FilteredInvoicesContext.Provider>
        </div>
    )
}

export default DocumentContent;