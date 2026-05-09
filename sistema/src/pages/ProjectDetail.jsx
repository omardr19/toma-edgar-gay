import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { id_proyecto } = useParams();
  
  const [tareas, setTareas] = useState([]);
  const [participantes, setParticipantes] = useState([]);
  
  const [nuevaTarea, setNuevaTarea] = useState({ nombre: '', descripcion: '', fecha_limite: '' });
  const [nuevoParticipanteCorreo, setNuevoParticipanteCorreo] = useState('');

  useEffect(() => {
    // Datos simulados estructurados según tu base de datos
    setTareas([
      { id_tarea: 1, nombre: 'Diseñar Logo', descripcion: 'Crear propuesta', estado: 'pendiente', fecha_limite: '2024-06-01' }
    ]);
    setParticipantes([
      { id_participante: 1, nombre: 'Ana Admin', correo: 'ana@correo.com' }
    ]);
  }, [id_proyecto]);

  const handleAddTarea = (e) => {
    e.preventDefault();
    if (!nuevaTarea.nombre) return;
    
    setTareas([...tareas, {
      id_tarea: Date.now(),
      nombre: nuevaTarea.nombre,
      estado: 'pendiente',
      fecha_limite: nuevaTarea.fecha_limite
    }]);
    setNuevaTarea({ nombre: '', descripcion: '', fecha_limite: '' });
  };

  const handleAddParticipante = (e) => {
    e.preventDefault();
    if (!nuevoParticipanteCorreo) return;
    
    setParticipantes([...participantes, { 
      id_participante: Date.now(), 
      nombre: 'Nuevo Colaborador', 
      correo: nuevoParticipanteCorreo 
    }]);
    setNuevoParticipanteCorreo('');
  };

  return (
    <div>
      <h2 style={{ color: '#00f3ff', marginBottom: '30px' }}>[ PROYECTO ID: {id_proyecto} ]</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        
        {/* Panel Tareas */}
        <div className="card">
          <h3 style={{ borderBottom: '1px solid #333', paddingBottom: '10px' }}>Gestión de Tareas</h3>
          <form onSubmit={handleAddTarea} style={{ display: 'grid', gap: '10px', marginTop: '20px', gridTemplateColumns: '1fr 1fr auto' }}>
            <input 
              type="text" 
              placeholder="Nombre de la tarea" 
              className="input-field" 
              value={nuevaTarea.nombre}
              onChange={(e) => setNuevaTarea({...nuevaTarea, nombre: e.target.value})}
            />
            <input 
              type="date" 
              className="input-field" 
              value={nuevaTarea.fecha_limite}
              onChange={(e) => setNuevaTarea({...nuevaTarea, fecha_limite: e.target.value})}
            />
            <button type="submit" className="btn" style={{ margin: '10px 0' }}>AGREGAR</button>
          </form>

          <ul style={{ listStyle: 'none', marginTop: '20px' }}>
            {tareas.map(tarea => (
              <li key={tarea.id_tarea} style={{ padding: '15px', background: '#0a0a0a', borderRadius: '12px', marginBottom: '10px', border: '1px solid #222' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong style={{ color: '#fff' }}>{tarea.nombre}</strong>
                  <span className={`badge ${tarea.estado}`}>{tarea.estado.toUpperCase()}</span>
                </div>
                <p style={{ color: '#888', fontSize: '0.9rem', marginTop: '5px' }}>Límite: {tarea.fecha_limite}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Panel Participantes */}
        <div className="card">
          <h3 style={{ borderBottom: '1px solid #333', paddingBottom: '10px' }}>Participantes</h3>
          <form onSubmit={handleAddParticipante} style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <input 
              type="email" 
              placeholder="Correo del usuario" 
              className="input-field" 
              value={nuevoParticipanteCorreo}
              onChange={(e) => setNuevoParticipanteCorreo(e.target.value)}
            />
            <button type="submit" className="btn" style={{ padding: '10px 15px', margin: '10px 0' }}>+</button>
          </form>

          <ul style={{ listStyle: 'none', marginTop: '20px' }}>
            {participantes.map(p => (
              <li key={p.id_participante} style={{ padding: '12px', background: '#0a0a0a', borderRadius: '12px', marginBottom: '10px', border: '1px solid #222', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '30px', height: '30px', background: '#00f3ff', borderRadius: '50%', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                  {p.nombre.charAt(0)}
                </div>
                <div>
                  <div style={{ color: '#fff', fontSize: '0.95rem' }}>{p.nombre}</div>
                  <div style={{ color: '#666', fontSize: '0.8rem' }}>{p.correo}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;