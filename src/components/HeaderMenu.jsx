import SearchButton from "../elements/SearchButton.jsx";
import CreateButton from "../elements/CreateButton.jsx";

function HeaderMenu(props) {
    const styleBlock = {
        display: "flex",
        justifyContent: "flex-end",
    };

    const styleMenu = {
        display: "flex",
        gap: "5px",
    };

    const elemList = props.menu.map(item => <li key={crypto.randomUUID()} style={{flexGrow: "1"}}>{item}</li>)

    return (
        <div style={styleBlock}>
            <ul style={styleMenu}>{elemList}</ul>
        </div>
    )
}
export default HeaderMenu;