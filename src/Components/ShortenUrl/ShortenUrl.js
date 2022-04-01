import React from "react";
import './ShortenUrl.css';

 const ShortenUrl = () => (
    <div>
        <form>
            <input type="text" placeholder="Shorten a link here..." />
            <button type="submit">Shorten It!</button>
        </form>
    </div>
)
export default ShortenUrl;