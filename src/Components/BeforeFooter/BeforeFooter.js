import React from 'react';
import './BeforeFooter.css';
import Button from '../Button/Button';

export default function BeforeFooter() {
    return (
        <div className='beforeFooter'>
            <h2>Boost your links today</h2>
            <Button rounded={{borderRadius: 25}}>Get Started</Button>
        </div>
    )
}