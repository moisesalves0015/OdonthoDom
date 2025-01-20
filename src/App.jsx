// App.jsx
import React from 'react';
import './App.css';
import Menu from './Menu';
import Banner from './Banner';
import BotaoWhatsapp from './BotaoWhatsapp';
import Serviços from './FeedServicos/Serviços';
import DepoimentoFeed from './Depoimentos/DepoimentoFeed';

function App() {
  return (
    <>
      <Menu />
      <Banner />
      <BotaoWhatsapp />
      <Serviços />
      <DepoimentoFeed />
    </>
  );
}

export default App;
