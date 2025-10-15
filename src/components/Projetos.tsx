import {
  Box,
  Button,
  Heading,
  Image as ChakraImage,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../css/project.css';

// 🔹 Imagens de Projetos
import CrudProjectImg from '../images/Crud_project.png';
import DiceRollImg from '../images/DiceRoll.jpeg';
import TodoImg from '../images/Todoimg.png';
import WeatherAppImg from '../images/weatherapp.jpg';
import DashboardImg from '../images/dashboard.png';
import AngelsImg from '../images/angels.png';

// 🔹 Imagens de Habilidades
import HtmlImg from '../images/html.png';
import CssImg from '../images/css-3.png';
import JsImg from '../images/js.png';
import NodeImg from '../images/nodejs.png';
import ReactImg from '../images/physics.png';
import PostgreImg from '../images/postgre.png';
import NextJsImg from '../images/nextjs.png';
import PrismaImg from '../images/prisma.svg';

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
  const habilidadesImagens: Record<string, string> = {
    HTML: HtmlImg,
    CSS: CssImg,
    JS: JsImg,
    Node: NodeImg,
    React: ReactImg,
    Postgre: PostgreImg,
    NextJs: NextJsImg,
    Prisma: PrismaImg,
  };

  const projetos: ProjetoProps[] = [
    {
      nome: 'CRUD',
      habilidades: ['React', 'Node', 'Postgre'],
      descricao:
        'Projeto de um CRUD integrando com o banco de dados PostgreSQL.',
      imagem: CrudProjectImg,
      link: 'https://github.com/ArturJordaoo/CRUD-REACT-NODE-PostgreSql',
    },
    {
      nome: 'TO DO LIST',
      habilidades: ['HTML', 'CSS', 'JS'],
      descricao: 'Aplicação simples de um CRUD utilizando LocalStorage.',
      imagem: TodoImg,
      link: 'https://arturjordaoo.github.io/ToDoApp/',
    },
    {
      nome: 'DiceRoll',
      habilidades: ['HTML', 'CSS', 'JS'],
      descricao: 'Um jogo de dado desenvolvido com HTML, CSS e JavaScript.',
      imagem: DiceRollImg,
      link: 'https://arturjordaoo.github.io/PortFolio/DiceRoll/index.html',
    },
    {
      nome: 'WeatherApp',
      habilidades: ['React', 'NextJs'],
      descricao: 'Aplicação Next.js com integração da API do OpenWeather.',
      imagem: WeatherAppImg,
      link: 'https://arturweatherapp.vercel.app/',
    },
    {
      nome: 'DashBoard de carros',
      habilidades: ['React', 'NextJs', 'Prisma'],
      descricao:
        'Dashboard de gerenciamento de veículos utilizando Next.js e Prisma ORM.',
      imagem: DashboardImg,
      link: 'https://veiculosdashboard.vercel.app/signin',
    },
    {
      nome: 'Angels',
      habilidades: ['Python', 'CSS', 'JS', 'HTML'],
      descricao:
        'Projeto em parceria com o DotLab para predição de morte fetal.',
      imagem: AngelsImg,
      link: 'https://angels.dotlabbrazil.com.br/',
    },
  ];

  const projetosFiltrados = habilidades.length
    ? projetos.filter((p) => habilidades.some((h) => p.habilidades.includes(h)))
    : projetos;

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1280 }, items: 3 },
    desktop: { breakpoint: { max: 1280, min: 768 }, items: 3 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section id="project">
      <h2>Projetos</h2>
      <div className="project-container">
        <Carousel
          responsive={responsive}
          infinite={false}
          autoPlay={false}
          keyBoardControl
        >
          {projetosFiltrados.map((projeto) => (
            <Box
              key={projeto.nome}
              p={4}
              borderWidth="2px"
              borderRadius="lg"
              shadow="md"
              textAlign="center"
              mx={2}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              minH="380px"
            >
              <Heading as="h3" size="md" mb={3}>
                {projeto.nome}
              </Heading>

              <ChakraImage
                src={projeto.imagem}
                alt={projeto.nome}
                className="imagensProjeto"
                borderRadius="md"
                objectFit="cover"
                mb={3}
              />

              <Text mb={3}>{projeto.descricao}</Text>

              <Wrap spacing="0.5rem" mb={3} justify="center">
                {projeto.habilidades.map((h) =>
                  habilidadesImagens[h] ? (
                    <WrapItem key={h}>
                      <ChakraImage
                        src={habilidadesImagens[h]}
                        alt={h}
                        w="2rem"
                        h="2rem"
                      />
                    </WrapItem>
                  ) : null,
                )}
              </Wrap>

              <Button
                as="a"
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                colorScheme="teal"
              >
                Acessar Projeto
              </Button>
            </Box>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
