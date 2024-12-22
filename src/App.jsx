// App.jsx
import React from 'react';
import './App.css';
import Menu from './Menu';
import Banner from './Banner';
import BotaoWhatsapp from './BotaoWhatsapp';
import Serviços from './Serviços';

function App() {
  return (
    <>
      <Menu />
      <Banner />
      <BotaoWhatsapp />
      <Serviços />
    </>
  );
}

export default App;
