import'../css/project.css'

interface ProjetosProps {
  habilidades: string[];
}

export function Projetos({ habilidades }: ProjetosProps) {
  // Lista de projetos fictícios
  const projetos = [
    {
      nome: 'CRUD',
      habilidades: ['HTML', 'CSS'],
      descricao: 'Um projeto usando HTML e CSS',
      link: 'https://outlook.live.com/mail/0/inbox/id/AQQkADAwATY0MDABLTBlYTYtOWU2OC0wMAItMDAKABAAulonNU122kKHdsJlc5a1iA%3D%3D/sxs/AQMkADAwATY0MDABLTBlYTYtOWU2OC0wMAItMDAKAEYAAAM1fjP5TP9bT4rJYAuSQX3zBwBS5vr8S7zaT4ttPGxsAJNmawAAAgEJAAAAUub6%2FEu82k%2BLbTxsbACTZmsAAADhsj6jAAAAARIAEADNYq2v6QMsSowPp2awnieA?actSwt=true',
    },
    {
      nome: 'TO DO LIST',
      habilidades: ['HTML, CSS, JavaScript'],
      descricao: 'Aplicação simples utilizando InternalStorage',
      link: '',
    },
    {
      nome: 'teste',
      habilidades: ['HTML', 'CSS', 'JavaScript'],
      descricao: 'Um projeto usando HTML, CSS e JavaScript',
      link: '',
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
    <div id='project'>
      <h2 >Projetos</h2>
      {projetosFiltrados.map(projeto => (
        <div key={projeto.nome}>
          <h3>{projeto.nome}</h3>
          <button className='btn bg-light'>
            <a href={projeto.link} target='_blank'>acesse aqui</a>
            </button>
          <p>{projeto.descricao}</p>
          <p>Habilidades: {projeto.habilidades.join(', ')}</p>
        </div>
      ))}
    </div>
  );
}
