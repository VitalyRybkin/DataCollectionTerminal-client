import {useSelector} from "react-redux";


function Header() {

    const style = {
        display: 'flex',
        alignItems: 'center',
        height: '33px',
        width: '100%',
        backgroundColor: 'var(--colors-background-blue-300)',
        color: 'var(--colors-text-black-300)',
        borderBottom: '1px solid var(--colors-outline-gray-900-border)',
    }

    const menuStyle = {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        gap: '5px',
    }

    const headerText = useSelector((state) => state.mainWindowSlice.windowContent.headerContent);
    // const mappedHeaderText = headerText.map(item => <li key={crypto.randomUUID()} style={{flexGrow: "1"}}>{item}</li>)
    const mappedHeaderText = [];
    for (let i = 0; i < headerText.length; i++) {
        if (i !== 0) {
            mappedHeaderText.push(<li key={crypto.randomUUID()} style={{flexGrow: "1"}}>{headerText[i]}</li>);
        } else {
            mappedHeaderText.push(<li key={crypto.randomUUID()}>{headerText[i]}</li>);
        }
    }

    return (
        <header className={'fonts_roboto_14_500 container'} style={style}>
            <ul className='header_title' style={menuStyle}>{mappedHeaderText}</ul>
        </header>
    );
}

export default Header;