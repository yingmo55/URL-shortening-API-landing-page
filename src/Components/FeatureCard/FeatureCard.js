import React from 'react';
import './FeatureCard.css';

export default function FeatureCard(props) {
    const { src, title, text } = props;
return (
    <div className='feature-card'>
        <img src={src} alt={title} />
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
)
}