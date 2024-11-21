import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Home from './pages/Home';
import Login from './pages/Login';
import ReportForm from './components/ReportForm';
import MapView from './components/MapView';
import Notifications from './components/Notifications';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/" />;
  };

  return (
    <Router>
      <Navbar bg="light" expand="lg" className="shadow">
        <Container>
          <Navbar.Brand href="/home" className="d-flex align-items-center">
            {/* Logo */}
            <img
              src="/logo.png"
              alt="Residencial Los Robles"
              style={{ height: '40px', marginRight: '10px', }}
            
            />
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Residencial Los Robles</span>
          </Navbar.Brand>
          
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={<Login setIsAuthenticated={setIsAuthenticated} setUserName={setUserName} />}
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home userName={userName} setIsAuthenticated={setIsAuthenticated} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/report"
          element={
            <ProtectedRoute>
              <ReportForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/map"
          element={
            <ProtectedRoute>
              <MapView />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <Notifications />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
