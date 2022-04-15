import React from 'react';
import './Button.css';

export default function Button(props) {
    const text = props.text;
    const onClick = props.onClick;
    const children = props.children;
    const rounded = props.rounded;
    return  (
    <button className="button" onClick={onClick} style={rounded}>
        {text || children}
    </button>
        )
}