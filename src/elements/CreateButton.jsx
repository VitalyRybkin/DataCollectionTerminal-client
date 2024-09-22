function CreateIcon(props) {
    return (
        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 7.25H6.75V12.5H5.25V7.25H0V5.75H5.25V0.5H6.75V5.75H12V7.25Z" fill="white"/>
        </svg>
    )
}

function CreateButton() {
    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: "Hug (73px)px",
        height: "Fixed (21px)px",
        borderRadius: "21px",
        color: '#2D609B',
        backgroundColor: 'var(--colors-primary-400-main);',
    }

    return (
        <div>
            <button className="search-button" style={style}>
                <CreateIcon />
                Поиск
            </button>
        </div>
    )
}

export default CreateButton