import React from 'react';
import logo from '../../images/friends-logo.png';
import logo1 from '../../images/friends1-logo.png';
import logo2 from '../../images/friend2-logo.png';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <div>
            <img src={logo} alt=""/>
            <img src={logo2} alt=""/>
            <img src={logo1} alt=""/>
            </div>
            <nav>
                <a className="home" href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact us</a>
            </nav>
        </div>
    );
};

export default Header;