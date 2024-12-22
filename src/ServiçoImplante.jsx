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
      {/* Imagem principal do serviço */}
      <img
        className="ServicoImagemPrincipal"
        src="./serviços/implantesPrincipal.jpg"
        alt="Implantes Dentários"
      />

      {/* Título e descrição */}
      <div className="ServicoTexto">
        <h2>Implantes Dentários</h2>
        <p>
        Os implantes dentários são a solução definitiva para devolver a funcionalidade e a estética do seu sorriso. Com tecnologia avançada e materiais de alta qualidade, oferecemos um tratamento personalizado que garante conforto, durabilidade e resultados naturais. Reconquiste a confiança ao sorrir e aproveite uma vida sem limitações!
        </p>
        <button onClick={handleMoreInfo}>
          {showMore ? 'Fechar' : 'Ver Mais'}
        </button>
      </div>

      {/* Div expandida com mais informações */}
      {showMore && (
        <div className="ServicoDetalhes" ref={infoRef}>
          <p>
          Perder um dente não precisa ser motivo de preocupação! Os implantes dentários são uma alternativa moderna e eficaz que imita a estrutura de um dente natural. Além de restaurar a mastigação e a fala, eles preservam a saúde dos ossos e gengivas. Com nossa equipe experiente, você terá um atendimento humanizado e resultados de excelência.
          </p>
          <p>

          Chegou a hora de dizer adeus às inseguranças! Nossos implantes dentários são projetados para trazer de volta o seu sorriso com conforto e durabilidade. Indicados para casos simples ou complexos, eles oferecem fixação segura e aparência natural. Agende uma avaliação e descubra como podemos transformar seu sorriso e sua qualidade de vida!

          </p>
          <div className="ServicoFotos">
            <img src="./serviços/implantesPrincipal.jpg" alt="Antes do Implante" />
            <img src="./serviços/implantesPrincipal.jpg" alt="Depois do Implante" />
            <img src="./serviços/implantesPrincipal.jpg" alt="Depois do Implante" />
            <button>
          Agendar consulta com Especialista !
        </button>
          </div>

        </div>
      )}
    </div>
  );
}

export default Servicos;
