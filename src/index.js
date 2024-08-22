import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function RandomQuoteMachine() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div id="quote-box">
      <p id="text">{quote}</p>
      <p id="author">
        <br />
        {author}
      </p>

      <button
        id="new-quote"
        onClick={fetchQuote}
        type="button"
      >
        New Quote
      </button>

      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}
        target="_blank"
        rel="noopener noreferrer">
        Tweet Quote
      </a>

    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('quote-box'));
root.render(<RandomQuoteMachine />); 

