import React, { useState } from 'react';
import axios from 'axios';

function ReportIssue() {
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('description', description);
        if (image) formData.append('image', image);

        try {
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:5000/api/reports', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            });
            setMessage('Reporte enviado exitosamente');
            setDescription('');
            setImage(null);
        } catch (error) {
            setMessage('Error al enviar el reporte');
        }
    };

    return (
        <div>
            <h2>Reportar Problema</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder="Descripción del problema"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                />
                <button type="submit">Enviar Reporte</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default ReportIssue;
