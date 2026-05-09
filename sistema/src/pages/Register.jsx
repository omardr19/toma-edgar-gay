import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ nombre: '', correo: '', contrasena: '' });
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Guardamos el usuario en localStorage para simular una base de datos
    localStorage.setItem('usuario_registrado', JSON.stringify(formData));
    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    navigate('/');
  };

  return (
    <div className="card" style={{ maxWidth: '420px', margin: '120px auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#00f3ff', letterSpacing: '2px' }}>
        CREAR CUENTA
      </h2>
      <form onSubmit={handleRegister}>
        <input 
          type="text" 
          placeholder="Nombre Completo" 
          className="input-field"
          onChange={(e) => setFormData({...formData, nombre: e.target.value})}
          required
        />
        <input 
          type="email" 
          placeholder="Correo Electrónico" 
          className="input-field"
          onChange={(e) => setFormData({...formData, correo: e.target.value})}
          required
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          className="input-field"
          onChange={(e) => setFormData({...formData, contrasena: e.target.value})}
          required
        />
        <button type="submit" className="btn" style={{ width: '100%', marginTop: '20px' }}>
          REGISTRARSE
        </button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.9rem' }}>
        ¿Ya tienes cuenta? <Link to="/" style={{ color: '#00f3ff', textDecoration: 'none' }}>Inicia Sesión</Link>
      </p>
    </div>
  );
};

export default Register;