import React, { useRef, useEffect, useState } from 'react';
import './DepoimentoFeed.css';

function DepoimentoFeed() {
  const testimonials = [
    {
      name: 'Maria Silva',
      photo: 'https://via.placeholder.com/100',
      text: 'O atendimento foi excelente! Me senti muito confortável e o resultado foi incrível.',
    },
    {
      name: 'João Souza',
      photo: 'https://via.placeholder.com/100',
      text: 'Recomendo demais! Todo o processo foi super tranquilo e com ótimos profissionais.',
    },
    {
      name: 'Ana Pereira',
      photo: 'https://via.placeholder.com/100',
      text: 'Adorei o serviço! Certamente voltarei para outros procedimentos.',
    },
    {
      name: 'Carlos Lima',
      photo: 'https://via.placeholder.com/100',
      text: 'Equipe super atenciosa e o resultado ficou perfeito. Muito obrigado!',
    },
    {
      name: 'Fernanda Oliveira',
      photo: 'https://via.placeholder.com/100',
      text: 'Simplesmente incrível! Atendimento impecável e resultado excelente.',
    },
    {
      name: 'Ricardo Santos',
      photo: 'https://via.placeholder.com/100',
      text: 'Minha experiência foi ótima. Recomendo muito!',
    },
  ];

  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const cloneFirst = () => {
      const firstCard = carousel.firstChild.cloneNode(true);
      carousel.appendChild(firstCard);
    };

    // Clona o primeiro card para criar o loop
    //cloneFirst();

    const interval = setInterval(() => {
      if (!isDragging) {
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.offsetWidth) {
          carousel.scrollLeft = 0; // Volta ao início
        } else {
          carousel.scrollBy({ left: carousel.offsetWidth, behavior: 'smooth' });
        }
      }
    }, 6000);

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [isDragging]);

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiplica para aumentar a sensibilidade
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="DepoimentoFeed">
      <h2>O que nossos clientes dizem</h2>
      <div
        className="Carousel"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {testimonials.map((testimonial, index) => (
          <div className="TestimonialCard" key={index}>
            <img
              src={testimonial.photo}
              alt={`Foto de ${testimonial.name}`}
              className="TestimonialPhoto"
            />
            <h3 className="TestimonialName">{testimonial.name}</h3>
            <p className="TestimonialText">"{testimonial.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DepoimentoFeed;
