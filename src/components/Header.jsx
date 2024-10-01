import React from 'react';
import logo from '../assets/logo.svg';
import './Header.css' 
import cardlogo from '../assets/cardLogo.png'
const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <img src={logo} alt="Logo" className="logo" />
                <p>Pop Rock Crystal</p>
            </div>
            <div className="header-center">
                <nav>
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                    </ul>
                </nav>
            </div>
            <div className="header-right">
                <img src={cardlogo} alt="" />
            </div>
        </header>
    );
}

export default Header;