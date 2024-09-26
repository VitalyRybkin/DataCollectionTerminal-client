import {searchingInvoices} from "../middleware_handlers/server_request.js";
import {useContext} from "react";
import {FilteredInvoicesContext} from "../components/DocumentContent.jsx";
import {renderMainContent} from "../reducers/MenuReducer.jsx";
import {filteredInvoicesList} from "../reducers/actions.jsx";
import {useDispatch} from "react-redux";

function SearchButton(props) {

    const style = {
        width: '105px',
        height: '40px',
        borderRadius: '40px',
        padding: '5px 10px',
        background: 'var(--colors-primary-400-main)',
        color: '#FFFFFF',
    }

    const [filteredInvoices, setFilteredInvoices] = useContext(FilteredInvoicesContext);
    const dispatch = useDispatch();

    async function handleSearchInvoices() {
        const getInvoices = await searchingInvoices(
            props.invoiceNumber,
            props.invoiceSender,
            props.invoiceReceiver,
            props.startDatePeriod,
            props.endDatePeriod,
        );
        filteredInvoices.length = 0;
        setFilteredInvoices(getInvoices);
        dispatch(renderMainContent(filteredInvoicesList))
    }

    return (
        <div>
            <input onClick={handleSearchInvoices} type="submit" value="Поиск" className="nextButton fonts_roboto_14_500" style={style}>
            </input>
        </div>
    )
}

export default SearchButton;