import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Jogos from './pages/Jogos';
import Perfil from './pages/Perfil';
import Cadastro from './pages/Cadastro';
import Ombudsman from './pages/Ombudsman';
import Feedback from './pages/feedback/feedback';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/Jogos" element={<Jogos />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Ombudsman" element={<Ombudsman />} />{' '}
        {/* Adicionando rota para Ombudsman */}
        <Route path="/Feedback" element={<Feedback />} />{' '}
        {/* Adicionando rota para Ombudsman */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
