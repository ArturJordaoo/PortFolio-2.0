import {
	Box,
	Button,
	Grid,
	Heading,
	Image,
	Text,
	Wrap,
	WrapItem,
} from '@chakra-ui/react'
import React from 'react'

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
	// Lista de projetos fictícios
	const projetos: ProjetoProps[] = [
		{
			nome: 'CRUD',
			habilidades: ['HTML', 'CSS'],
			descricao: 'Um projeto usando HTML e CSS',
			imagem: 'CRUDIMG',
			link: 'https://outlook.live.com/mail/0/inbox/id/AQQkADAwATY0MDABLTBlYTYtOWU2OC0wMAItMDAKABAAulonNU122kKHdsJlc5a1iA%3D%3D/sxs/AQMkADAwATY0MDABLTBlYTYtOWU2OC0wMAItMDAKAEYAAAM1fjP5TP9bT4rJYAuSQX3zBwBS5vr8S7zaT4ttPGxsAJNmawAAAgEJAAAAUub6%2FEu82k%2BLbTxsbACTZmsAAADhsj6jAAAAARIAEADNYq2v6QMsSowPp2awnieA?actSwt=true',
		},
		{
			nome: 'TO DO LIST',
			habilidades: ['HTML', 'CSS', 'JS'],
			descricao: 'Aplicação simples utilizando InternalStorage',
			imagem: 'TODOLISTIMG',
			link: 'https://arturjordaoo.github.io/ToDoApp/',
		},
		{
			nome: 'teste',
			habilidades: ['HTML', 'CSS', 'JS'],
			descricao: 'Um projeto usando HTML, CSS e JavaScript',
			imagem: 'TESTEIMG',
			link: '',
		},
		// Adicione mais projetos fictícios conforme necessário
	]

	const habilidadesImagens: Record<string, string> = {
		HTML: '../../public/images/html.png',
		CSS: '../../public/images/css-3.png',
		JS: '../../public/images/js.png',
	}

	const projetosImagens: Record<string, string> = {
		CRUDIMG: '../../public/images/Crud_project.png',
		TODOLISTIMG: '../../public/images/Todoimg.png',
		TESTEIMG: '../../public/images/Test_project.png',
	}

	// Filtrar os projetos com base nas habilidades selecionadas
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
			py="2rem"
			px="1.5rem"
			bgGradient="linear(to left, rgb(231, 225, 243), rgb(136, 116, 198))"
		>
			<Heading as="h2" size="xl" mb="2rem">
				Projetos
			</Heading>
			<Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap="1rem">
				{projetosFiltrados.map((projeto) => (
					<Box
						key={projeto.nome}
						p="1rem"
						borderWidth="1px"
						borderRadius="lg"
						shadow="md"
					>
						<Heading as="h3" size="md" mb="1rem">
							{projeto.nome}
						</Heading>
						<Image
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
									<Image
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
