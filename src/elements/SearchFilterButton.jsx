
function SearchButton() {

    const style = {
        width: '105px',
        height: '40px',
        borderRadius: '40px',
        padding: '5px 10px',
        background: 'var(--colors-primary-400-main)',
        color: '#FFFFFF',
    }

    return (
        <div>
            <input  type="submit" value="Поиск" className="nextButton fonts_roboto_14_500" style={style}>
            </input>
        </div>
    )
}

export default SearchButton;