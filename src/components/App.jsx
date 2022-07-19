import React, { useEffect } from 'react';
import useQuote from '../quote';
import Loader from './Loader';
import './App.css';

function tweetQuote(quote) {
  const quoteText = quote.quoteText;
  const author = quote.quoteAuthor;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText} - ${author}`;
  window.open(twitterUrl, '_blank');
}

function App() {
  console.log('app');
  const [ quote, newQuote ] = useQuote();
  
  useEffect(() => newQuote(), []);

  return quote.quoteText ? (
    <div className="quote-container">
      <div className="quote-text">
        <i className="fas fa-quote-left">
          <span id="quote" className={quote.quoteText.length > 120 ? 'long-quote' : ''}>{quote.quoteText}</span>
        </i>
      </div>
      <div className="quote-author">
        <span>{quote.quoteAuthor}</span>
      </div>
      <div className="button-container">
        <button className="twitter-button" title='Tweet This!' onClick={() => tweetQuote(quote)}>
        <i className="fab fa-twitter"></i>
        </button>
        <button onClick={newQuote}>New Quote</button>
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default App;







