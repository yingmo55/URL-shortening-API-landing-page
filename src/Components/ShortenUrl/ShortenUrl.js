import React from "react";
import './ShortenUrl.css';

 const ShortenUrl = () => (
    <div className='shortenUrl'>
        <form className='shortenUrlForm'>
            <input type="text" placeholder="Shorten a link here..." />
            <button type="submit">Shorten It!</button>
        </form>
        <div className="shortenedUrls"></div>
    </div>
)
export default ShortenUrl;