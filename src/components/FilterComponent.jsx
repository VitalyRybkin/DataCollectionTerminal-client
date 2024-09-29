
import CancelButton from "../elements/CancelButton.jsx";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import SearchFilterButton from "../elements/SearchFilterButton.jsx";
import style from "./InputStyle.module.css";

function FilterComponent() {

    const displayFilter  = useSelector((state) => state.mainWindowSlice.windowContent.filterContent);

    const [invoiceNumber, setInvoiceNumber] = useState("");
    const [invoiceSender, setInvoiceSender] = useState("");
    const [invoiceReceiver, setInvoiceReceiver] = useState("");

    const invoiceNumberElem = document.getElementById("filter_invoice_number");
    const invoiceSenderElem = document.getElementById("filter_invoice_sender");
    const invoiceReceiverElem = document.getElementById("filter_invoice_receiver");

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
            <div className={style.invoice_form}>
                <div  className={style.invoice_form_field}>
                    <label htmlFor="filter_invoice_number"
                           className={`fonts_roboto_13_400 ${style.invoice_form_label}`}>
                        Номер ВЗН
                    </label>
                    <input type="text"
                           className={`fonts_roboto_15_400 ${style.invoice_form_input}`}
                           id="filter_invoice_number"
                           onChange={handleInvoiceNumberChange}/>

                    <label htmlFor="filter_invoice_sender"
                           className={`fonts_roboto_13_400 ${style.invoice_form_label}`}>
                        Отправитель
                    </label>
                    <input type="text"
                           className={`fonts_roboto_15_400 ${style.invoice_form_input}`}
                           id="filter_invoice_sender"
                           onChange={handleInvoiceSenderChange}/>

                    <label htmlFor="filter_invoice_receiver"
                           className={`fonts_roboto_13_400 ${style.invoice_form_label}`}>
                        Получатель
                    </label>
                    <input type="text"
                           className={`fonts_roboto_15_400 ${style.invoice_form_input}`}
                           id="filter_invoice_receiver"
                           onChange={handleInvoiceReceiverChange}/>

                    <label htmlFor="filter_invoce_period"
                           className={`fonts_roboto_13_400 ${style.invoice_form_label}`}>
                        Дата принятия (период)
                    </label>

                    {/*TODO: search period range picker*/}

                    <input type="text"
                           className={`fonts_roboto_15_400 ${style.invoice_form_input}`}
                           id="filter_invoce_period"
                           defaultValue={`${firstDay.toString()} - ${lastDay.toString()}`}/>

                </div>
                <div className={`invoice_form_btn_box ${style.invoice_form_btn_box}`}>
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
