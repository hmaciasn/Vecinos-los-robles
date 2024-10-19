import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Componentes del dashboard
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bienvenid@ al panel de administración, podrás tener acceso a los usuuarios, reportes y anuncios.</p>
    </div>
  );
}

// Users Component
function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Usuario 1', email: 'user1@example.com' },
    { id: 2, name: 'Usuario 2', email: 'user2@example.com' }
  ]);

  return (
    <div>
      <h1>Administración de usuarios</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Reportes
function Reports() {
  const [reports, setReports] = useState([
    { id: 1, issue: 'Basura tirada por las calles', status: 'Open' },
    { id: 2, issue: 'La luz de la calle #23 no funciona', status: 'Closed' }
  ]);

  return (
    <div>
      <h1>Administrar reportes</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Problema</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {reports.map(report => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.problema}</td>
              <td>{report.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Componentes de los anuncios
function Announcements() {
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: 'Conferencia 6 PM', description: 'Conferencia acerca de los próximos eventos y recibos de la colonia.' },
    { id: 2, title: 'Arreglo de fuga de agua en la calle #12', description: 'La calle #12 estará cerrada durante los próximos 2 días debido a que se esta reparando una fuga de agua.' }
  ]);

  return (
    <div>
      <h1>Administración de anuncios</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Pago de recibos</th>
            <th>Cuotas de los recibos de luz, agua y telefono</th>
          </tr>
        </thead>
        <tbody>
          {announcements.map(announcement => (
            <tr key={announcement.id}>
              <td>{announcement.id}</td>
              <td>{announcement.title}</td>
              <td>{announcement.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Componentes principales
function App() {
  return (
    <Router>
      <div className="App" style={{ display: 'flex' }}>
        {/* Menu */}
        <nav style={{ width: '250px', padding: '20px', background: '#f5f5f5' }}>
          <h2>Admin Panel</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/users">Usuarios</Link></li>
            <li><Link to="/reports">Reportes</Link></li>
            <li><Link to="/announcements">Anuncios</Link></li>
          </ul>
        </nav>

        {/* Contenido */}
        <div style={{ padding: '20px', flex: 1 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/announcements" element={<Announcements />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


