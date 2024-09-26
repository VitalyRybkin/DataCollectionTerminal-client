import {renderScreen} from "../reducers/MenuReducer.jsx";
import {filterScreenIn} from "../reducers/actions.jsx";
import {useDispatch} from "react-redux";

function InPlantInvoiceINButton() {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(renderScreen(filterScreenIn))} className="container fonts_roboto_14_400 main_menu_btn">
                Внутризаводские накладные (Приход)
            </button>
        </div>
    )
}

export default InPlantInvoiceINButton;