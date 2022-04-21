import React from 'react';
import './Footer.css';
import SocialIcon from '../SocialIcon/SocialIcon';

// icons 
import { faFacebookSquare, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

    const social = [
        {
            src: faFacebookSquare,
            href: 'https://www.facebook.com/',
        },
        {
            src: faTwitter,
            href: 'https://www.twitter.com/',
        },
        {
            src: faPinterest,
            href: 'https://www.pinterest.com/',
        },
        {
            src: faInstagram,
            href: 'https://www.instagram.com/',
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
                <SocialIcon src={element.src} href={element.href} key={index} />  )
            }
    </div>
</footer>)
}