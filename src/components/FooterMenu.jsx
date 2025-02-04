
import {rollBack, renderMainMenu, renderScreen} from "../reducers/MenuReducer.jsx";
import {useDispatch} from "react-redux";
import {scanScreen} from "../reducers/actions.jsx";

function ScannerIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M21.5 3V6.5H20.5V3C20.4995 2.60234 20.3413 2.22111 20.0601 1.93992C19.7789 1.65873 19.3977 1.50053 19 1.5H15.5V0.5H19C19.6628 0.500794 20.2982 0.764441 20.7669 1.23311C21.2356 1.70178 21.4992 2.3372 21.5 3ZM3 20.5C2.60234 20.4995 2.22111 20.3413 1.93992 20.0601C1.65873 19.7789 1.50053 19.3977 1.5 19V15.5H0.5V19C0.500794 19.6628 0.764441 20.2982 1.23311 20.7669C1.70178 21.2356 2.3372 21.4992 3 21.5H6.5V20.5H3ZM20.5 19C20.4995 19.3977 20.3413 19.7789 20.0601 20.0601C19.7789 20.3413 19.3977 20.4995 19 20.5H15.5V21.5H19C19.6628 21.4992 20.2982 21.2356 20.7669 20.7669C21.2356 20.2982 21.4992 19.6628 21.5 19V15.5H20.5V19ZM1.5 3C1.50053 2.60234 1.65873 2.22111 1.93992 1.93992C2.22111 1.65873 2.60234 1.50053 3 1.5H6.5V0.5H3C2.3372 0.500794 1.70178 0.764441 1.23311 1.23311C0.764441 1.70178 0.500794 2.3372 0.5 3V6.5H1.5V3ZM8.5 17.5V4.5H7.5V17.5H8.5ZM4.5 4.5V17.5H6.5V4.5H4.5ZM12.5 17.5V4.5H10.5V17.5H12.5ZM15.5 4.5V17.5H17.5V4.5H15.5ZM13.5 4.5V17.5H14.5V4.5H13.5Z"
                fill="black"/>
        </svg>
    )
}

function MenuIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M0.333496 2V0H18.3335V2H0.333496ZM0.333496 7H18.3335V5H0.333496V7ZM0.333496 12H18.3335V10H0.333496V12Z"
                  fill="black"/>
        </svg>
    )
}

function BackArrowIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.667 11H8.49699L14.087 5.41L12.667 4L4.66699 12L12.667 20L14.077 18.59L8.49699 13H20.667V11Z"
                  fill="black"/>
        </svg>
    )
}

function FooterMenu() {

    const dispatch = useDispatch();

    const styles = {
        display: "flex",
        justifyContent: "space-between",
        background: "var(--colors-background-gray-100-main)",
        boxShadow: "rgba(0, 0, 64, 25%) 0px 2px 10px 0px",
    }

    const btn_style = {
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "5px",
        padding: "7px"
    }

    return (
        <div className="footer" style={styles}>
            <button onClick={() => dispatch(renderMainMenu())
            } className="fonts_roboto_12_500" style={btn_style}>
                <MenuIcon/>
                Меню
            </button>
            <button onClick={() => dispatch(renderScreen(scanScreen))} className="fonts_roboto_12_500" style={btn_style}>
                <ScannerIcon/>
                Сканер
            </button>
            <button onClick={() => dispatch(rollBack())} className="fonts_roboto_12_500" style={btn_style}>
                <BackArrowIcon/>
                Назад
            </button>
        </div>
    )
}

export default FooterMenu;