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

// 🔹 Imagens de Projetos
import AngelsImg from '../images/angels.png';
import CrudProjectImg from '../images/Crud_project.png';
import DashboardImg from '../images/dashboard.png';
import DiceRollImg from '../images/DiceRoll.jpeg';
import TodoImg from '../images/Todoimg.png';
import WeatherAppImg from '../images/weatherapp.jpg';

// 🔹 Imagens de Habilidades
import CssImg from '../images/css-3.png';
import HtmlImg from '../images/html.png';
import JsImg from '../images/js.png';
import NextJsImg from '../images/nextjs.png';
import NodeImg from '../images/nodejs.png';
import ReactImg from '../images/physics.png';
import PostgreImg from '../images/postgre.png';
import PrismaImg from '../images/prisma.svg';

interface ProjetoProps {
  nome: string;
  habilidades: string[];
  descricao: string;
  imagem: string;
  link: string;
}

export function Projetos() {
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
    {
      nome: 'WeatherApp',
      habilidades: ['React', 'NextJs'],
      descricao: 'Aplicação Next.js com integração da API do OpenWeather.',
      imagem: WeatherAppImg,
      link: 'https://arturweatherapp.vercel.app/',
    },
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
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1280 }, items: 3 },
    desktop: { breakpoint: { max: 1280, min: 768 }, items: 3 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section id="project">
      <Heading mb={8}>
        <h2>Projetos</h2>
      </Heading>

      <Box display="flex" justifyContent="center" alignItems="center" w="100%">
        <Box maxW="70%" w="100%">
          <Carousel
            responsive={responsive}
            infinite={false}
            autoPlay={false}
            keyBoardControl
            itemClass="carousel-item-padding"
          >
            {projetos.map((projeto) => (
              <Box
                key={projeto.nome}
                p={5}
                borderWidth="1px"
                borderRadius="lg"
                shadow="md"
                transition="transform 0.2s"
                _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
                textAlign="center"
              >
                <Heading as="h3" size="md" mb={3}>
                  {projeto.nome}
                </Heading>

                <ChakraImage
                  src={projeto.imagem}
                  alt={projeto.nome}
                  borderRadius="md"
                  h="250px"
                  w="100%"
                  objectFit="contain"
                  p={2}
                  mb={3}
                />

                <Text mb={3} noOfLines={3}>
                  {projeto.descricao}
                </Text>

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
        </Box>
      </Box>
    </section>
  );
}
