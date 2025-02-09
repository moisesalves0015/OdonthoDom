// src/pages/Admin.js
import React, { useState } from 'react';
import { getPacientes, atualizarPaciente } from '../data/dados';
import CardPaciente from '../components/CardPaciente';

const Admin = () => {
  const [pacientes, setPacientes] = useState(getPacientes());

  const handleAtualizarPaciente = (id, pressaoArterial, saturacaoOxigenio) => {
    atualizarPaciente(id, { pressaoArterial, saturacaoOxigenio });
    setPacientes(getPacientes()); // Atualiza a lista de pacientes
  };

  return (
    <div>
      <h1>Página de Administração</h1>
      {pacientes.map((paciente) => (
        <CardPaciente
          key={paciente.id}
          paciente={paciente}
          onAtualizarPaciente={handleAtualizarPaciente}
        />
      ))}
    </div>
  );
};

export default Admin;