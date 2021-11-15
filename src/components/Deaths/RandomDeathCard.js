import QuoteCard from '../Quotes/QuoteCard'

const RandomDeathCard = ({
    death,
    cause,
    responsible,
    last_words,
    img,
    season,
    episode
}) => {

    return (
        <div className="death-card__wrapper">
            <div className="death-card__image-wrapper">
                <img className="death-card__img" src={img} alt={death} />
                <div className="death-card__info">
                    <ul className="death-card__list">
                        <li className="death-card__item">
                            <span className="death-card__item-text">Name:</span>
                            {death}
                        </li>
                        <li className="death-card__item">
                            <span className="death-card__item-text">cause:</span> 
                            {cause}
                        </li>
                        <li className="death-card__item">
                            <span className="death-card__item-text">responsible:</span> 
                            {responsible}
                        </li>
                        <li className="death-card__item">
                            <span className="death-card__item-text">When?</span> 
                            season: {season}, episode:{episode}
                        </li>
                    </ul>
                </div>
            </div>
            <QuoteCard quote={last_words} author={death} last_words ={true} />
        </div>
    )
}

export default RandomDeathCard









