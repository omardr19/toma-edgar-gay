import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Recuperar datos de localStorage
    const usuarioGuardado = JSON.parse(localStorage.getItem('usuario_registrado'));

    if (usuarioGuardado && usuarioGuardado.correo === correo && usuarioGuardado.contrasena === contrasena) {
      navigate('/dashboard');
    } else {
      alert('Credenciales incorrectas o usuario no registrado.');
    }
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
      <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.9rem' }}>
        ¿No tienes cuenta? <Link to="/registro" style={{ color: '#00f3ff', textDecoration: 'none' }}>Regístrate aquí</Link>
      </p>
    </div>
  );
};

export default Login;