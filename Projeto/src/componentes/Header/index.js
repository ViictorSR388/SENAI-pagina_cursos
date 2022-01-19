import React from 'react';
import './style.css';
import SenaiLogo from './logo-senai.png';

function Header() {
    return (
        <header>
        <img src={SenaiLogo} className="Logo-Senai" alt="logo" />
        <h1>SUÍÇO-BRASILEIRA PAULO ERNESTO TOLLE</h1>
        </header>
    );
}

export default Header;