import CaseButton from "../elements/CaseButton.jsx";
import SettingsButton from "../elements/SettingsButton.jsx";
import InfoButton from "../elements/InfoButton.jsx";

function ButtonsList(props) {

    // const buttons = [
    //     <CaseButton/>,
    //     <SettingsButton/>,
    //     <InfoButton/>,
    // ]

    const buttonItems = props.buttonsList.map(button => <li>{button}</li>)

    return (
        <ul>
            {buttonItems}
        </ul>
    )
}
export default ButtonsList;