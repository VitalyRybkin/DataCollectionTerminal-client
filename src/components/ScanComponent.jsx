import NextButton from "../elements/NextButton.jsx";
import CancelButton from "../elements/CancelButton.jsx";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";


function ScanComponent() {

    const displayScan  = useSelector((state) => state.mainWindowSlice.windowContent.scanContent);

    const invoice_form = {
        padding: "10px",
    }

    const invoice_form_btn_box = {
        display: "flex",
        justifyContent: "center",
        gap: "10px"
    }

    const invoice_form_field = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "4px",
        marginBottom: "10px",
    }

    const invoice_form_input = {
        width: "100%",
        height: "37px",
        borderRadius: "5px",
        padding: "5px",
        border: "1px solid var(--colors-outline-gray-900-border)",
        color: "var(--colors-outline-gray-900-border)",
    }

    const invoice_form_label = {
        marginLeft: "15px",
        marginBottom: "-15px",
        padding: "3px",
        width: "fit-content",
        backgroundColor: "#FFFFFF",
        zIndex: "100"
    }

    const [isButtonDisabled, setButtonDisabled] = useState(true);

    function handleChangeInput(e) {
        e.target.value !== "" ? setButtonDisabled(false) : setButtonDisabled(true);
    }

    useEffect(() => {
        const inputEl = document.getElementById("invoice_number");
        inputEl.value = "";
        setButtonDisabled(true)
    }, [displayScan])

    return (
        <div className="scan_component" style={{display: `${displayScan}`}}>
            <form action="" method="get" style={invoice_form}>
                <div style={invoice_form_field}>
                    <label className="fonts_roboto_13_400">Сканируйте штрихкод с номером объекта или введите его
                        вручную.</label>
                    <label htmlFor="invoice_number" className="fonts_roboto_13_400" style={invoice_form_label}>Номер
                        объекта</label>
                    <input onChange={(e) => handleChangeInput(e)} type="text" id="invoice_number"
                           style={invoice_form_input}/>
                    <label htmlFor="invoce_type" className="fonts_roboto_13_400" style={invoice_form_label}>Тип объекта
                        БО</label>
                    <input type="text" id="invoce_type" style={invoice_form_input} disabled={true}/>
                </div>
                <div className="invoice_form_btn_box" style={invoice_form_btn_box}>
                    <NextButton btnDisabled={isButtonDisabled}/>
                    <CancelButton/>
                </div>
            </form>
        </div>
    )
}

export default ScanComponent;
