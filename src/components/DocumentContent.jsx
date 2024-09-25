import ScanComponent from "./ScanComponent.jsx";
import FilterComponent from "./FilterComponent.jsx";

function DocumentContent() {

    const style = {
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
    }
    return (
        <div style={style}>
            <ScanComponent/>
            <FilterComponent />
        </div>
    )
}

export default DocumentContent;