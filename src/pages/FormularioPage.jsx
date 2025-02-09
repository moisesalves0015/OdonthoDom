
// src/pages/FormularioPage.js
import React, { useState } from 'react';
import { adicionarPaciente } from '../data/dados';
import { useNavigate } from 'react-router-dom';

const FormularioPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    nascimento: '',
    ocupacao: '',
    endereco: '',
    rg: '',
    cpf: '',
    tratamentoMedico: '',
    motivoTratamento: '',
    periodoMenstrual: '',
    epilepsia: '',
    gravidaLactante: '',
    alergia: '',
    alergiaEspecificacao: '',
    hepatite: '',
    herpes: '',
    hiv: '',
    queloide: '',
    fumante: '',
    cirurgiaRecente: '',
    usoMedicamento: '',
    medicamentoEspecificacao: '',
    hipertensao: '',
    hipertensaoControlada: '',
    diabetes: '',
    diabetesControlada: '',
    dorCabeca: '',
    doencaCronica: '',
    doencaCronicaEspecificacao: '',
    clareamentoAnterior: '',
    clareamentoDoeu: '',
    sensibilidade: '',
    sensibilidadeQuente: '',
    sensibilidadeGelado: '',
    cremeDental: '',
    escovacaoDiaria: '',
    bruxismo: '',
    alergiaAnestesia: '',
    apertamento: '',
    alergiaComida: '',
    problemaInformar: '',
    observacao: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'radio' || type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const paciente = {
      id: Date.now(), // ID único
      ...formData,
      pressaoArterial: '', // Será preenchido pelo admin
      saturacaoOxigenio: '', // Será preenchido pelo admin
    };
    adicionarPaciente(paciente);
    alert('Formulário enviado com sucesso!');
    navigate('/admin'); // Redireciona para a página de admin
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Formulário de Anamnese</h2>

      {/* Dados Pessoais */}
      <fieldset style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
        <legend>Dados Pessoais</legend>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Nome:
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Nascimento:
          <input
            type="date"
            name="nascimento"
            value={formData.nascimento}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Ocupação:
          <input
            type="text"
            name="ocupacao"
            value={formData.ocupacao}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Endereço:
          <input
            type="text"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          RG:
          <input
            type="text"
            name="rg"
            value={formData.rg}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          CPF:
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </label>
      </fieldset>

      {/* Saúde Geral */}
      <fieldset style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
        <legend>Saúde Geral</legend>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Está em tratamento médico?
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="tratamentoMedico"
              value="Sim"
              checked={formData.tratamentoMedico === 'Sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="tratamentoMedico"
              value="Não"
              checked={formData.tratamentoMedico === 'Não'}
              onChange={handleChange}
            />
            Não
          </label>
        </label>
        {formData.tratamentoMedico === 'Sim' && (
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Motivo:
            <input
              type="text"
              name="motivoTratamento"
              value={formData.motivoTratamento}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </label>
        )}

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Está no período menstrual?
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="periodoMenstrual"
              value="Sim"
              checked={formData.periodoMenstrual === 'Sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="periodoMenstrual"
              value="Não"
              checked={formData.periodoMenstrual === 'Não'}
              onChange={handleChange}
            />
            Não
          </label>
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Epilepsia?
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="epilepsia"
              value="Sim"
              checked={formData.epilepsia === 'Sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="epilepsia"
              value="Não"
              checked={formData.epilepsia === 'Não'}
              onChange={handleChange}
            />
            Não
          </label>
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Grávida ou lactante?
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="gravidaLactante"
              value="Sim"
              checked={formData.gravidaLactante === 'Sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="gravidaLactante"
              value="Não"
              checked={formData.gravidaLactante === 'Não'}
              onChange={handleChange}
            />
            Não
          </label>
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Alergia?
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="alergia"
              value="Sim"
              checked={formData.alergia === 'Sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="alergia"
              value="Não"
              checked={formData.alergia === 'Não'}
              onChange={handleChange}
            />
            Não
          </label>
        </label>
        {formData.alergia === 'Sim' && (
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Especifique:
            <input
              type="text"
              name="alergiaEspecificacao"
              value={formData.alergiaEspecificacao}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </label>
        )}

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Hepatite?
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="hepatite"
              value="Sim"
              checked={formData.hepatite === 'Sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="hepatite"
              value="Não"
              checked={formData.hepatite === 'Não'}
              onChange={handleChange}
            />
            Não
          </label>
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Herpes?
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="herpes"
              value="Sim"
              checked={formData.herpes === 'Sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="herpes"
              value="Não"
              checked={formData.herpes === 'Não'}
              onChange={handleChange}
            />
            Não
          </label>
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          HIV?
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="hiv"
              value="Sim"
              checked={formData.hiv === 'Sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="hiv"
              value="Não"
              checked={formData.hiv === 'Não'}
              onChange={handleChange}
            />
            Não
          </label>
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Queloide?
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="queloide"
              value="Sim"
              checked={formData.queloide === 'Sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="queloide"
              value="Não"
              checked={formData.queloide === 'Não'}
              onChange={handleChange}
            />
            Não
          </label>
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Fumante?
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="fumante"
              value="Sim"
              checked={formData.fumante === 'Sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="fumante"
              value="Não"
              checked={formData.fumante === 'Não'}
              onChange={handleChange}
            />
            Não
          </label>
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Cirurgia recente?
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="cirurgiaRecente"
              value="Sim"
              checked={formData.cirurgiaRecente === 'Sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="cirurgiaRecente"
              value="Não"
              checked={formData.cirurgiaRecente === 'Não'}
              onChange={handleChange}
            />
            Não
          </label>
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Faz uso de algum medicamento?
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="usoMedicamento"
              value="Sim"
              checked={formData.usoMedicamento === 'Sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="usoMedicamento"
              value="Não"
              checked={formData.usoMedicamento === 'Não'}
              onChange={handleChange}
            />
            Não
          </label>
        </label>
        {formData.usoMedicamento === 'Sim' && (
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Qual?
            <input
              type="text"
              name="medicamentoEspecificacao"
              value={formData.medicamentoEspecificacao}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </label>
        )}

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Hipertensão?
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="hipertensao"
              value="Sim"
              checked={formData.hipertensao === 'Sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="hipertensao"
              value="Não"
              checked={formData.hipertensao === 'Não'}
              onChange={handleChange}
            />
            Não
          </label>
        </label>
        {formData.hipertensao === 'Sim' && (
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Controlada?
            <label style={{ marginLeft: '10px' }}>
              <input
                type="radio"
                name="hipertensaoControlada"
                value="Sim"
                checked={formData.hipertensaoControlada === 'Sim'}
                onChange={handleChange}
              />
              Sim
            </label>
            <label style={{ marginLeft: '10px' }}>
              <input
                type="radio"
                name="hipertensaoControlada"
                value="Não"
                checked={formData.hipertensaoControlada === 'Não'}
                onChange={handleChange}
              />
              Não
            </label>
          </label>
        )}

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Diabetes?
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="diabetes"
              value="Sim"
              checked={formData.diabetes === 'Sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="diabetes"
              value="Não"
              checked={formData.diabetes === 'Não'}
              onChange={handleChange}
            />
            Não
          </label>
        </label>
        {formData.diabetes === 'Sim' && (
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Controlada?
            <label style={{ marginLeft: '10px' }}>
              <input
                type="radio"
                name="diabetesControlada"
                value="Sim"
                checked={formData.diabetesControlada === 'Sim'}
                onChange={handleChange}
              />
              Sim
            </label>
            <label style={{ marginLeft: '10px' }}>
              <input
                type="radio"
                name="diabetesControlada"
                value="Não"
                checked={formData.diabetesControlada === 'Não'}
                onChange={handleChange}
              />
              Não
            </label>
          </label>
        )}

        <label style={{ display: 'block', marginBottom: '10px' }}>
         Dor de cabeça forte e constante?
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="dorCabeca"
              value="Sim"
              checked={formData.dorCabeca === 'Sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="dorCabeca"
              value="Não"
              checked={formData.dorCabeca === 'Não'}
              onChange={handleChange}
            />
            Não
          </label>
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Doença crônica?
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="doencaCronica"
              value="Sim"
              checked={formData.doencaCronica === 'Sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="doencaCronica"
              value="Não"
              checked={formData.doencaCronica === 'Não'}
              onChange={handleChange}
            />
            Não
          </label>
        </label>
        {formData.doencaCronica === 'Sim' && (
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Especifique:
            <input
              type="text"
              name="doencaCronicaEspecificacao"
              value={formData.doencaCronicaEspecificacao}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </label>
        )}

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Já realizou clareamento antes?
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="clareamentoAnterior"
              value="Sim"
              checked={formData.clareamentoAnterior === 'Sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="clareamentoAnterior"
              value="Não"
              checked={formData.clareamentoAnterior === 'Não'}
              onChange={handleChange}
            />
            Não
          </label>
        </label>
        {formData.clareamentoAnterior === 'Sim' && (
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Doeu?
            <label style={{ marginLeft: '10px' }}>
              <input
                type="radio"
                name="clareamentoDoeu"
                value="Sim"
                checked={formData.clareamentoDoeu === 'Sim'}
                onChange={handleChange}
              />
              Sim
            </label>
            <label style={{ marginLeft: '10px' }}>
              <input
                type="radio"
                name="clareamentoDoeu"
                value="Não"
                checked={formData.clareamentoDoeu === 'Não'}
                onChange={handleChange}
              />
              Não
            </label>
          </label>
        )}

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Sente sensibilidade?
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="sensibilidade"
              value="Sim"
              checked={formData.sensibilidade === 'Sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="sensibilidade"
              value="Não"
              checked={formData.sensibilidade === 'Não'}
              onChange={handleChange}
            />
            Não
          </label>
        </label>
        {formData.sensibilidade === 'Sim' && (
          <>
            <label style={{ display: 'block', marginBottom: '10px' }}>
              Ao quente?
              <label style={{ marginLeft: '10px' }}>
                <input
                  type="radio"
                  name="sensibilidadeQuente"
                  value="Sim"
                  checked={formData.sensibilidadeQuente === 'Sim'}
                  onChange={handleChange}
                />
                Sim
              </label>
              <label style={{ marginLeft: '10px' }}>
                <input
                  type="radio"
                  name="sensibilidadeQuente"
                  value="Não"
                  checked={formData.sensibilidadeQuente === 'Não'}
                  onChange={handleChange}
                />
                Não
              </label>
            </label>
            <label style={{ display: 'block', marginBottom: '10px' }}>
              Ao gelado?
              <label style={{ marginLeft: '10px' }}>
                <input
                  type="radio"
                  name="sensibilidadeGelado"
                  value="Sim"
                  checked={formData.sensibilidadeGelado === 'Sim'}
                  onChange={handleChange}
                />
                Sim
              </label>
              <label style={{ marginLeft: '10px' }}>
                <input
                  type="radio"
                  name="sensibilidadeGelado"
                  value="Não"
                  checked={formData.sensibilidadeGelado === 'Não'}
                  onChange={handleChange}
                />
                Não
              </label>
            </label>
          </>
        )}

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Costuma escovar os dentes com qual creme dental?
          <input
            type="text"
            name="cremeDental"
            value={formData.cremeDental}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Quantas vezes ao dia?
          <input
            type="number"
            name="escovacaoDiaria"
            value={formData.escovacaoDiaria}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Tem bruxismo?
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="bruxismo"
              value="Sim"
              checked={formData.bruxismo === 'Sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="bruxismo"
              value="Não"
              checked={formData.bruxismo === 'Não'}
              onChange={handleChange}
            />
            Não
          </label>
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Alergia a anestesia?
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="alergiaAnestesia"
              value="Sim"
              checked={formData.alergiaAnestesia === 'Sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="alergiaAnestesia"
              value="Não"
              checked={formData.alergiaAnestesia === 'Não'}
              onChange={handleChange}
            />
            Não
          </label>
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Apertamento?
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="apertamento"
              value="Sim"
              checked={formData.apertamento === 'Sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="apertamento"
              value="Não"
              checked={formData.apertamento === 'Não'}
              onChange={handleChange}
            />
            Não
          </label>
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Alergia a alguma comida?
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="alergiaComida"
              value="Sim"
              checked={formData.alergiaComida === 'Sim'}
              onChange={handleChange}
            />
            Sim
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="alergiaComida"
              value="Não"
              checked={formData.alergiaComida === 'Não'}
              onChange={handleChange}
            />
            Não
          </label>
        </label>
      </fieldset>

      {/* Observações */}
      <fieldset style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
        <legend>Observações</legend>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Existe algum problema que julgue necessário informar ao profissional?
          <textarea
            name="problemaInformar"
            value={formData.problemaInformar}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px', minHeight: '100px' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Observação:
          <textarea
            name="observacao"
            value={formData.observacao}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px', minHeight: '100px' }}
          />
        </label>
      </fieldset>

      <button
        type="submit"
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#007BFF',
          color: '#FFF',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Enviar
      </button>
    </form>
  );
};

export default FormularioPage;