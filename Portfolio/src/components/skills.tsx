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
				className="skills-img"
				type="button"
				onClick={() => onSelectHabilidade('React')}
			>
				<img
					className="sk-img"
					src="../../public/images/physics.png"
					alt="program"
				/>
				<br />
				<span className="">React</span>
			</button>
			<button
				className="skills-img"
				type="button"
				onClick={() => onSelectHabilidade('CSS	')}
			>
				<img
					className="sk-img"
					src="../../public/images/css-3.png"
					alt="program"
				/>
				<br />
				CSS
			</button>
			<button
				className="skills-img"
				type="button"
				onClick={() => onSelectHabilidade('React')}
			>
				<img
					className="sk-img"
					src="../../public/images/js.png"
					alt="program"
				/>
				<br />
				JS
			</button>
			<button
				className="skills-img"
				type="button"
				onClick={() => onSelectHabilidade('React')}
			>
				<img
					className="sk-img"
					src="../../public/images/html.png"
					alt="program"
				/>
				<br />
				HTML
			</button>
			<h3>Outras</h3>
			<button
				className="skills-img"
				type="button"
				onClick={() => onSelectHabilidade('React')}
			><img
			className="sk-img"
			src="../../public/images/bootstrap.png"
			alt="program"
		/></button>
			<h3>backend </h3>
			<button
				className="skills-img"
				type="button"
				onClick={() => onSelectHabilidade('Node')}
			></button>
		</div>
	)
}
