import { AboutMe } from './components/aboutme'
import { Heading } from './components/heading'
import { Nav } from './components/nav'
import { Skills } from './components/skills'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min'


function App() {
	return (
		<div>
			<Nav />
			<Heading />
			<AboutMe />
			<Skills />
		</div>
	)
}

export default App
