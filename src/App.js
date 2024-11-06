import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import ReportIssue from './components/ReportIssue';
import MapView from './components/MapView';
import Home from './components/Home';
import './App.css';

function App() {
    return (
        <Router>
            <div className="container">
                <Header /> {/* Incluir el encabezado en todas las páginas */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/report" element={<ReportIssue />} />
                    <Route path="/map" element={<MapView />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
