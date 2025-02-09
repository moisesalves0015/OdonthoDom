// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './Menu';
import Banner from './Banner';
import BotaoWhatsapp from './BotaoWhatsapp';
import Serviços from './FeedServicos/Serviços';
import DepoimentoFeed from './Depoimentos/DepoimentoFeed';
import Atendentes from './Atendentes/Atendentes';
import ContatoEndereco from './ContatoEndereço/contatoendereco';
import FormularioContato from './FormularioContato/FormularioContato';
import FormularioPage from './pages/FormularioPage';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div className='app'>
        <Menu />
        <Routes>
          {/* Rota para a página inicial */}
          <Route
            path='/'
            element={
              <>
                <Banner />
                <BotaoWhatsapp />
                <Serviços />
                <DepoimentoFeed />
                <Atendentes />
                <ContatoEndereco />
                <FormularioContato />
              </>
            }
          />

          {/* Rota para o formulário de anamnese */}
          <Route path='/formulario' element={<FormularioPage />} />

          {/* Rota para a página de administração */}
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;