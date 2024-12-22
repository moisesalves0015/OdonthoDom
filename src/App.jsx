// App.jsx
import React from 'react';
import './App.css';
import Menu from './Menu';
import Banner from './Banner';
import BotaoWhatsapp from './BotaoWhatsapp';
import ServiçoImplante from './ServiçoImplante';

function App() {
  return (
    <>
      <Menu />
      <Banner />
      <BotaoWhatsapp />
      <ServiçoImplante />
      <ServiçoImplante />
      <ServiçoImplante />
    </>
  );
}

export default App;
