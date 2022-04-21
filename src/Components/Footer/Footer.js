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
        <li><a href="/#">Link Shortening</a></li>
        <li><a href="/#">Branded Links</a></li>
        <li><a href="/#">Analytics</a></li>
    </ul>
    <p>Resources</p>
    <ul>
        <li><a href="/#">blog</a></li>
        <li><a href="/#">Developers</a></li>
        <li><a href="/#">Support</a></li>
    </ul>
    <p>Company</p>
    <ul>
        <li><a href="/#">About</a></li>
        <li><a href="/#">Our Team</a></li>
        <li><a href="/#">Careers</a></li>
        <li><a href="/#">Contact</a></li>
    </ul>
    <div className='footerSocialIcons'>
         {
            social.map((element, index) => 
                <SocialIcon src={element.src} href={element.href} key={index} />  )
            }
    </div>
</footer>)
}