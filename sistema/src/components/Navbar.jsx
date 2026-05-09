import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate('/');
  };

  if (location.pathname === '/') return null;

  return (
    <nav className="navbar">
      <Link to="/dashboard">SYS_GESTION</Link>
      <button className="btn" onClick={handleLogout}>
        Cerrar Sesión
      </button>
    </nav>
  );
};

export default Navbar;