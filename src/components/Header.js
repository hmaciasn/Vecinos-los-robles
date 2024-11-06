import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';
import './Header.css';

function Header() {
    const navigate = useNavigate();

    return (
        <header className="header">
            <div className="logo" onClick={() => navigate('/')}>
                <img src={logo} alt="Logo de la Colonia" />
            </div>
            <Link to="/" className="home-button">Inicio</Link>
        </header>
    );
}

export default Header;
