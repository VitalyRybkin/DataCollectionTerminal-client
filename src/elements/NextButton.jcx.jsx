import {useState} from "react";

function NextButton() {

    const [isButtonDisabled, setButtonDisabled] = useState(true);

    const style = {
        width: 'Fill (105px)',
        height: 'Fill (40px)',
        borderRadius: '40px',
    }

    const disabledStyle = {
        background: 'var(--colors-background-gray-500-disabled)',
        color: '--colors-text-gray-400',
    }

    const enabledStyle = {
        background: 'var(--colors-primary-400-main)',
        color: '#FFFFFF',
    }

    return (
        <div>
            <button className="nextButton" style={isButtonDisabled ? {...disabledStyle, ...style} : {...enabledStyle, ...style}}>
                ПЕРЕЙТИ
            </button>
        </div>
    )
}

export default NextButton;