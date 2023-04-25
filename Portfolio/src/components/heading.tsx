import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Container, Row } from 'react-bootstrap'
import '../css/styles.css'
export function Heading() {
	return (<div className='heading'>
		<Container fluid className="text-center">
			<Row className="justify-content-center">
				<Col md={8}>
					<div id="heading" className="col">
						<h1 id="intro">
							Olá, sou <br /> <span className="nome">Artur Jordão</span> Desenvolvedor Full-Stack
						</h1>
						<div id="main-buttons">
							<a
								className="linkedin social"
								href="https://www.linkedin.com/in/artur-jord%C3%A3o-1340b0221/"
								role="button"
								id="linkedinBtn"
								target="_blank"
							>
								<FontAwesomeIcon className='icon' icon={faLinkedin} />
							</a>
							<a
								className="github social"
								href="https://github.com/ArturJordaoo"
								role="button"
								id="gitBtn"
								target="_blank"
							>
								<FontAwesomeIcon className='icon' icon={faGithub} />
							</a>
						</div>
					</div>
				</Col>
				<Col md={4} className="text-center">
					<div className="circle-container">
						<img
							src="public/images/artur_profilepic.jpg"
							alt="profile,pic"
							id="propic"
						/>
					</div>
				</Col>
			</Row>
		</Container>
		</div>
	)
}
