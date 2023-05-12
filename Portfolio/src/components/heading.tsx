import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Container, Row } from 'react-bootstrap'
import '../css/heading.css'


export function Heading() {
	return (
		<div className="heading">
			<Container fluid className="text-center">
				<Row className="justify-content-center">
					<Col md={6}>
						<div id="heading" className="col">
							<h1 id="intro">
								Olá, sou <br /> <span className="nome">Artur Jordão</span>{' '}
								Desenvolvedor Full-Stack
							</h1>
							<div className="wrapper">
								<a
									className="linkedin icon"
									href="https://www.linkedin.com/in/artur-jord%C3%A3o-1340b0221/"
									role="button"
									id="linkedinBtn"
									target="_blank"
								>
									<div className="tooltip">LinkedIn</div>
									<FontAwesomeIcon
										className="icon-container"
										icon={faLinkedin}
									/>
								</a>
								<a
									className="github icon"
									href="https://github.com/ArturJordaoo"
									role="button"
									id="gitBtn"
									target="_blank"
								>
									<div className="tooltip">GitHub</div>
									<FontAwesomeIcon className="icon-container" icon={faGithub} />
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
						<button className='btn btn-light'>
							<FontAwesomeIcon className='icon-container' icon= {faFile}/>
								<span>teste</span>
								</button>
					</Col>
				</Row>
			</Container>
		</div>
	)
}
