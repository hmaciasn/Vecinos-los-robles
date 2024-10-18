import React, { useState } from 'react';

const ReportProblemForm = ({ onSubmitReport }) => {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && image) {
      onSubmitReport({ description, image });
    } else {
      alert('Debes proporcionar una descripción y una imagen.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Descripción del problema:</label>
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        required
      />
      <label>Imagen de evidencia:</label>
      <input 
        type="file" 
        onChange={(e) => setImage(e.target.files[0])} 
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ReportProblemForm;
