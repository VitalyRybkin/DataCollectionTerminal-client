import {useDispatch} from "react-redux";
import {renderMainContent} from "../reducers/MenuReducer.jsx";
import {manufactureMenu} from "../reducers/actions.jsx";

function ManufactureIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.57812 11.225H9.08438V14.15H5.57812V11.225ZM5.57812 18.0406H9.08438V15.1156H5.57812V18.0406ZM5.57812 21.9219H9.08438V18.9969H5.57812V21.9219ZM10.125 18.0406H13.6219V15.1156H10.1156V18.0406H10.125ZM10.125 21.9219H13.6219V18.9969H10.1156V21.9219H10.125ZM14.6719 18.9969V21.9219H18.1781V18.9969H14.6719ZM23.7469 7.5875L11.8688 2L0 7.60625L0.740625 9.15313L2.25 8.43125V21.9312H3.95625V8.375H19.8V21.95H21.5063V8.45L23.0156 9.15313L23.7469 7.5875Z"
                fill="black"/>
        </svg>
    )
}

function ManufactureButton() {

    const dispatch = useDispatch();

    const handleClick = () => dispatch(renderMainContent(manufactureMenu))

    return (
        <div className='setting_btn'>
            <button onClick={handleClick} className="container fonts_roboto_14_400 main_menu_btn">
                <ManufactureIcon/>
                Учет в производстве
            </button>
        </div>
    )
}

export default ManufactureButton;