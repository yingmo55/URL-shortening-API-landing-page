import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../images/logo.svg';
import Button from "../Button/Button";

export default function Navbar() {

    const [ showMobileNav, setShowMobileNav ] = useState(false);

    const toggleMobileNav = () => {
        console.log('it should work')
        setShowMobileNav(prev => !prev)
    }

    return (
        <>
        <div className="mobile-nav">
            <img src={logo} alt='shortly logo' />
            <button className="mobile-burger" onClick={toggleMobileNav} >
                <span className="button-burger"></span>
                <span className="button-burger"></span>
                <span className="button-burger"></span>
            </button>
            <nav className={ !showMobileNav ? 'nav-menu-hidden' : 'nav-menu' }>
                <ul>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                </ul>
                <hr />
                <div>
                    <p>Login</p>
                    <Button>Sign up</Button>
                </div>
            </nav>
        </div>
        </>
    )
}