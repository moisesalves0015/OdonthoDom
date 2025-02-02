// App.jsx
import React from 'react';
import './App.css';
import Menu from './Menu';
import Banner from './Banner';
import BotaoWhatsapp from './BotaoWhatsapp';
import Serviços from './FeedServicos/Serviços';
import DepoimentoFeed from './Depoimentos/DepoimentoFeed';
import Atendentes from './Atendentes/Atendentes'
import ContatoEndereco from './ContatoEndereço/contatoendereco'


function App() {
  return (
    <div className='app'>
      <Menu />
      <Banner />
      <BotaoWhatsapp />
      <Serviços />
      
      <DepoimentoFeed />
      <Atendentes />
      <ContatoEndereco/>
    </div>
  );
}

export default App;
