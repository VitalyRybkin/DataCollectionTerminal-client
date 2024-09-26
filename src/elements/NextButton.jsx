
function NextButton(props) {

    const style = {
        width: '105px',
        height: '40px',
        borderRadius: '40px',
        padding: '5px 10px',
    }

    const disabledStyle = {
        background: 'var(--colors-background-gray-500-disabled)',
        color: 'var(--colors-text-gray-400)',
    }

    const enabledStyle = {
        background: 'var(--colors-primary-400-main)',
        color: '#FFFFFF',
    }

    return (
        <div>
            <button className="nextButton fonts_roboto_14_500" style={props.btnDisabled ? {...disabledStyle, ...style} : {...enabledStyle, ...style}} disabled={props.btnDisabled}>
                Перейти
            </button>
        </div>
    )
}

export default NextButton;