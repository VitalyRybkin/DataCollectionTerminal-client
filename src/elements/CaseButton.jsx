// import {useDispatch} from "react-redux";
// import {menuSwitch} from "../reducers/MenuReducer.jsx";

function CaseIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20.0905 5.81006H2.91049C1.85562 5.81006 1.00049 6.66519 1.00049 7.72006V19.1701C1.00049 20.2249 1.85562 21.0801 2.91049 21.0801H20.0905C21.1454 21.0801 22.0005 20.2249 22.0005 19.1701V7.72006C22.0005 6.66519 21.1454 5.81006 20.0905 5.81006Z"
                stroke="#333333" strokeMiterlimit="10" strokeLinecap="square"/>
            <path
                d="M13.4104 12.54H18.1804C18.6858 12.5414 19.1865 12.4422 19.6532 12.2482C20.1199 12.0542 20.5433 11.7693 20.8988 11.41C21.2543 11.0508 21.5348 10.6244 21.7239 10.1557C21.9131 9.68703 22.0071 9.18539 22.0004 8.68002V7.68002C22.0004 7.17346 21.7992 6.68764 21.441 6.32945C21.0828 5.97125 20.597 5.77002 20.0904 5.77002H2.91042C2.65619 5.76996 2.40451 5.82066 2.17013 5.91914C1.93576 6.01762 1.7234 6.16189 1.5455 6.34351C1.36761 6.52513 1.22777 6.74044 1.13417 6.9768C1.04057 7.21317 0.995095 7.46585 1.00042 7.72002V8.72002C0.9991 9.22204 1.09701 9.71937 1.28851 10.1834C1.48002 10.6475 1.76135 11.0691 2.11633 11.4241C2.47131 11.7791 2.89295 12.0604 3.35701 12.2519C3.82107 12.4434 4.3184 12.5413 4.82042 12.54H13.4104Z"
                stroke="#333333" strokeMiterlimit="10"/>
            <path d="M11.5005 11.54V13.45" stroke="#333333" strokeMiterlimit="10" strokeLinecap="square"/>
            <path d="M15.3207 5.81H7.68066L8.64066 2H14.3607L15.3207 5.81Z" stroke="#333333" strokeMiterlimit="10"
                  strokeLinecap="square"/>
        </svg>
    )
}

function CaseButton() {

    // const dispatch = useDispatch();

    function handleClick() {
        // dispatch(menuSwitch("settings"))
    }

    return (
        <div>
            <button onClick={handleClick} className="container fonts_roboto_14_400 main_menu_btn">
                <CaseIcon/>
                Задачи
            </button>
        </div>
    )
}

export default CaseButton;