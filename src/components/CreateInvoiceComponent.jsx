import {useSelector} from "react-redux";

function CreateInvoiceComponent() {

    const displayNewInvoice  = useSelector((state) => state.mainWindowSlice.windowContent.newInvoice);

    return (
        <div className="new_invoice_component" style={{display: `${displayNewInvoice}`, width: "100%"}}>

        </div>
    )
}
export default CreateInvoiceComponent;