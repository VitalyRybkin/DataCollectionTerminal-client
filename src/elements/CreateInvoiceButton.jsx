import {createInvoice} from "../middleware_handlers/server_request.js";
import {renderMainContent} from "../reducers/MenuReducer.jsx";
import {filteredInvoicesListIn, filteredInvoicesListOut} from "../reducers/actions.jsx";

function CreateInvoiceButton(props) {

    const style = {
        width: '105px',
        height: '40px',
        borderRadius: '40px',
        padding: '5px 10px',
        background: 'var(--colors-primary-400-main)',
        color: '#FFFFFF',
    }

    async function handleCreateInvoice() {
        const getInvoices = await createInvoice(props);
        // filteredInvoices.length = 0;
        // setFilteredInvoices(getInvoices);
        // dispatch(renderMainContent(filterType === 'out' ? filteredInvoicesListOut : filteredInvoicesListIn))
    }

    return (
        <div>
            <button onClick={handleCreateInvoice} className="nextButton fonts_roboto_14_500" style={style}>
                Создать
            </button>
        </div>
    )
}

export default CreateInvoiceButton;