import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const BackToHomeButton = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-3 text-center">
      <Button variant="secondary" onClick={() => navigate('/home')}>
        Regresar a Inicio
      </Button>
    </div>
  );
};

export default BackToHomeButton;
