import CaseButton from "../elements/CaseButton.jsx";
import SettingsButton from "../elements/SettingsButton.jsx";
import InfoButton from "../elements/InfoButton.jsx";

function ButtonsList() {

    const buttons = [
        <CaseButton/>,
        <SettingsButton/>,
        <InfoButton/>,
    ]

    const buttonItems = buttons.map(button => <li>{button}</li>)

    return (
        <ul>
            {buttonItems}
        </ul>
    )
}
export default ButtonsList;