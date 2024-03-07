import './quote.css'
import { useEffect, useState } from 'react'

function Quote() {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content)
        setAuthor(data.author)
      })
  }, [])

  return (
    <div className="container">
      <div className="quote-container">
        <h1>{quote}</h1>
        <h3>{`- ` + author}</h3>
      </div>
    </div>
  )
}

export default Quote
