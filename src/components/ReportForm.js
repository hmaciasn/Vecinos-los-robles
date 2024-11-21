import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import BackToHomeButton from './BackToHomeButton';

const ReportForm = () => {
  const [formData, setFormData] = useState({
    description: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ width: '100%', maxWidth: '600px' }} className="shadow">
        <Card.Body>
          <Card.Title className="text-center mb-4">Reportar un Problema</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Descripción del Problema</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                placeholder="Describe el problema..."
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Adjuntar Imagen</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={handleFileChange}
                accept="image/*"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Enviar Reporte
            </Button>
          </Form>
          <BackToHomeButton />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ReportForm;
