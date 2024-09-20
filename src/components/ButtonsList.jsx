function ButtonsList(props) {
    const buttonItems = props.buttonsList.map(button => <li key={crypto.randomUUID()}>{button}</li>)

    return (
        <ul>
            {buttonItems}
        </ul>
    )
}
export default ButtonsList;