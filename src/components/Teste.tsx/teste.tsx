import { Box, Wrap, WrapItem } from '@chakra-ui/react';
import { Heading } from '../heading';
import { Button } from 'react-bootstrap';

interface IProps {
  projeto: {
    nome: string;
    descricao: string;
    imagem: string;
    link: string;
  };
}

const teste = (projeto: IProps) => {
  return (
    <Box
      key={projeto.projeto.nome}
      className="carousel-item"
      p="1rem"
      borderWidth="4px"
      borderRadius="lg"
      shadow="md"
    >
      <Heading as="h3" size="md" mb="1rem">
        {projeto.projeto.nome}
      </Heading>
      <ChakraImage
        src={projeto.projetosImagens[projeto.projeto.imagem]}
        alt={projeto.projeto.nome}
        className="imagensProjeto.projeto"
        p="1rem"
      />
      <Button
        as="a"
        href={projeto.projeto.link}
        target="_blank"
        rel="noopener noreferrer"
        colorScheme="teal"
        mb="1rem"
        isDisabled={!projeto.projeto.link}
      >
        acesse aqui
      </Button>
      <Text mb="1rem">{projeto.projeto.descricao}</Text>
      <Wrap spacing="1rem" mb="1rem">
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
    </Box>
  );
};

export default teste;
