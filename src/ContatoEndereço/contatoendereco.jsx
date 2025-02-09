
import React from 'react';
import './contatoendereco.css';

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";







function ContatoEndereco() {
    return (
        <div className='ContatoEndereco'>
            <h1>Nossa Localização</h1>
            <div className='InformaçãoContatoEndereco'>
            <div className='Contato'>

                <h3>Endereço</h3>
                <p><strong>Local:</strong> Av. Geremário Dantas, 197 - sala 201 - Tanque</p>
                <p><strong>Cidade:</strong> Rio de Janeiro - RJ, 22735-015</p>

                <h3>Horários De Funcionamento</h3>
                <p><strong>Dia:</strong> Segunda à Sexta</p>
                <p><strong>Horário:</strong> 09:00 AM - 18:00 PM</p>
                <p><strong>Telefone:</strong> (21) 98440-6294</p>
                <section>
                <FaInstagram />
                <FaFacebookF />
                </section>


            </div>
            <div className='endereco'>
                <section className="map-section">

                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.8000972123746!2d-43.36012329999999!3d-22.920742999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd96dde4eddeb%3A0x73d1fea8d52f2ba3!2sOdonthodom%20-%20Cl%C3%ADnica%20Odontol%C3%B3gica%20em%20Jacarepagu%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1738465231533!5m2!1spt-BR!2sbr"
                            width="300"
                            height="350"
                            style={{ border: '0' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />

                    </div>
                </section>



            </div>
            </div>
        </div>
    );
}

export default ContatoEndereco;
