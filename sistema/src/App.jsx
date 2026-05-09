import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register'; // Importar nueva página
import Dashboard from './pages/Dashboard';
import ProjectDetail from './pages/ProjectDetail';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registro" element={<Register />} /> {/* Nueva ruta */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/proyecto/:id_proyecto" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;