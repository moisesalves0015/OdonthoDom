import React, { useState, useRef } from 'react';
import './ServiçoImplante.css';



function Servicos() {
  // Estado para controlar a abertura da área expandida
  const [showMore, setShowMore] = useState(false);

  // Referência para a div informativa
  const infoRef = useRef(null);

  // Função para alternar o estado e rolar até a div
  const handleMoreInfo = () => {
    setShowMore(!showMore);
    if (!showMore) {
      setTimeout(() => {
        infoRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 300); // Pequeno atraso para garantir a transição
    }
  };

  return (
    <div className="ServicoContainer">
      <div className="ServicoContainer2">
        {/* Imagem principal do serviço */}
        <div>
          <div className='CaseImg'>

          </div>
          <img
            className="ServicoImagemPrincipal"
            src=".\serviços\periodontiaPrincipal.jpg"
            alt="Implantes Dentários"
          />
        </div>

        {/* Título e descrição */}
        <div className="ServicoTexto">
          <h2>Ortondontia</h2>
          <p>
            Os implantes dentários são a solução definitiva para a substituição de dentes perdidos. Este procedimento visa devolver a funcionalidade e a estética do sorriso, oferecendo conforto e segurança ao paciente. Diferentemente das próteses removíveis, os implantes proporcionam maior estabilidade, ajudando a recuperar a confiança e a qualidade de vida.
          </p>
          <button onClick={handleMoreInfo}>
            {showMore ? 'Fechar' : 'Ver Mais'}
          </button>
        </div>
      </div>
      {/* Div expandida com mais informações */}
      {showMore && (
        <div className="ServicoDetalhes" ref={infoRef}>
          <h2>O passo a passo dos implantes dentários</h2>
          <p>
            O processo começa com uma avaliação clínica detalhada, incluindo exames de imagem, como tomografias, para planejar a colocação dos pinos de titânio no osso. Após a osseointegração, que dura alguns meses, a prótese definitiva é fixada, proporcionando um resultado duradouro e natural.
          </p>
          <h2>Por que escolher implantes dentários?</h2>
          <p>

            Além de restaurar o sorriso, os implantes preservam a estrutura óssea da face, evitam o deslocamento de dentes vizinhos e oferecem longevidade quando mantidos com uma boa higiene e acompanhamento odontológico regular.
          </p>
          <div className="ServicoFotos">
            <img src="./serviços/implante1.avif" alt="Antes do Implante" />
            <img src="./serviços/implante2.avif" alt="Depois do Implante" />
            <img src="./serviços/implante3.avif" alt="Depois do Implante" />
          </div>
          <div className='containeragendarespecialista'>
            <button className='botaoagendarespecialista'>
              Agendar consulta com Especialista !
            </button>
          </div>

        </div>
      )}
    </div>
  );
}

export default Servicos;
