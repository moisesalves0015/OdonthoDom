
import React from 'react';
import './FormularioContato.css';




function FormularioContato() {
    

    return (
        <div className='conteinerFormulario'>
            <h1>Fale Conosco</h1>
            <div className='formularioContato'>
                <div className='formulario'>
                    <h3>Solicitação de Contato</h3>
                    <form>
                        <div className="input-group">
                            <label htmlFor="nome">Nome</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                required
                                placeholder="Seu nome"
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="Seu e-mail"
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="mensagem">Mensagem</label>
                            <textarea
                                id="mensagem"
                                name="mensagem"
                                required
                                placeholder="Escreva sua mensagem aqui"
                            />
                        </div>

                        <button type="submit" className="submit-button">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormularioContato;