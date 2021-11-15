const QuotesButton = ({getQuoteByAuthor}) => {
    return <button className="blockquote__button" onClick={getQuoteByAuthor}>Get quotes by author</button>
}

export default QuotesButton