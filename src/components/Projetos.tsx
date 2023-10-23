import {
	Box,
	Button,
	Image as ChakraImage,
	Grid,
	Heading,
	Text,
	Wrap,
	WrapItem,
} from '@chakra-ui/react'

interface ProjetoProps {
	nome: string
	habilidades: string[]
	descricao: string
	imagem: string
	link: string
}

interface ProjetosProps {
	habilidades: string[]
}

export function Projetos({ habilidades }: ProjetosProps) {
	const projetos: ProjetoProps[] = [
		{
			nome: 'CRUD',
			habilidades: ['React', 'Node', 'Postgre'],
			descricao: 'Um projeto usando HTML e CSS',
			imagem: 'CRUDIMG',
			link: 'https://github.com/ArturJordaoo/CRUD-REACT-NODE-PostgreSql',
		},
		{
			nome: 'TO DO LIST',
			habilidades: ['HTML', 'CSS', 'JS'],
			descricao: 'Aplicação simples utilizando InternalStorage',
			imagem: 'TODOLISTIMG',
			link: 'https://arturjordaoo.github.io/ToDoApp/',
		},
		{
			nome: 'DiceRoll',
			habilidades: ['HTML', 'CSS', 'JS'],
			descricao: 'Um projeto usando HTML, CSS e JavaScript',
			imagem: 'TESTEIMG',
			link: 'https://arturjordaoo.github.io/DiceRoll/',
		},
	]

	const habilidadesImagens: Record<string, string> = {
		HTML: '/images/html.png',
		CSS: '/images/css-3.png',
		JS: '/images/js.png',
		Node: '/images/nodejs.png',
		React: '/images/physics.png',
		Postgre: '/images/postgre.png',
	}

	const projetosImagens: Record<string, string> = {
		CRUDIMG: '/images/Crud_project.png',
		TODOLISTIMG: '/images/Todoimg.png',
		TESTEIMG: '/images/Test_project.png',
	}

	const projetosFiltrados = habilidades.length
		? projetos.filter((projeto) =>
				habilidades.some((habilidade) =>
					projeto.habilidades.includes(habilidade),
				),
		  )
		: projetos

	return (
		<Box
			id="project"
			py="4rem"
			px="3rem"
			bgGradient="linear(to left, rgb(231, 225, 243), rgb(136, 116, 198))"
		>
			<Heading as="h2" size="xl" mb="2rem">
				Projetos
			</Heading>
			<Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap="1rem">
				{projetosFiltrados.map((projeto) => (
					<Box
						key={projeto.nome}
						p="2.5rem"
						borderWidth="2px"
						borderRadius="lg"
						shadow="md"
					>
						<Heading as="h3" size="md" mb="1rem">
							{projeto.nome}
						</Heading>
						<ChakraImage
							src={projetosImagens[projeto.imagem]}
							alt={projeto.nome}
							className="imagensProjeto"
							p="1rem"
						/>
						<Button
							as="a"
							href={projeto.link}
							target="_blank"
							rel="noopener noreferrer"
							colorScheme="teal"
							mb="1rem"
							isDisabled={!projeto.link}
						>
							acesse aqui
						</Button>
						<Text mb="1rem">{projeto.descricao}</Text>
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
				))}
			</Grid>
		</Box>
	)
}
