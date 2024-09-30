import {useContext} from "react";
import {NewInvoiceContext} from "./DocumentContent.jsx";
import CreateCardButton from "../elements/CreateCardButton.jsx";
import {useSelector} from "react-redux";

function NewInvoiceComponent() {

    const displayNewInvoice  = useSelector((state) => state.mainWindowSlice.windowContent.newInvoiceForm);

    const invoice_header = {
        width: "100%",
        height: "66px",
    }
    const cards_list_btn = {
        display: "flex",
        justifyContent: "end",
        padding: "10px",
    }

    const cards_list_block = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "287px",
        border: "1px solid var(--colors-outline-gray-300-light)",
        borderRadius: "5px",
    }
    const [newInvoiceData, setNewInvoiceData] = useContext(NewInvoiceContext);

    return (
        <div style={{display: `${displayNewInvoice}`, width: "100%", padding: "10px"}}>
            <div style={invoice_header}>
                <p className="fonts_roboto_14_500">Отправитель: <span className="fonts_roboto_12_400"> {newInvoiceData.invoiceSenderElem}</span></p>
                <p className="fonts_roboto_14_500">Получатель: <span className="fonts_roboto_12_400"> {newInvoiceData.invoiceReceiverElem}</span></p>
                <p className="fonts_roboto_14_500">Статус: <span className="fonts_roboto_12_400"> </span></p>
                <p className="fonts_roboto_14_500">Дата выдачи:<span className="fonts_roboto_12_400"> {newInvoiceData.invoiceDateElem}</span></p>
            </div>
            <div style={cards_list_btn}>
                <CreateCardButton />
            </div>
            <div style={cards_list_block}>
                <p className="fonts_roboto_13_400">Список пуст...</p>
            </div>
        </div>
    )
}

export default NewInvoiceComponent;