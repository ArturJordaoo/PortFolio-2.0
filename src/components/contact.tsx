import {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertTitle,
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	Textarea,
	VStack,
} from '@chakra-ui/react'
import emailjs from 'emailjs-com'
import React, { FormEvent, useState } from 'react'

const SERVICE_ID = 'service_pw16i49'
const TEMPLATE_ID = 'template_76n1ejf'
const USER_ID = 'EsagQ-isKHsQj0ZwI'

interface MyFormData {
	name: string
	email: string
	message: string
}

const Contatos: React.FC = () => {
	const [submitted, setSubmitted] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const form = e.currentTarget
		const formData = new FormData(form)

		const data: MyFormData = {
			name: formData.get('name') as string,
			email: formData.get('email') as string,
			message: formData.get('message') as string,
		}

		// ANTI SQL injection
		if (
			/[;<>,]/.test(data.name) ||
			/[;<>,]/.test(data.email) ||
			/[;<>,]/.test(data.message)
		) {
			setError('Caracteres inválidos detectados.')
			return
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!emailRegex.test(data.email)) {
			setError('Formato de e-mail inválido.')
			return
		}

		try {
			setError(null)

			const response = await emailjs.sendForm(
				SERVICE_ID,
				TEMPLATE_ID,
				form,
				USER_ID,
			)

			if (response && response.status === 200) {
				setSubmitted(true)
				form.reset()
			} else {
				throw new Error('Erro no formulário')
			}
		} catch (error) {
			console.error('Erro ao enviar o formulário:', error)
			setError('Erro ao enviar o formulário. Tente novamente mais tarde.')
		}
	}

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			minHeight="95vh"
			id="contatosS"
		>
			<form onSubmit={handleSubmit} method="POST">
				<VStack spacing={4} align="stretch">
					{error && (
						<Alert status="error">
							<AlertIcon />
							<VStack align="start">
								<AlertTitle>Error</AlertTitle>
								<AlertDescription>{error}</AlertDescription>
							</VStack>
						</Alert>
					)}

					{submitted ? (
						<Box textAlign="center">
							<h2>Obrigado!</h2>
							<div>Em breve, entro em contato.</div>
						</Box>
					) : (
						<>
							<FormControl>
								<FormLabel>Nome</FormLabel>
								<Input
									type="text"
									placeholder="Seu nome"
									name="name"
									required
								/>
							</FormControl>
							<FormControl>
								<FormLabel>Email</FormLabel>
								<Input type="email" placeholder="Email" name="email" required />
							</FormControl>
							<FormControl>
								<FormLabel>Escreva algo</FormLabel>
								<Textarea placeholder="Sua mensagem" name="message" required />
							</FormControl>
							<Button type="submit" colorScheme="teal">
								Enviar
							</Button>
						</>
					)}
				</VStack>
			</form>
		</Box>
	)
}

export default Contatos
