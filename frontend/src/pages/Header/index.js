import React from 'react';
import './styles.css';

import Logo from '../../assets/logo.png';

export default function Header() {
    return (
        <div className="header-container">
            <ul className="header-links">
            <img src={Logo} />

                <li><a href="#">Home</a></li>
                <li><a href="#">Games</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </div>
    )
}