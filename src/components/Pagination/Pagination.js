const Pagination = ({
    onClick,
    buttonCounts
    }) => {
    const buttonElement = buttonCounts.map((item) => {
        return (
            <li className="pagination__item" key={item}>
                <button className="pagination__button" onClick={onClick} key={item}>{item}</button>
            </li>
        )
    })
    return (
        <ul className="pagination">
            {buttonElement}
        </ul>
    )
}

export default Pagination