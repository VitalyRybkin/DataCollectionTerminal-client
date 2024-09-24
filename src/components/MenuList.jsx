function MenuList({buttonsList}) {

    const buttonItems = buttonsList.map(button => <li key={crypto.randomUUID()}>{button}</li>)

    return (
        <ul>
            {buttonItems}
        </ul>
    )
}
export default MenuList;