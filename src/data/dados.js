// src/data/dados.js
let pacientes = [];

export const adicionarPaciente = (paciente) => {
  pacientes.push(paciente);
};

export const getPacientes = () => {
  return pacientes;
};

export const atualizarPaciente = (id, dadosAtualizados) => {
  pacientes = pacientes.map((paciente) =>
    paciente.id === id ? { ...paciente, ...dadosAtualizados } : paciente
  );
};