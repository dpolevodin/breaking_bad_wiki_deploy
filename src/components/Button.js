const Button = ({text, onClick}) => {
    return <button className="main-page__button" onClick={onClick}>{text}</button>
}

export default Button