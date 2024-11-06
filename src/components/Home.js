import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './Header';

function Home() {
    return (
        <div className='conta'>
           
            <h1>Bienvenido a la Gestión de la Colonia</h1>
            <div className="link-container">
                <Link className="link" to="/login">Iniciar Sesión</Link>
                <Link className="link" to="/report">Reportar Problema</Link>
                <Link className="link" to="/map">Ver Mapa</Link>
            </div>
        </div>
    );
}

export default Home;
