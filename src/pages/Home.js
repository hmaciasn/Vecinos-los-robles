import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = ({ userName, setIsAuthenticated }) => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">¡Bienvenid@, {userName}!</h2>
      <p className="text-center">Selecciona una opción del menú para comenzar.</p>
      <Row className="text-center">
        <Col md={4} className="mb-3">
          <Link to="/report">
            <Button variant="primary" className="w-100">Reportar Problema</Button>
          </Link>
        </Col>
        <Col md={4} className="mb-3">
          <Link to="/map">
            <Button variant="secondary" className="w-100">Ver Mapa</Button>
          </Link>
        </Col>
        <Col md={4} className="mb-3">
          <Link to="/notifications">
            <Button variant="info" className="w-100">Configurar Notificaciones</Button>
          </Link>
        </Col>
      </Row>
      <div className="text-center mt-4">
        <Button variant="danger" onClick={() => setIsAuthenticated(false)}>Cerrar Sesión</Button>
      </div>
    </Container>
  );
};

export default Home;
