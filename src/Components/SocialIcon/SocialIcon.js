import React from 'react';
import './SocialIcon.css';

export default function SocialIcon(props) {
    const {href, src, alt} = props;

    return (
        <a className='socialIcon'href={href} >
            <img src={src}  alt={alt} />
        </a>
    )
}