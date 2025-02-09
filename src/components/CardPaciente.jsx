// src/components/CardPaciente.jsx
import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const CardPaciente = ({ paciente, onAtualizarPaciente }) => {
  const [pressaoArterial, setPressaoArterial] = useState(paciente.pressaoArterial || '');
  const [saturacaoOxigenio, setSaturacaoOxigenio] = useState(paciente.saturacaoOxigenio || '');
  const [editando, setEditando] = useState(!paciente.pressaoArterial && !paciente.saturacaoOxigenio);

  const handleAtualizar = () => {
    onAtualizarPaciente(paciente.id, pressaoArterial, saturacaoOxigenio);
    setEditando(false); // Sai do modo de edição
  };

  const handleImprimir = () => {
    const doc = new jsPDF();

    // Configurações gerais
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(33, 37, 41); // Cor escura

    // Adiciona o logo da clínica
    const logoUrl = '/logo2.png'; // Caminho para o logo na pasta public
    doc.addImage(logoUrl, 'PNG', 10, 10, 40, 20);

    // Título do documento
    doc.setFontSize(18);
    doc.text('Formulário de Anamnese - Digital', 70, 20);

    // Dados Pessoais
    const dadosPessoais = [
      ['Nome', paciente.nome],
      ['Nascimento', paciente.nascimento],
      ['Ocupação', paciente.ocupacao],
      ['Endereço', paciente.endereco],
      ['RG', paciente.rg],
      ['CPF', paciente.cpf],
    ];

    doc.autoTable({
      startY: 40,
      head: [['Dados Pessoais', '']],
      body: dadosPessoais,
      theme: 'striped',
      styles: { fontSize: 10, cellPadding: 2, font: 'helvetica' },
      headStyles: { fillColor: '#33425F', textColor: '#FFF', fontStyle: 'bold' },
      alternateRowStyles: { fillColor: '#F8F9FA' },
    });

    // Saúde Geral
    const saudeGeral = [
      ['Pressão Arterial', paciente.pressaoArterial],
      ['Saturação de Oxigênio', paciente.saturacaoOxigenio],
      ['Tratamento Médico', paciente.tratamentoMedico],
      ['Motivo do Tratamento', paciente.motivoTratamento],
      ['Período Menstrual', paciente.periodoMenstrual],
      ['Epilepsia', paciente.epilepsia],
      ['Grávida/Lactante', paciente.gravidaLactante],
      ['Alergia', paciente.alergia],
      ['Especificação de Alergia', paciente.alergiaEspecificacao],
      ['Hepatite', paciente.hepatite],
      ['Herpes', paciente.herpes],
      ['HIV', paciente.hiv],
      ['Queloide', paciente.queloide],
      ['Fumante', paciente.fumante],
      ['Cirurgia Recente', paciente.cirurgiaRecente],
      ['Uso de Medicamento', paciente.usoMedicamento],
      ['Medicamento Especificado', paciente.medicamentoEspecificacao],
      ['Hipertensão', paciente.hipertensao],
      ['Hipertensão Controlada', paciente.hipertensaoControlada],
      ['Diabetes', paciente.diabetes],
      ['Diabetes Controlada', paciente.diabetesControlada],
      ['Dor de Cabeça', paciente.dorCabeca],
      ['Doença Crônica', paciente.doencaCronica],
      ['Especificação de Doença Crônica', paciente.doencaCronicaEspecificacao],
      ['Clareamento Anterior', paciente.clareamentoAnterior],
      ['Clareamento Doeu', paciente.clareamentoDoeu],
      ['Sensibilidade', paciente.sensibilidade],
      ['Sensibilidade ao Quente', paciente.sensibilidadeQuente],
      ['Sensibilidade ao Gelado', paciente.sensibilidadeGelado],
      ['Creme Dental', paciente.cremeDental],
      ['Escovação Diária', paciente.escovacaoDiaria],
      ['Bruxismo', paciente.bruxismo],
      ['Alergia a Anestesia', paciente.alergiaAnestesia],
      ['Apertamento', paciente.apertamento],
      ['Alergia a Comida', paciente.alergiaComida],
      ['Problema a Informar', paciente.problemaInformar],
      ['Observação', paciente.observacao],
    ];

    doc.autoTable({
      startY: doc.autoTable.previous.finalY + 20,
      head: [['Saúde Geral', '']],
      body: saudeGeral,
      theme: 'striped',
      styles: { fontSize: 10, cellPadding: 2, font: 'helvetica' },
      headStyles: { fillColor: '#33425F', textColor: '#FFF', fontStyle: 'bold' },
      alternateRowStyles: { fillColor: '#F8F9FA' },
    });

    // Adiciona espaço antes das assinaturas
    const finalY = doc.autoTable.previous.finalY + 20;

    // Verifica se há espaço suficiente para as assinaturas
    if (finalY > 280) {
      doc.addPage(); // Adiciona uma nova página se não houver espaço
    }

// Assinaturas
doc.setFontSize(12);

// Data
const dataAtual = new Date().toLocaleDateString(); // Obtém a data atual no formato local
doc.text(`Data: ${dataAtual}`, 10, finalY); // Adiciona a data no topo

// Declaração
doc.setFontSize(10);
doc.text(
  'Declaro que as informações fornecidas são verdadeiras e estou ciente de que informações incorretas podem comprometer meu tratamento.',
  10,
  finalY + 10,
  { maxWidth: 180 }
);

// Assinatura do Paciente
doc.setFontSize(12);
doc.text('Assinatura do Paciente:', 10, finalY + 30); // Texto da assinatura
doc.line(10, finalY + 40, 80, finalY + 40); // Linha para assinatura
doc.text(`${paciente.nome}`, 10, finalY + 45); // Nome do paciente

// Assinatura da Clínica
doc.text('Assinatura da Clínica:', 110, finalY + 30); // Texto da assinatura
doc.line(110, finalY + 40, 180, finalY + 40); // Linha para assinatura
doc.text('Clínica OdontoDom', 110, finalY + 45); // Nome da clínica


    // Salva o PDF
    doc.save(`anamnese_${paciente.nome}.pdf`);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{paciente.nome}</h3>
      <p>Nascimento: {paciente.nascimento}</p>
      <p>Ocupação: {paciente.ocupacao}</p>
      <p>Endereço: {paciente.endereco}</p>
      <p>RG: {paciente.rg}</p>
      <p>CPF: {paciente.cpf}</p>

      {editando ? (
        <>
          <label>
            Pressão Arterial:
            <input
              type="text"
              value={pressaoArterial}
              onChange={(e) => setPressaoArterial(e.target.value)}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </label>
          <label>
            Saturação de Oxigênio:
            <input
              type="number"
              value={saturacaoOxigenio}
              onChange={(e) => setSaturacaoOxigenio(e.target.value)}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </label>
          <button onClick={handleAtualizar} style={{ marginTop: '10px' }}>
            Atualizar
          </button>
        </>
      ) : (
        <>
          <p>Pressão Arterial: {paciente.pressaoArterial}</p>
          <p>Saturação de Oxigênio: {paciente.saturacaoOxigenio}%</p>
          <button onClick={handleImprimir} style={{ marginTop: '10px' }}>
            Imprimir
          </button>
        </>
      )}
    </div>
  );
};

export default CardPaciente;