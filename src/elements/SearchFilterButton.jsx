import {searchingInvoices} from "../middleware_handlers/server_request.js";
import {useContext} from "react";
import {FilteredInvoicesContext} from "../components/DocumentContent.jsx";

function SearchButton(props) {

    const {setFilteredInvoices} = useContext(FilteredInvoicesContext);

    const style = {
        width: '105px',
        height: '40px',
        borderRadius: '40px',
        padding: '5px 10px',
        background: 'var(--colors-primary-400-main)',
        color: '#FFFFFF',
    }

    async function handleSearchInvoices() {
        const getInvoices = await searchingInvoices(
            props.invoiceNumber,
            props.invoiceSender,
            props.invoiceReceiver,
            props.startDatePeriod,
            props.endDatePeriod,
        );
        setFilteredInvoices(getInvoices);
    }

    return (
        <div>
            <input onClick={handleSearchInvoices} type="submit" value="Поиск" className="nextButton fonts_roboto_14_500" style={style}>
            </input>
        </div>
    )
}

export default SearchButton;