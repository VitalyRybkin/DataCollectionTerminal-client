
import CancelButton from "../elements/CancelButton.jsx";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import SearchFilterButton from "../elements/SearchFilterButton.jsx";


function FilterComponent() {

    const displayFilter  = useSelector((state) => state.mainWindowSlice.windowContent.filterContent);

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

    const now = new Date();
    let firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    let lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    function formatDate(date) {
        let day = ('0' + date.getDate()).slice(-2);
        let month = ('0' + (date.getMonth() + 1)).slice(-2);
        let year = date.getFullYear();
        return day + '.' + month + '.' + year;
    }

    firstDay = formatDate(firstDay);
    lastDay = formatDate(lastDay);

    useEffect(() => {
        const inputEl = document.getElementById("invoice_number");
        inputEl.value = "";
    }, [displayFilter])

    return (
        <div className="filter_component" style={{display: `${displayFilter}`, width: "100%"}}>
            <form action="" method="get" style={invoice_form}>
                <div style={invoice_form_field}>
                    <label htmlFor="invoice_number" className="fonts_roboto_13_400" style={invoice_form_label}>Номер
                        ВЗН</label>
                    <input type="text"
                           className="fonts_roboto_15_400"
                           id="invoice_number"
                           style={invoice_form_input}/>

                    <label htmlFor="invoce_sender" className="fonts_roboto_13_400"
                           style={invoice_form_label}>Отправитель</label>
                    <input type="text"
                           className="fonts_roboto_15_400"
                           id="invoce_sender"
                           style={invoice_form_input}/>

                    <label htmlFor="invoce_receiver"
                           className="fonts_roboto_13_400"
                           style={invoice_form_label}>Получатель</label>
                    <input type="text"
                           className="fonts_roboto_15_400"
                           id="invoce_receiver"
                           style={invoice_form_input}/>

                    <label htmlFor="invoce_period" className="fonts_roboto_13_400"
                           style={invoice_form_label}>Дата принятия (период)</label>
                    <input type="text"
                           className="fonts_roboto_15_400"
                           id="invoce_period"
                           style={invoice_form_input}
                           defaultValue={`${firstDay.toString()} - ${lastDay.toString()}`} />

                </div>
                <div className="invoice_form_btn_box" style={invoice_form_btn_box}>
                    <SearchFilterButton/>
                    <CancelButton/>
                </div>
            </form>
        </div>
    )
}

export default FilterComponent;
