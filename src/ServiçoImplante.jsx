import React, { useState } from 'react';
import './ServiçoImplante.css';

function Servicos() {
  // Estado para controlar a abertura da área expandida
  const [showMore, setShowMore] = useState(false);

  // Função para alternar o estado
  const toggleMoreInfo = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="ServicoContainer">
      {/* Lado esquerdo: Texto e botão */}
      <div className="ServicoTexto">
        <h2>Implantes Dentários</h2>
        <p>
          Os implantes dentários são uma solução eficaz para substituir dentes
          perdidos, garantindo estética e funcionalidade ao seu sorriso.
        </p>
        <button onClick={toggleMoreInfo}>
          {showMore ? 'Fechar' : 'Saiba Mais'}
        </button>
      </div>

      {/* Lado direito: Imagem */}
      <div className="ServicoImagem">
        <img src="/implante-dentario.jpg" alt="Implantes Dentários" />
      </div>

      {/* Div expandida com mais informações */}
      {showMore && (
        <div className="ServicoDetalhes">
          <p>
            Os implantes dentários são fixados no osso da mandíbula, proporcionando
            maior firmeza e conforto. O procedimento é seguro, com alta taxa de
            sucesso.
          </p>
          <div className="ServicoFotos">
            <img src="/implante-antes.jpg" alt="Antes do Implante" />
            <img src="/implante-depois.jpg" alt="Depois do Implante" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Servicos;
