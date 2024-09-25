import MenuList from "./MenuList.jsx";
import {useSelector} from "react-redux";
import DocumentContent from "./DocumentContent.jsx";

function Main() {

    const style = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        width: '100%',
    }

    const buttonsList  = useSelector((state) => state.mainWindowSlice.windowContent.mainContent);

    return (
        <div className="main" style={style}>
            <MenuList buttonsList={buttonsList} />
            <DocumentContent />
        </div>
    )
}

export default Main;