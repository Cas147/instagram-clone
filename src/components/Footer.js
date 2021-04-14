import React from 'react';
import {Link} from 'react-router-dom'

import './styles/Footer.css'

export default function Footer(){
    return(
        <div className="footer-container">
            <div>
            <Link className="footer-link">About-</Link>
            <Link className="footer-link">Help-</Link>
            <Link className="footer-link">Press-</Link>
            <Link className="footer-link">API-</Link>
            <Link className="footer-link">Jobs-</Link>
            <Link className="footer-link">Privacy-</Link>
            <Link className="footer-link">Terms-</Link>
            <Link className="footer-link">Locations-</Link>
            <Link className="footer-link">Top Accounts-</Link>
            <Link className="footer-link">Hashtags-</Link>
            <Link className="footer-link">Language</Link>
            </div>
            <p className="footer-link">© 2021 INSTAGRAM FROM FACEBOOK</p>
        </div>
    )
}