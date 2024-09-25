import ScanComponent from "./ScanComponent.jsx";
import FilterComponent from "./FilterComponent.jsx";
import {createContext, useState} from "react";

export const FilteredInvoicesContext = createContext(null);

function DocumentContent(defaultValue) {

    const style = {
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
    }

    const [filteredInvoices, setFilteredInvoices] = useState();

    return (
        <div style={style}>
            <FilteredInvoicesContext.Provider value={{filteredInvoices, setFilteredInvoices}}>
                <ScanComponent/>
                <FilterComponent />
            </FilteredInvoicesContext.Provider>
        </div>
    )
}

export default DocumentContent;