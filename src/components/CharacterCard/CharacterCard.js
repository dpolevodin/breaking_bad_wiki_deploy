function CharacterCard({nickname, name, img, status}) {
    const statusClassMapping = {
        'Alive': 'character-card__text character-card-random__item_green',
        'Deceased': 'character-card__text character-card-random__item_red',
        'Presumed dead': 'character-card__text character-card-random__item_orange',
    }

    return (
        <div className="character-card">
            <h1 className="character-card__title">{nickname}</h1>
            <img className="character-card__img" src={img} alt={nickname} />
            <span className="character-card__text"><strong>Real name:</strong></span>
            <span className="character-card__text">{name}</span>
            <span className="character-card__text">
                <strong>Status:</strong>
                <span className={statusClassMapping[status]}>{status}</span> 
            </span>
        </div>
    )
}

export default CharacterCard