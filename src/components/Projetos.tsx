import {
  Box,
  Button,
  Image as ChakraImage,
  Heading,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../css/project.css';

// Define the types
interface ProjetoProps {
  nome: string;
  habilidades: string[];
  descricao: string;
  imagem: string;
  link: string;
}

interface ProjetosProps {
  habilidades: string[];
}

export function Projetos({ habilidades }: ProjetosProps) {
  // List of projects
  const projetos: ProjetoProps[] = [
    {
      nome: 'CRUD',
      habilidades: ['React', 'Node', 'PostgreSql'],
      descricao: 'Projeto de um CRUD integrando com o banco de dados',
      imagem: 'CRUDIMG',
      link: 'https://github.com/ArturJordaoo/CRUD-REACT-NODE-PostgreSql',
    },
    {
      nome: 'TO DO LIST',
      habilidades: ['HTML', 'CSS', 'JS'],
      descricao: 'Aplicação simples de um CRUD utilizando InternalStorage',
      imagem: 'TODOLISTIMG',
      link: 'https://arturjordaoo.github.io/ToDoApp/',
    },
    {
      nome: 'DiceRoll',
      habilidades: ['HTML', 'CSS', 'JS'],
      descricao: 'Um projeto  de um jogo de dado usando HTML, CSS e JavaScript',
      imagem: 'DICEROLL',
      link: 'https://arturjordaoo.github.io/PortFolio/DiceRoll/index.html',
    },
    {
      nome: 'WeatherApp',
      habilidades: ['React', 'NextJs'],
      descricao: 'Projeto realiado em Next.js com integração de API ',
      imagem: 'WEATHERAPP',
      link: 'https://arturweatherapp.vercel.app/',
    },
  ];

  const habilidadesImagens: Record<string, string> = {
    HTML: '/images/html.png',
    CSS: '/images/css-3.png',
    JS: '/images/js.png',
    Node: '/images/nodejs.png',
    React: '/images/physics.png',
    PostgreSql: '/images/postgre.png',
    NextJs: '/images/nextjs.png',
  };

  const projetosImagens: Record<string, string> = {
    CRUDIMG: '/images/Crud_project.png',
    TODOLISTIMG: '/images/Todoimg.png',
    DICEROLL: '/images/DiceRoll.jpeg',
    WEATHERAPP: '/images/weatherapp.jpg',
  };

  // Filter projects based on selected skills
  const projetosFiltrados = habilidades.length
    ? projetos.filter((projeto) =>
        habilidades.some((habilidade: string) =>
          projeto.habilidades.includes(habilidade),
        ),
      )
    : projetos;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="project">
      <h2>Projetos</h2>
      <div className="project-container">
        <Carousel
          responsive={responsive}
          infinite={false}
          autoPlay={false}
          keyBoardControl={true}
          max-h="90vh"
        >
          {projetosFiltrados.map((projeto) => (
            <Box
              key={projeto.nome}
              p="1rem"
              borderWidth="4px"
              borderRadius="lg"
              shadow="md"
              textAlign="center"
              mx="5px"
              minHeight="350px" // Ensure consistent box height
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              my="50px"
            >
              <Heading as="h3" size="md" mb="1rem">
                {projeto.nome}
              </Heading>
              <ChakraImage
                src={projetosImagens[projeto.imagem]}
                alt={projeto.nome}
                className="imagensProjeto"
                p="1rem"
                objectFit="cover" // Maintain aspect ratio
                mb="1rem"
              />
              <Text mb="1rem">{projeto.descricao}</Text>
              <Wrap spacing="1rem" mb="1rem" justify="center">
                {projeto.habilidades.map((habilidade) => (
                  <WrapItem key={habilidade}>
                    <ChakraImage
                      src={habilidadesImagens[habilidade]}
                      alt={habilidade}
                      w="2rem"
                      h="2rem"
                    />
                  </WrapItem>
                ))}
              </Wrap>
              <Button
                as="a"
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                colorScheme="teal"
                isDisabled={!projeto.link}
              >
                acesse aqui
              </Button>
            </Box>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
