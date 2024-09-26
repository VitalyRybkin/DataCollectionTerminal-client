import {rollBack} from "../reducers/MenuReducer.jsx";
import {useDispatch} from "react-redux";

function SearchIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_297_1774)">
                <path
                    d="M7.5 15.5V10.5H9V12.25H15V13.75H9V15.5H7.5ZM1 13.75V12.25H6V13.75H1ZM4 11V9.25H1V7.75H4V6H5.5V11H4ZM7 9.25V7.75H15V9.25H7ZM10 6.5V1.5H11.5V3.25H15V4.75H11.5V6.5H10ZM1 4.75V3.25H9V4.75H1Z"
                    fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0_297_1774">
                    <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
            </defs>
        </svg>
    )
}

function SearchButton() {


    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px',
        width: "73px",
        height: "21px",
        borderRadius: "21px",
        color: '#FFFFFF',
        backgroundColor: 'var(--colors-primary-400-main)',
    }

    const dispatch = useDispatch();
    const handleClick = () => dispatch(rollBack());

    return (
        <div>
            <button onClick={handleClick} className="fonts_roboto_10_500" style={style}>
                <SearchIcon />
                Поиск
            </button>
        </div>
    )
}

export default SearchButton