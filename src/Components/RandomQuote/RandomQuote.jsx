import React, { useState } from 'react'
import './RandomQuote.css'
import twitter_icon from '../Assets/twitter.png'
import reload_icon from '../Assets/reload.png'
const RandomQuote = () => {

    let quotes = [];

    async function loadQuotes() {
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }

    const [quote, setQuote] = useState({
        text: "Difficulties increase the nearer we get to the goal.",
        author: "Johann Wolfgang von Goethe",
    });

    const random = () => {
        const select = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(select);
    }

    loadQuotes();
    return (
        <div className='container'>
            <div className="quote">{quote.text}</div>
            <div>
                <div className="line"></div>
                <div className="bottom">
                    <div className="author">{quote.author.split(',')[0]}</div>
                    <div className="icons">
                        <img src={reload_icon} onClick={() => { random() }}
                            alt="reload-icon" />
                        <img src={twitter_icon} alt="twitter-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RandomQuote