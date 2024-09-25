
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

    const [invoiceNumber, setInvoiceNumber] = useState("");
    const [invoiceSender, setInvoiceSender] = useState("");
    const [invoiceReceiver, setInvoiceReceiver] = useState("");

    const invoiceNumberElem = document.getElementById("filter_invoice_number");
    const invoiceSenderElem = document.getElementById("filter_invoice_sender");
    const invoiceReceiverElem = document.getElementById("filter_invoice_receiver");

    function handleInvoiceNumberChange() {
        setInvoiceNumber(invoiceNumberElem.value.toString());
    }

    function handleInvoiceSenderChange() {
        setInvoiceSender(invoiceSenderElem.value.toString());
    }

    function handleInvoiceReceiverChange() {
        setInvoiceReceiver(invoiceReceiverElem.value.toString());
    }

    useEffect(() => {
        if (invoiceNumberElem !== null) invoiceNumberElem.value = "";
        if (invoiceSenderElem !== null) invoiceNumberElem.value = "";
        if (invoiceReceiverElem !== null) invoiceNumberElem.value = "";
    }, [displayFilter])


    return (
        <div className="filter_component" style={{display: `${displayFilter}`, width: "100%"}}>
            <div style={invoice_form}>
                <div style={invoice_form_field}>
                    <label htmlFor="filter_invoice_number"
                           className="fonts_roboto_13_400"
                           style={invoice_form_label}>
                        Номер ВЗН
                    </label>
                    <input type="text"
                           className="fonts_roboto_15_400"
                           id="filter_invoice_number"
                           style={invoice_form_input}
                           onChange={handleInvoiceNumberChange}/>

                    <label htmlFor="filter_invoice_sender" className="fonts_roboto_13_400"
                           style={invoice_form_label}>
                        Отправитель
                    </label>
                    <input type="text"
                           className="fonts_roboto_15_400"
                           id="filter_invoice_sender"
                           style={invoice_form_input}
                           onChange={handleInvoiceSenderChange}/>

                    <label htmlFor="filter_invoice_receiver"
                           className="fonts_roboto_13_400"
                           style={invoice_form_label}>
                        Получатель
                    </label>
                    <input type="text"
                           className="fonts_roboto_15_400"
                           id="filter_invoice_receiver"
                           style={invoice_form_input}
                           onChange={handleInvoiceReceiverChange}/>

                    <label htmlFor="filter_invoce_period" className="fonts_roboto_13_400"
                           style={invoice_form_label}>
                        Дата принятия (период)
                    </label>
                    <input type="text"
                           className="fonts_roboto_15_400"
                           id="filter_invoce_period"
                           style={invoice_form_input}
                           defaultValue={`${firstDay.toString()} - ${lastDay.toString()}`}/>

                </div>
                <div className="invoice_form_btn_box" style={invoice_form_btn_box}>
                    <SearchFilterButton
                        invoiceNumber={invoiceNumber}
                        invoiceSender={invoiceSender}
                        invoiceReceiver={invoiceReceiver}
                        startDatePeriod={firstDay}
                        endDatePeriod={lastDay}
                    />
                    <CancelButton/>
                </div>
            </div>
        </div>
    )
}

export default FilterComponent;
