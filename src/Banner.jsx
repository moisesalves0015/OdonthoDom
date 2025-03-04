import React from 'react';
import './Banner.css';
import { FaRegCalendarAlt } from "react-icons/fa";

function Banner() {
  return (
    <div className='BannerConteiner'>
      <div>
        <h1>Clínica Odontológica completa para o seu sorriso!</h1>
        <p>
          Proporcionamos um atendimento humanizado e de alta qualidade
          saúde bucal, garantindo que nossos pacientes se sintam acolhidos
          e confiantes ao cuidar de sua saúde.
        </p>
        <section>
          <button>Agendar uma avaliação</button>
        
        </section>
      </div>
      <div className='containerFotoDominique'>

        <img src=".\fotoDom3.png" alt="" className="fotoDominique" />
      </div>
    </div>
  );
}

export default Banner;
