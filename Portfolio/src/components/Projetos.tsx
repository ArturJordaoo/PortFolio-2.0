import React from 'react';

interface ProjetosProps {
  habilidades: string[];
}

export function Projetos({ habilidades }: ProjetosProps) {
  // Lista de projetos fictícios
  const projetos = [
    {
      nome: 'Projeto 1',
      habilidades: ['HTML', 'CSS'],
      descricao: 'Um projeto usando HTML e CSS',
    },
    {
      nome: 'Projeto 2',
      habilidades: ['JavaScript'],
      descricao: 'Um projeto usando JavaScript',
    },
    {
      nome: 'Projeto 3',
      habilidades: ['HTML', 'CSS', 'JavaScript'],
      descricao: 'Um projeto usando HTML, CSS e JavaScript',
    },
    // Adicione mais projetos fictícios conforme necessário
  ];

  // Filtrar os projetos com base nas habilidades selecionadas
  const projetosFiltrados = habilidades.length
    ? projetos.filter(projeto =>
        habilidades.every(habilidade => projeto.habilidades.includes(habilidade))
      )
    : projetos;

  return (
    <div>
      <h2>Projetos</h2>
      {projetosFiltrados.map(projeto => (
        <div key={projeto.nome}>
          <h3>{projeto.nome}</h3>
          <p>{projeto.descricao}</p>
          <p>Habilidades: {projeto.habilidades.join(', ')}</p>
        </div>
      ))}
    </div>
  );
}
