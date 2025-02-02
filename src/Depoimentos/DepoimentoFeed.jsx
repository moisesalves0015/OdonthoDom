import React, { useRef, useEffect, useState } from 'react';
import './DepoimentoFeed.css';
import { FaStar } from "react-icons/fa";


import NathalieCardoso from './NathalieCardoso.png';
import RebecaCelestino from './RebecaCelestino.png';
import IsabeleMoreira from './IsabeleMoreira.png';
import SimoneMone from './SimoneMone.png';
import DanielaSouza from './DanielaSouza.png';
import JuliaGouvêa from './JuliaGouvêa.png';


function DepoimentoFeed() {
  const testimonials = [
    {
      name: 'Nathalie Cardoso',
      photo: NathalieCardoso,
      text: 'Dra Dominique foi super atenciosa e maravilhosa com meu filho. Ele precisava extrair o dente de leite que não saía e ela com todo carinho e paciência brincou com ele de fazer mágica e arrancou sem nenhuma dor ou trauma. Recomendo seu atendimento e voltarei mais vezes para novos atendimentos.',
    },
    {
      name: 'Rebeca Celestino',
      photo: RebecaCelestino,
      text: 'Atendimento maravilhoso! Profissionais incríveis, pacientes e dedicadas! Cada detalhe do procedimento no meu filho foi com muito cuidado e carinho! Eu super recomendo! Também é um ambiente agradável e de fácil acesso.',
    },
    {
      name: 'Isabele Moreira',
      photo: IsabeleMoreira,
      text: 'Fui muito bem atendida desde a recepção até o atendimento final, profissionais excelentes e bem atenciosas, com certeza voltarei mais vezes, estão de parabéns!! 👏🏻',
    },
    {
      name: 'Simone Mone',
      photo: SimoneMone,
      text: 'Deste a recepção até a doutora foi muito atenciosa,como eu fui arrancar o meu siso estava nervosa ,mas com o jeito meigo da Doutora Dominique tudo deu certo,recomendo e aprovo.',
    },
    {
      name: 'Daniela Souza',
      photo: DanielaSouza,
      text: 'Gostei muito da clínica, que é super charmosa e confortável. A Dra. Dominique é uma pessoa adorável, extremamente responsável e dedicada. Recomendo a todos !',
    },
    {
      name: 'Julia Gouvêa',
      photo: JuliaGouvêa,
      text: 'Atendimento impecável !!! Fiz preenchimento labial e estou simplesmente apaixonada pelo resultado! Procedimento todo SEM DOR! A Doutora tem mãos de fada!',
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
    }, 8000);

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
      <h1>O que nossos clientes dizem</h1>
      <p className="TestimonialDescription">Veja como nossos serviços impactaram positivamente a vida de quem já utilizou.<br></br> Depoimentos sinceros que refletem nossa qualidade e dedicação.</p>

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
            
            <div className='avaliacao'> 
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
            <p className="TestimonialText">"{testimonial.text}"</p>
           

          </div>
        ))}
      </div>
    </div>
  );
}

export default DepoimentoFeed;
