import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function SIcons() {
	return (
		<>
			<div id="main-buttons">
				<a
					className="linkedin social"
					href="https://www.linkedin.com/in/artur-jord%C3%A3o-1340b0221/"
					role="button"
					id="linkedinBtn"
					target="_blank"
				>
					<FontAwesomeIcon className="icon" icon={faLinkedin} />
				</a>
				
					{/* <FontAwesomeIcon className="icon" icon={faGithub} /> */}
				
			</div>
		</>
	)
}
