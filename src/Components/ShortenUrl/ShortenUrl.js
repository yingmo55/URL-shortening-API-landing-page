import React from "react";
import './ShortenUrl.css';

 const ShortenUrl = ({style}) => (
    <div style={style} className='shortenUrl'>
        <form>
            <input type="text" placeholder="Shorten a link here..." />
            <button type="submit">Shorten It!</button>
        </form>
    </div>
)
export default ShortenUrl;