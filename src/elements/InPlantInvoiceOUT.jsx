import {renderScreen} from "../reducers/MenuReducer.jsx";
import {filterScreenOut} from "../reducers/actions.jsx";
import {useDispatch} from "react-redux";

function InPlantInvoiceOUTButton() {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(renderScreen(filterScreenOut))} className="container fonts_roboto_14_400 main_menu_btn">
                Внутризаводские накладные (Расход)
            </button>
        </div>
    )
}

export default InPlantInvoiceOUTButton;