import {useSelector} from "react-redux";
import style from "./InputStyle.module.css";
import CancelButton from "../elements/CancelButton.jsx";
import {useEffect, useState} from "react";
import CreateInvoiceButton from "../elements/CreateInvoiceButton.jsx";

function CreateInvoiceComponent() {

    const displayNewInvoice  = useSelector((state) => state.mainWindowSlice.windowContent.newInvoice);

    const invoiceNumberElem = document.getElementById("new_invoice_number");
    const invoiceSenderElem = document.getElementById("new_invoice_sender");
    const invoiceReceiverElem = document.getElementById("new_invoice_receiver");
    const invoiceGiveOutResponsibleElem = document.getElementById("new_invoice_giveout_responsible");
    const invoiceAcceptanceResponsibleElem = document.getElementById("new_invoice_acceptance_responsible");
    const invoiceDateElem = document.getElementById("new_invoice_date");

    const [fieldsValues, setFieldsValues] = useState({
        "invoiceNumberElem": "",
        "invoiceSenderElem": "",
        "invoiceReceiverElem": "",
        "invoiceGiveOutResponsibleElem": "",
        "invoiceAcceptanceResponsibleElem": "",
        "invoiceDateElem": "",
    });

    useEffect(() => {
        if (invoiceNumberElem !== null) invoiceNumberElem.value = "";
        if (invoiceSenderElem !== null) invoiceNumberElem.value = "";
        if (invoiceReceiverElem !== null) invoiceNumberElem.value = "";
        if (invoiceGiveOutResponsibleElem !== null) invoiceNumberElem.value = "";
        if (invoiceAcceptanceResponsibleElem !== null) invoiceNumberElem.value = "";
    }, [displayNewInvoice])

    window.onload= function() {
        const dateInput = document.getElementById("new_invoice_date");
        const nowDate = new Date();
        dateInput.valueAsDate = nowDate;
        setFieldsValues(prevFieldsValues => ({...prevFieldsValues, "invoiceDateElem": `${nowDate.getFullYear()}-${nowDate.getMonth() + 1}-${nowDate.getDate()}`}));
    }

    const handleInvoiceNumberChange = () => setFieldsValues(prevFieldsValues => ({...prevFieldsValues, "invoiceNumberElem": invoiceNumberElem.value.toString()}));
    const handleInvoiceSenderChange = () => setFieldsValues(prevFieldsValues => ({...prevFieldsValues, "invoiceSenderElem": invoiceSenderElem.value.toString()}));
    const handleInvoiceReceiverChange = () => setFieldsValues(prevFieldsValues => ({...prevFieldsValues, "invoiceReceiverElem": invoiceReceiverElem.value.toString()}));
    const handleInvoiceGiveoutResponsible = () => setFieldsValues(prevFieldsValues => ({...prevFieldsValues, "invoiceGiveOutResponsibleElem": invoiceGiveOutResponsibleElem.value.toString()}));
    const handleInvoiceDate = () => setFieldsValues(prevFieldsValues => ({...prevFieldsValues, "invoiceDateElem": invoiceDateElem.value.toString()}));
    const handleInvoiceAcceptanceResponsible = () => setFieldsValues(prevFieldsValues => ({...prevFieldsValues, "invoiceAcceptanceResponsibleElem": invoiceAcceptanceResponsibleElem.value.toString()}));

    return (
        <div className="new_invoice_component" style={{display: `${displayNewInvoice}`, width: "100%"}}>
            <div className={style.invoice_form}>
                <div className={style.invoice_form_field}>
                    <label htmlFor="new_invoice_number"
                           className={`fonts_roboto_13_400 ${style.invoice_form_label}`}>
                        № ВЗН*
                    </label>
                    <input type="text"
                           className={`fonts_roboto_15_400 ${style.invoice_form_input}`}
                           id="new_invoice_number"
                           onChange={handleInvoiceNumberChange}/>

                    <label htmlFor="new_invoice_sender"
                           className={`fonts_roboto_13_400 ${style.invoice_form_label}`}>
                        Отправитель*
                    </label>
                    <input type="text"
                           className={`fonts_roboto_15_400 ${style.invoice_form_input}`}
                           id="new_invoice_sender"
                           onChange={handleInvoiceSenderChange}/>

                    <label htmlFor="new_invoice_receiver"
                           className={`fonts_roboto_13_400 ${style.invoice_form_label}`}>
                        Получатель*
                    </label>
                    <input type="text"
                           className={`fonts_roboto_15_400 ${style.invoice_form_input}`}
                           id="new_invoice_receiver"
                           onChange={handleInvoiceReceiverChange}/>

                    <label htmlFor="new_invoice_giveout_responsible"
                           className={`fonts_roboto_13_400 ${style.invoice_form_label}`}>
                        Выдал МОЛ*
                    </label>
                    <input type="text"
                           className={`fonts_roboto_15_400 ${style.invoice_form_input}`}
                           id="new_invoice_giveout_responsible"
                           onChange={handleInvoiceGiveoutResponsible}/>

                    <label htmlFor="new_invoice_date"
                           className={`fonts_roboto_13_400 ${style.invoice_form_label}`}>
                        Дата дата выдачи*
                    </label>
                    <input type="date"
                           className={`fonts_roboto_15_400 ${style.invoice_form_input}`}
                           id="new_invoice_date"
                           onChange={handleInvoiceDate}/>

                    <label htmlFor="new_invoice_acceptance_responsible"
                           className={`fonts_roboto_13_400 ${style.invoice_form_label}`}>
                        Принял МОЛ
                    </label>
                    <input type="text"
                           className={`fonts_roboto_15_400 ${style.invoice_form_input}`}
                           id="new_invoice_acceptance_responsible"
                           onChange={handleInvoiceAcceptanceResponsible}/>

                </div>
                <div className={`invoice_form_btn_box ${style.invoice_form_btn_box}`}>
                    <CreateInvoiceButton fields={fieldsValues}/>
                    <CancelButton/>
                </div>
            </div>
        </div>
    )
}

export default CreateInvoiceComponent;