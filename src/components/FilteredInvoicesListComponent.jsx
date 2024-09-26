import {useContext, useEffect, useState} from "react";
import {FilteredInvoicesContext} from "./DocumentContent.jsx";
import {useSelector} from "react-redux";

function FilteredInvoicesListComponent() {

    const displayInvoices  = useSelector((state) => state.mainWindowSlice.windowContent.invoicesList);

    const main_style = {
        display: `${displayInvoices}`,
        width: "100%",
        height: '380px',
        margin: "5px",
        border: "1px solid var(--colors-outline-gray-900-border)",
        borderRadius: "5px",
        overflow: 'scroll',
    }

    // TODO: move styles to module

    const invoice_header_style = {
        color: "var(--colors-text-gray-600-outline-labels)",
    }

    const style_btn = {
        width: "100%",
        padding: "2px",
        borderBottom: "1px solid var(--colors-outline-gray-300-light)",
    }

    const invoice_header_title = {
        textAlign: "left",
        padding: "2px 0",
    }

    const [filteredInvoices] = useContext(FilteredInvoicesContext);
    const [renderList, setRenderList] = useState([]);

    let invoicesList = [];
    useEffect(() => {
        filteredInvoices.forEach(invoice => {
            invoicesList.push(
                <li key={crypto.randomUUID()}>
                    <button style={style_btn}>
                        <p className="fonts_roboto_12_400" style={invoice_header_title}>ВЗН №{invoice['Номер']}</p>
                        <p className="fonts_roboto_10_400" style={invoice_header_style}>
                            <span style={{fontWeight: "bold"}}>Отправитель: </span>
                            Цех{invoice['Отправитель']['Цех']}/участок Цеха{invoice['Отправитель']['участок Цеха']}
                        </p>
                        <p className="fonts_roboto_10_400" style={invoice_header_style}>
                            <span style={{fontWeight: "bold"}}>Получитель: </span>
                            Цех{invoice['Получатель']['Цех']}/участок Цеха{invoice['Получатель']['участок Цеха']}
                        </p>
                        <p className="fonts_roboto_10_400" style={invoice_header_style}>
                            <span style={{fontWeight: "bold"}}>Дата выдачи: </span>
                            {invoice['Дата выдачи']}
                        </p>
                    </button>
                </li>
            )
        })
        setRenderList(invoicesList);
    }, [filteredInvoices]);


    return (
        <div style={main_style}>
            <ul>
            {renderList}
            </ul>

        </div>
    )
}
export default FilteredInvoicesListComponent