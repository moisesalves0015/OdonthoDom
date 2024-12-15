import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <nav className='MenuSuperior'>
      <img src="/OdonthoDom.svg" alt="Descrição da imagem" />
      <ul>
        <li>Sobre Nós</li>
        <li>Primeira Consulta</li>
        <li>Nossas Especialidades</li>
        <li>Fale Conosco</li>
      </ul>
      <button>Agendar Consulta</button>
    </nav>
  );
}

export default Menu;
