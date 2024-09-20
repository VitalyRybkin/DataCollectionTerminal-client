
function Header() {

    const style = {
        display: 'flex',
        alignItems: 'center',
        height: '33px',
        width: '100%',
        marginBottom: '12px',
        backgroundColor: 'var(--colors-background-blue-300)',
        color: 'var(--colors-text-black-300)',
        borderBottom: '1px solid var(--colors-outline-gray-900-border)',
    }

    return (
        <header className={'fonts_roboto_14_500 container'} style={style}>
            <h1 className='header_title'>Меню</h1>
        </header>
    );
}

export default Header;