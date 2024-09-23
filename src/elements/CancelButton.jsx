
function CancelButton() {

    const style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    return (
        <div>
            <button className="cancelButton" style={style}>
                ОТМЕНА
            </button>
        </div>
    )
}

export default CancelButton;