import React, { useState } from 'react';
import './BotaoWhatsapp.css';
import { BsWhatsapp } from "react-icons/bs";

function FloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleWhatsAppRedirect = (message) => {
    const phoneNumber = "21965128871"; // Substitua pelo número desejado
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="FloatingButton">
      <button className="MainButton" onClick={handleToggle}>
      <BsWhatsapp />
      </button>

      {isOpen && (
        <div className="OptionsContainer">
          <button
            className="OptionButton"
            onClick={() => handleWhatsAppRedirect('Olá, gostaria de falar sobre implantes dentários.')}
          >
            Implantes Dentários
          </button>
          <button
            className="OptionButton"
            onClick={() => handleWhatsAppRedirect('Olá, gostaria de saber mais sobre tratamentos ortodônticos.')}
          >
            Tratamentos Ortodônticos
          </button>
          <button
            className="OptionButton"
            onClick={() => handleWhatsAppRedirect('Olá, tenho dúvidas sobre o clareamento dental.')}
          >
            Clareamento Dental
          </button>
        </div>
      )}
    </div>
  );
}

export default FloatingButton;
