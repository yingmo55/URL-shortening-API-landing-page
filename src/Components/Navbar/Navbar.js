import React from "react";
import './Navbar.css';
import logo from '../../images/logo.svg';

export default function Navbar() {
    return (
        <>
        <nav className="mobile-nav">
            <img src={logo} alt='shortly logo' />
            <button className="mobile-burger">
                <span className="button-burger"></span>
                <span className="button-burger"></span>
                <span className="button-burger"></span>
            </button>
        </nav>
        </>
    )
}