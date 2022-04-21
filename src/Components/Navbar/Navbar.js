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

    const signUpBtnStyle = {
        borderRadius: 25,
        width: "80%",
    }

    return (
        <>
        <div className="mobile-nav">
            <img src={logo} alt='shortly logo' className='website-logo' />
            <button className="mobile-burger" onClick={toggleMobileNav} >
                <span className="button-burger"></span>
                <span className="button-burger"></span>
                <span className="button-burger"></span>
            </button>
            <nav className={ !showMobileNav ? 'nav-menu-hidden' : 'nav-menu' }>
                <ul>
                    <li><a href="/#">Features</a></li>
                    <li><a href="/#">Pricing</a></li>
                    <li><a href="/#">Resources</a></li>
                </ul>
                <hr />
                <div className='authentication'>
                    <p><a href="/#">Login</a></p>
                    <Button styles={signUpBtnStyle}>Sign up</Button>
                </div>
            </nav>
        </div>
        </>
    )
}