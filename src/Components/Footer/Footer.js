import React from 'react';
import './Footer.css';
import SocialIcon from '../SocialIcon/SocialIcon';

// icons 
import facebookIcon from './../../images/icon-facebook.svg';
import instagramIcon from './../../images/icon-instagram.svg';
import pinterestIcon from './../../images/icon-pinterest.svg';
import twitterIcon from './../../images/icon-twitter.svg';


export default function Footer() {

    const social = [
        {
            src: facebookIcon,
            href: 'https://www.facebook.com/',
            alt: 'Facebook icon'
        },
        {
            src: twitterIcon,
            href: 'https://www.twitter.com/',
            alt: 'Twitter icon'
        },
        {
            src: pinterestIcon,
            href: 'https://www.pinterest.com/',
            alt: 'Pinterest icon'
        },
        {
            src: instagramIcon,
            href: 'https://www.instagram.com/',
            alt: 'Instagram icon'
        }
    ]

return (
<footer>
    <h2>Shortly</h2>
    <p>Features</p>
    <ul>
        <li>Link Shortening</li>
        <li>Branded Links</li>
        <li>Analytics</li>
    </ul>
    <p>Resources</p>
    <ul>
        <li>blog</li>
        <li>Developers</li>
        <li>Support</li>
    </ul>
    <p>Company</p>
    <ul>
        <li>About</li>
        <li>Our Team</li>
        <li>Carrers</li>
        <li>Contact</li>
    </ul>
    <div className='footerSocialIcons'>
         {
            social.map((element, index) => 
                <SocialIcon src={element.src} href={element.href} alt={element.alt} key={index} />  )
            }
    </div>
</footer>)
}