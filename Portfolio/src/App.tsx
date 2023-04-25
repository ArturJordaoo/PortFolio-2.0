import { Heading } from './components/heading'
import { AboutMe } from './components/aboutme'
import { Skills } from './components/skills'	

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min'

function App() {
	return (
		<div>
			<Heading />
			<AboutMe />
			<Skills />
		</div>
	)
}

export default App
