import { faReact, faNode, faGit, faHtml5, faCss3, faJavascript } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/skills.css'

interface SkillsProps {
	onSelectHabilidade: (habilidade: string) => void
}

export function Skills({ onSelectHabilidade }: SkillsProps) {
	return (
		<div id="skills">
			<h2>Skills</h2>
			<p>possuo diversas habilidades, mas porque não mostrá-las em projetos</p>
			<p>
				apenas clicar em uma delas que elas filtram os projetos em que são
				aplicadas
			</p>
      <h3>Front-end skills</h3>
			<button
				type="button"
				onClick={() => onSelectHabilidade('React')}
				className="btn btn-light "
			>
				<FontAwesomeIcon icon={faReact} /><br />
        <span className="">teste</span>
			</button>
			<button
				type="button"
				onClick={() => onSelectHabilidade('React')}
				className="btn btn-light "
			>
				<FontAwesomeIcon icon={faCss3} />
        <br />
        CSS
			</button>
			<button
				type="button"
				onClick={() => onSelectHabilidade('React')}
				className="btn btn-light "
			>
				<FontAwesomeIcon icon={faHtml5} /><br />
        HTML
			</button>
			<h3>Outras</h3>
			<button
				type="button"
				onClick={() => onSelectHabilidade('React')}
				className="btn btn-light "
			>
				<FontAwesomeIcon icon={faGit} />
			
			</button>
      <h3>backend </h3>
			<button
				type="button"
				onClick={() => onSelectHabilidade('Node')}
				className="btn btn-light "
			>
				<FontAwesomeIcon icon={faNode} />
				
			</button>
		</div>
	)
}
