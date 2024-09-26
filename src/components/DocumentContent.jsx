import ScanComponent from "./ScanComponent.jsx";
import FilterComponent from "./FilterComponent.jsx";
import {createContext, useState} from "react";
import FilteredInvoicesListComponent from "./FilteredInvoicesListComponent.jsx";

export const FilteredInvoicesContext = createContext(null);

function DocumentContent() {

    const style = {
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
    }

    const [filteredInvoices, setFilteredInvoices] = useState([]);

    return (
        <div style={style}>
            <FilteredInvoicesContext.Provider value={[filteredInvoices, setFilteredInvoices]}>
                <ScanComponent/>
                <FilterComponent />
                <FilteredInvoicesListComponent />
            </FilteredInvoicesContext.Provider>
        </div>
    )
}

export default DocumentContent;