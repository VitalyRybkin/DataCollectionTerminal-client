import ButtonsList from "./ButtonsList.jsx";
import {useDispatch, useSelector} from "react-redux";

import {menuSwitch} from "../reducers/MenuReducer.jsx";
import CaseButton from "../elements/CaseButton.jsx";
import SettingsButton from "../elements/SettingsButton.jsx";
import InfoButton from "../elements/InfoButton.jsx";

import {menuDataStorage} from "../reducers/MenuReducer.jsx";
import {mainMenu} from "../reducers/actions.jsx";


function Main() {

    const style = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        width: '100%',
    }

    const btn_style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '10px',
    }

    // const dispatch = useDispatch();

    // window.addEventListener("load", async () => {
    //     const menuList = [
    //         <CaseButton/>,
    //         <SettingsButton/>,
    //         <InfoButton/>
    //     ];
    //
    //     menuDataStorage.menuSetListItemsData = menuList;
    //     dispatch(menuSwitch(menuList))
    // });

    const buttonsList = useSelector((state) => state.menuSLice.toggleMenuSwitch);

    return (
        <div className="main" style={style}>
            <ButtonsList buttonsList={buttonsList} />
        </div>
    )
}

export default Main;