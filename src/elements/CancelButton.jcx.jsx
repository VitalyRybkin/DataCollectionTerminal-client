import {useState} from "react";

function CancelButton() {

    const style = {
        width: 'Fill (105px)',
        height: 'Fill (40px)',
        color: 'var(--colors-primary-400-main)',
        border: "1px solid #79747E",
        borderRadius: '40px',
    }

    return (
        <div>
            <button className="nextButton" style={style}>

            </button>
        </div>
    )
}

export default CancelButton;