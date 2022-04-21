import React from 'react';
import './Button.css';

export default function Button(props) {
    const onClick = props.onClick;
    const children = props.children;
    const styles = props.styles;
    
    const style = {
        border: 'none',
        padding: '10px 20px',
        borderRadius: 5,
        ...styles,
    }

    return  (
    <button className="button" onClick={onClick} style={style}>
        {children}
    </button>
        )
}