import React, { useState } from 'react';
import { Form, Container, Card } from 'react-bootstrap';
import BackToHomeButton from './BackToHomeButton';

const Notifications = () => {
  const [preferences, setPreferences] = useState({
    announcements: true,
    reports: true,
    events: true,
  });

  const handlePreferenceChange = (e) => {
    const { name, checked } = e.target;
    setPreferences({ ...preferences, [name]: checked });
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ width: '100%', maxWidth: '600px' }} className="shadow">
        <Card.Body>
          <Card.Title className="text-center mb-4">Preferencias de Notificaciones</Card.Title>
          <Form>
            <Form.Check
              type="checkbox"
              label="Recibir notificaciones de anuncios"
              name="announcements"
              checked={preferences.announcements}
              onChange={handlePreferenceChange}
              className="mb-3"
            />
            <Form.Check
              type="checkbox"
              label="Recibir notificaciones de reportes"
              name="reports"
              checked={preferences.reports}
              onChange={handlePreferenceChange}
              className="mb-3"
            />
            <Form.Check
              type="checkbox"
              label="Recibir notificaciones de eventos"
              name="events"
              checked={preferences.events}
              onChange={handlePreferenceChange}
            />
          </Form>
          <BackToHomeButton />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Notifications;
