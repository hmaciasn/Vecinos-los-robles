import React from 'react';
import { Container, Card } from 'react-bootstrap';
import BackToHomeButton from './BackToHomeButton';

const MapView = () => {
  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ width: '100%', maxWidth: '800px' }} className="shadow">
        <Card.Body>
          <Card.Title className="text-center mb-4">Mapa de Problemas Reportados</Card.Title>
          <div
            id="map-container"
            style={{
              width: '100%',
              height: '400px',
              background: '#e9ecef',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <p>El mapa interactivo aparecerá aquí.</p>
          </div>
          <BackToHomeButton />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MapView;
