// Serviços.jsx
import React from 'react';
import './Serviços.css';
import ServiçoImplante from './ServiçoImplante';
import ServiçoOrtondontia from './ServiçoOrtondontia';
import ServiçoPeriodontia from './ServiçoPeriodontia';




function Serviços() {
  return (
    <>
    <div className='NossasEspecialidades'> 
    <h1> Nossas Especialidades </h1>
    <p>Na nossa clínica, você encontra especialidades odontológicas voltadas para oferecer o melhor cuidado à sua saúde bucal. Seja qual for a sua necessidade, nossa equipe de profissionais está preparada para atender com tecnologia, experiência e um atendimento humanizado. Confira nossas especialidades e escolha a melhor solução para o seu sorriso!</p>
    </div> 
      <ServiçoImplante />
      <ServiçoOrtondontia />
      <ServiçoPeriodontia />
      <ServiçoImplante />
    </>
  );
}

export default Serviços;
