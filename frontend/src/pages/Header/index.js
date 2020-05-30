import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import {slide as Menu } from 'react-burger-menu';

import './styles.css';

import Logo from '../../assets/logo.png';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' });

    return (
        <div className="header-container">
            {isDesktopOrLaptop ? (
                <ul className="header-links">
                    <img src={Logo} />
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About</a></li>
                </ul>) :
                <ul className="header-links-mobile">
                    <img src={Logo} />
                    <Menu right>
                        <a className="menu-item" href="/">
                            Home
                        </a>

                        <a className="menu-item" href="/burgers">
                            Burgers
                        </a>
                    </Menu>
                </ul>
            }
        </div>
    )
}