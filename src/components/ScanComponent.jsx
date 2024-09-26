import NextButton from "../elements/NextButton.jsx";
import CancelButton from "../elements/CancelButton.jsx";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import style from "./InputStyle.module.css";


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
                <div className={style.invoice_form_field}>
                    <label className="fonts_roboto_13_400">Сканируйте штрихкод с номером объекта или введите его
                        вручную.</label>
                    <label htmlFor="invoice_number" className={`fonts_roboto_13_400 ${style.invoice_form_label}`}>Номер
                        объекта</label>
                    <input onChange={(e) => handleChangeInput(e)} type="text" id="invoice_number"
                           className={style.invoice_form_input}/>
                    <label htmlFor="invoce_type"  className={`fonts_roboto_13_400 ${style.invoice_form_label}`}>Тип объекта
                        БО</label>
                    <input type="text" id="invoce_type" className={style.invoice_form_input} disabled={true}/>
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
