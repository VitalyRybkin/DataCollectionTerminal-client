import ScanComponent from "./ScanComponent.jsx";

function DocumentContent() {

    const style = {
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
    }
    return (
        <div style={style}>
            <ScanComponent/>
        </div>
    )
}

export default DocumentContent;