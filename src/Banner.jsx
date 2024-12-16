import React from 'react';
import './Banner.css';

function Banner() {
  return (
    
    <div className='BannerConteiner'>
     <div>
      <h1>Clínica Odontológica completa para o seu sorriso!</h1>
      <p>Proporcionamos um atendimento humanizado e de alta qualidade
      saúde bucal, garantindo que nossos pacientes se sintam acolhidos
       e confiantes ao cuidar de sua saúde.</p>
       <section>
      <button>Agendar uma avaliação </button>
      <img src="/contato.svg" alt="Descrição da imagem" />
      <section>
        <h5>Contato</h5>
        <h4>99 99999-9999</h4>
      </section>
      </section>
     </div>
     <div></div>
    </div>
    
  );
}

export default Banner;
