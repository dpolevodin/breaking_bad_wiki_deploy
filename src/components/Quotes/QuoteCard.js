const QuoteCard = ({
    quote,
    author,
    last_words = false
}) => {
    return (
        <blockquote>
            {last_words && (<p>Last words: </p>)}
            <p className="quote-card__title">{quote}</p>
            {!last_words && (
                <footer>
                    — 
                    <cite>{author}</cite>
                </footer>
            )}
           
        </blockquote>
    )
}

export default QuoteCard