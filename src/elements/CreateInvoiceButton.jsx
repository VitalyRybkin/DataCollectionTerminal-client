import {createInvoice} from "../middleware_handlers/server_request.js";
import {renderMainContent} from "../reducers/MenuReducer.jsx";
import {newInvoiceContent} from "../reducers/actions.jsx";
import {useDispatch} from "react-redux";
import {useContext} from "react";
import {NewInvoiceContext} from "../components/DocumentContent.jsx";

function CreateInvoiceButton() {

    const style = {
        width: '105px',
        height: '40px',
        borderRadius: '40px',
        padding: '5px 10px',
        background: 'var(--colors-primary-400-main)',
        color: '#FFFFFF',
    }

    const dispatch = useDispatch();
    const [newInvoiceData, setNewInvoiceData] = useContext(NewInvoiceContext);

    async function handleCreateInvoice() {
        const getInvoices = await createInvoice(newInvoiceData);

        if (getInvoices.message === 'SUCCESS') {
            dispatch(renderMainContent(newInvoiceContent));
        }
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