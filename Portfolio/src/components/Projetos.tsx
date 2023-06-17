import '../css/project.css';

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
      habilidades: ['HTML', 'CSS', 'JS'],
      descricao: 'Aplicação simples utilizando InternalStorage',
      link: '',
    },
    {
      nome: 'teste',
      habilidades: ['HTML', 'CSS', 'JS'],
      descricao: 'Um projeto usando HTML, CSS e JavaScript',
      link: '',
    },
    // Adicione mais projetos fictícios conforme necessário
  ];

  // Mapear as habilidades para as imagens correspondentes
  const habilidadesImagens: Record<string, string> = {
    HTML: '../../public/images//html.png',
    CSS: '../../public/images//css-3.png',
    JS: '../../public/images//js.png',
    
  };

  // Filtrar os projetos com base nas habilidades selecionadas
  const projetosFiltrados = habilidades.length
    ? projetos.filter((projeto) => habilidades.some((habilidade) => projeto.habilidades.includes(habilidade)))
    : projetos;

  return (
    <div id="project">
      <h2>Projetos</h2>
      {projetosFiltrados.map((projeto) => (
        <div key={projeto.nome}>
          <h3>{projeto.nome}</h3>
          <button className="btn bg-light">
            <a href={projeto.link} target="_blank" rel="noopener noreferrer">
              acesse aqui
            </a>
          </button>
          <p>{projeto.descricao}</p>Skills:
          <div>
            
            {projeto.habilidades.map((habilidade) => (
              <img key={habilidade} src={habilidadesImagens[habilidade]} alt={habilidade} className='sk-img' />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
