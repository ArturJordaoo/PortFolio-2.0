import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import '../css/skills.css'
interface SkillsProps {
	onSelectHabilidade: (habilidades: string[]) => void
}

import IconBootstrap from '../../public/images/bootstrap.png'
import IconCss from '../../public/images/css-3.png'
import IconHtml from '../../public/images/html.png'
import IconJs from '../../public/images/js.png'
import IconNode from '../../public/images/nodejs.png'
import IconReact from '../../public/images/physics.png'
import IconNextJs from '../../public/images/nextjs.png' 
import {
	default as IconPostgre,
} from '../../public/images/postgre.png'
import IconPython from '../../public/images/python.png'

export function Skills({ onSelectHabilidade }: SkillsProps) {
	const [selectedSkills, setSelectedSkills] = useState<string[]>([])

	const handleSkillClick = (skill: string) => {
		let updatedSkills: string[]

		if (selectedSkills.includes(skill)) {
			updatedSkills = selectedSkills.filter((selected) => selected !== skill)
		} else {
			updatedSkills = [...selectedSkills, skill]
		}

		setSelectedSkills(updatedSkills)

		onSelectHabilidade(updatedSkills)
	}

	const isSkillSelected = (skill: string) => selectedSkills.includes(skill)

	return (
		<div id="skills">
			<h2>Skills</h2>
			<p>possuo diversas habilidades, mas porque não mostrá-las em projetos
				<br />
				<br />
			apenas clicar em uma delas que elas filtram os projetos em que são
				aplicadas
			</p>


			<section className="skill-section">
				<h3>Front-end skills</h3>
				<button
					className={`skills-img ${isSkillSelected('React') ? 'selected' : ''}`}
					type="button"
					onClick={() => handleSkillClick('React')}
				>
					{isSkillSelected('React') && (
						<FontAwesomeIcon
							icon={faCheck as IconProp}
							className="check-icon"
						/>
					)}
					<img className="sk-img" src={IconReact} alt="program" />
					<span className="">React</span>
				</button>
				<button
					className={`skills-img ${isSkillSelected('CSS') ? 'selected' : ''}`}
					type="button"
					onClick={() => handleSkillClick('CSS')}
				>
					{isSkillSelected('CSS') && (
						<FontAwesomeIcon
							icon={faCheck as IconProp}
							className="check-icon"
						/>
					)}
					<img className="sk-img" src={IconCss} alt="program" />
					<span>CSS</span>
				</button>
				<button
					className={`skills-img ${isSkillSelected('JS') ? 'selected' : ''}`}
					type="button"
					onClick={() => handleSkillClick('JS')}
				>
					{isSkillSelected('JS') && (
						<FontAwesomeIcon
							icon={faCheck as IconProp}
							className="check-icon"
						/>
					)}
					<img className="sk-img" src={IconJs} alt="program" />
					<span>JS</span>
				</button>
				<button
					className={`skills-img ${isSkillSelected('HTML') ? 'selected' : ''}`}
					type="button"
					onClick={() => handleSkillClick('HTML')}
				>
					{isSkillSelected('HTML') && (
						<FontAwesomeIcon
							icon={faCheck as IconProp}
							className="check-icon"
						/>
					)}
					<img className="sk-img" src={IconHtml} alt="program" />
					<span>HTML</span>
				</button>
				{/* Add other front-end skills buttons here */}
			</section>

			<section className="skill-section">
				<h3>Outras</h3>
				<button
					className={`skills-img ${
						isSkillSelected('PostgreSql') ? 'selected' : ''
					}`}
					type="button"
					onClick={() => handleSkillClick('PostgreSql')}
				>
					{isSkillSelected('PostgreSql') && (
						<FontAwesomeIcon
							icon={faCheck as IconProp}
							className="check-icon"
						/>
					)}
					<img src={IconPostgre} alt="" className="sk-img" />
					<span>PostgreSql</span>
				</button>
				<button
					className={`skills-img ${
						isSkillSelected('NextJs') ? 'selected' : ''
					}`}
					type="button"
					onClick={() => handleSkillClick('NextJs')}
				>
					{isSkillSelected('NextJs') && (
						<FontAwesomeIcon
							icon={faCheck as IconProp}
							className="check-icon"
						/>
					)}
					<img className="sk-img" src={IconNextJs} alt="program" />
					<span>NextJs</span>
				</button>
				<button
					className={`skills-img ${
						isSkillSelected('Bootstrap') ? 'selected' : ''
					}`}
					type="button"
					onClick={() => handleSkillClick('Bootstrap')}
				>
					{isSkillSelected('Bootstrap') && (
						<FontAwesomeIcon
							icon={faCheck as IconProp}
							className="check-icon"
						/>
					)}
					<img className="sk-img" src={IconBootstrap} alt="program" />
					<span>Bootstrap</span>
				</button>
				{/* Add other "Outras" skills buttons here */}
			</section>

			<section className="skill-section">
				<h3>Backend</h3>
				<button
					className={`skills-img ${isSkillSelected('Node') ? 'selected' : ''}`}
					type="button"
					onClick={() => handleSkillClick('Node')}
				>
					{isSkillSelected('Node') && (
						<FontAwesomeIcon
							icon={faCheck as IconProp}
							className="check-icon"
						/>
					)}
					<img src={IconNode} alt="Node" className="sk-img bg-light rounded" />
					<span>Node</span>
				</button>
				<button
					className={`skills-img ${
						isSkillSelected('Python') ? 'selected' : ''
					}`}
					type="button"
					onClick={() => handleSkillClick('Python')}
				>
					{isSkillSelected('Python') && (
						<FontAwesomeIcon
							icon={faCheck as IconProp}
							className="check-icon"
						/>
					)}
					<img src={IconPython} alt="" className="sk-img" />
					<span>Python</span>
				</button>
				{/* Add other backend skills buttons here */}
			</section>
		</div>
	)
}
