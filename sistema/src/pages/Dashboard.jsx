import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    // Simulación de los datos de tu tabla
    setProyectos([
      { id_proyecto: 1, nombre: 'Proyecto A', descripcion: 'Gestión inicial', id_creador: 1 },
      { id_proyecto: 2, nombre: 'App de Soporte', descripcion: 'Sistema de tickets internos', id_creador: 1 }
    ]);
  }, []);

  return (
    <div>
      <h2 style={{ marginBottom: '30px', color: '#fff', borderBottom: '1px solid #333', paddingBottom: '10px' }}>
        Mis Proyectos
      </h2>
      <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
        {proyectos.map((proyecto) => (
          <div key={proyecto.id_proyecto} className="card">
            <h3 style={{ color: '#00f3ff', marginBottom: '10px' }}>{proyecto.nombre}</h3>
            <p style={{ color: '#aaa', marginBottom: '20px', minHeight: '40px' }}>{proyecto.descripcion}</p>
            <Link to={`/proyecto/${proyecto.id_proyecto}`}>
              <button className="btn" style={{ width: '100%' }}>Ingresar al Panel</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;