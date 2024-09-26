function CreateIcon() {
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
        gap: '5px',
        width: "73px",
        height: "21px",
        borderRadius: "21px",
        color: '#FFFFFF',
        backgroundColor: 'var(--colors-primary-400-main)',
    }

    return (
        <div>
            <button className="fonts_roboto_10_500" style={style}>
                <CreateIcon />
                Создать
            </button>
        </div>
    )
}

export default CreateButton