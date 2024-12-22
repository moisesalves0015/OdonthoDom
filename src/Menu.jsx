import React, { useState } from 'react';
import './Menu.css';
import { FaRegCalendarAlt } from "react-icons/fa";

function Menu() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <nav className='MenuSuperior'>
      <img src="/OdonthoDom.svg" alt="Logo OdonthoDom" />

      {/* Botão do menu hambúrguer */}
      <button className="MenuToggle" onClick={toggleMenu}>
        ☰
      </button>

      {/* Lista de itens do menu */}
      <ul className={menuAberto ? "MenuAberto" : ""}>
        <li>Sobre Nós</li>
        <li>Primeira Consulta</li>
        <li>Nossas Especialidades</li>
        <li>Fale Conosco</li>
      </ul>

      {/* Botão de agendamento */}
      <button className="BotaoAgendar">Agendar Consulta  <FaRegCalendarAlt /></button>
    </nav>
  );
}

export default Menu;
