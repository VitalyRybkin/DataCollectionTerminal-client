import ButtonsList from "./ButtonsList.jsx";
import {useDispatch, useSelector} from "react-redux";
import {renderMainContent, stateStack} from "../reducers/MenuReducer.jsx";
import CaseButton from "../elements/CaseButton.jsx";
import SettingsButton from "../elements/SettingsButton.jsx";
import InfoButton from "../elements/InfoButton.jsx";


function Main() {

    const dispatch = useDispatch();

    const style = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        width: '100%',
    }

    const buttonsList  = useSelector((state) => state.mainWindowSlice.windowContent.mainContent);

    return (
        <div className="main" style={style}>
            <ButtonsList buttonsList={buttonsList}  />
        </div>
    )
}

export default Main;