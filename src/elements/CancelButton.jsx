import {useDispatch} from "react-redux";
import {renderMainContent, rollBack} from "../reducers/MenuReducer.jsx";
import {settingMenu} from "../reducers/actions.jsx";

function CancelButton() {

    const style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '105px',
        height: '40px',
        borderRadius: '40px',
        border: '1px solid var(--colors-outline-gray-900-border)',
        color: 'var(--colors-primary-400-main)',
    }

    const dispatch = useDispatch();
    const handleClick = () => dispatch(rollBack())

    return (
        <div>
            <button  onClick={handleClick} className="fonts_roboto_14_500" style={style}>
                Отмена
            </button>
        </div>
    )
}

export default CancelButton;