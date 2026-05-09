import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="card" style={{ maxWidth: '420px', margin: '120px auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#00f3ff', letterSpacing: '2px' }}>
        ACCESO AL SISTEMA
      </h2>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Correo Electrónico" 
          className="input-field"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          className="input-field"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />
        <button type="submit" className="btn" style={{ width: '100%', marginTop: '20px' }}>
          INICIAR SESIÓN
        </button>
      </form>
    </div>
  );
};

export default Login;