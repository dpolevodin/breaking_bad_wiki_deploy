const RandomCharacterCard = ({
    name,
    nickname,
    birthday,
    img,
    status,
    portrayed,
    occupation
}) => {

    const statusClassMapping = {
        'Alive': 'character-card-random__item character-card-random__item_green',
        'Deceased': 'character-card-random__item character-card-random__item_red',
        'Presumed dead': 'character-card-random__item character-card-random__item_orange',
    }

    return (
        <div className="character-card__wrapper h">
            <div className="front">
                <h1 className="character-card-random__title">{nickname}</h1>
                <img className="character-card__img" src={img} alt={nickname} />
            </div>
            <div className="back">
                <ul className="character-card-random__list">
                    <li className="character-card-random__item">
                        <b>Real name:</b>
                        <span className="character-card-random__text">
                            {name}
                        </span>
                    </li>
                    <li className="character-card-random__item">
                        <b>Birthday:</b>
                        <span className="character-card-random__text">
                            {birthday || 'unknown'}
                        </span>
                    </li>
                    <li className="character-card-random__item">
                        <b>Occupation:</b> 
                        <span className="character-card-random__text">
                            {occupation[0]}
                        </span>
                    </li>
                    <li className={ statusClassMapping[status] || "character-card-random__item"}>
                        <b>Status:</b>
                        <span className="character-card-random__text">
                            {status}
                        </span>
                    </li>
                    <li className="character-card-random__item">
                        <b>Portrayed:</b>
                        <span className="character-card-random__text">
                            {portrayed}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default RandomCharacterCard









