import React, { useState } from 'react';
import './BotaoWhatsapp.css';
import { BsWhatsapp } from "react-icons/bs";

function FloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleWhatsAppRedirect = (message) => {
    const phoneNumber = "5521986682606"; // Substitua pelo número desejado
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="FloatingButton">
      {isOpen && (
        <div className="OptionsContainer">
          <button
            className="OptionButton"
            onClick={() => handleWhatsAppRedirect('Olá, gostaria de saber mais sobre implantes dentários. Tenho dúvidas sobre o processo e os custos.')}
          >
            Implantes Dentários
          </button>
          <button
            className="OptionButton"
            onClick={() => handleWhatsAppRedirect('Olá, estou interessado em tratamentos ortodônticos. Gostaria de saber mais sobre as opções de aparelhos e valores.')}
          >
            Tratamentos Ortodônticos
          </button>
          <button
            className="OptionButton"
            onClick={() => handleWhatsAppRedirect('Olá, gostaria de informações detalhadas sobre clareamento dental. É seguro? Quais são os resultados esperados?')}
          >
            Clareamento Dental
          </button>
          <button
            className="OptionButton"
            onClick={() => handleWhatsAppRedirect('Olá, estou procurando informações sobre limpeza dental. Qual é a frequência recomendada e os custos?')}
          >
            Limpeza Dental
          </button>
          <button
            className="OptionButton"
            onClick={() => handleWhatsAppRedirect('Olá, gostaria de falar sobre extrações dentárias. Quais cuidados são necessários após o procedimento?')}
          >
            Extrações Dentárias
          </button>
          <button
            className="OptionButton"
            onClick={() => handleWhatsAppRedirect('Olá, gostaria de saber mais sobre facetas dentárias. Elas são permanentes? Como funcionam?')}
          >
            Facetas Dentárias
          </button>
          <button
            className="OptionButton"
            onClick={() => handleWhatsAppRedirect('Olá, estou interessado em conhecer os tratamentos de canal que vocês oferecem. Quais são os procedimentos e valores?')}
          >
            Tratamento de Canal
          </button>
          <button
            className="OptionButton"
            onClick={() => handleWhatsAppRedirect('Olá, gostaria de falar sobre outro assunto relacionado à clínica odontológica.')}
          >
            Outros
          </button>
        </div>
      )}
      <button className="MainButton" onClick={handleToggle}>
        <BsWhatsapp />
      </button>

      
    </div>
  );
}

export default FloatingButton;
