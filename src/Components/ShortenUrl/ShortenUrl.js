import React, { useState } from "react";
import './ShortenUrl.css';

import ShortenedUrl from "../ShortenedUrl/ShortenedUrl";
import Button from "../Button/Button";

 const ShortenUrl = () => {
     const [ url, setUrl ] = useState('');
     const [ shortenURLs, setShortenURLs ] = useState([]);

     const shortLink = async () => {
        const endpoint = 'https://api.shrtco.de/v2/'
        const query = 'shorten?url='

        const result = await fetch(
        `${endpoint}${query}${url}`)
    .then(response => {
        if (response.ok) {
            console.log(response)
            return response.json()
        } throw new Error ('Request Failed!')
    })
    .then(jsonResponse => {
        console.log(jsonResponse)
        const shortenUrl = jsonResponse.result['full_short_link']
        return shortenUrl
    })

        console.log(result)
        setShortenURLs(prev => [...prev, {original: url, shorten: result }])
        setUrl('')
     }

     const setInput = e => {
         e.preventDefault()
         setUrl(e.target.value)
     }

    return (
    <div className='shortenUrl'>
        <div className='shortenUrlForm'>
            <input type="text" placeholder="Shorten a link here..." onChange={setInput} value={url} />
            <Button onClick={shortLink}>
                Shorten It!
            </Button>
        </div>
        <div className="shortenedUrls">
            <div className='urlResults'>
                {
                    shortenURLs.length > 0 &&
                        shortenURLs.map((element, index)=>
                        <ShortenedUrl originalUrl={element.original} shortenUrl={element.shorten} key={index} />
                        )
                }
            </div>
        </div>
    </div>
    )
}

export default ShortenUrl;