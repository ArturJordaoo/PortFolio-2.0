import { AboutMe } from './components/aboutme'
import {Filtred} from './components/filtred'
import { Heading } from './components/heading'
import { Nav } from './components/nav'


import { ChakraProvider } from '@chakra-ui/react'
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min'
//chakra

function App() {
	return (
		<ChakraProvider>
			<div className="project">
				<Nav />
				<Heading />
				<AboutMe />
				<Filtred/>
			</div>
		</ChakraProvider>
	)
}

export default App
