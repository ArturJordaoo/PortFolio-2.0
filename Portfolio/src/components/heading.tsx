import { faGithub, faLinkedin, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Container, Row } from 'react-bootstrap'
import '../css/heading.css'
import head from '../assets/head.svg'


export function Heading() {
	return (
		<div id='head'>
		<div className="heading">
			<Container fluid className="text-center">
				<Row className="">
					<Col md={7}>
						<div id="heading" className="col">
							<h1 id="intro"	>
								Olá, sou <br /> <span className="nome">Artur Jordão</span>{' '}
								<br />
								Web Developer
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
								<a
									className="whatsapp icon"
									href="https://wa.me/5581982597573"
									role="button"
									id="whatsBtn"
									target="_blank"
								>
									<div className="tooltip">WhatsApp</div>
									<FontAwesomeIcon className="icon-container" icon={faWhatsapp} />
								</a>
								
							</div>
							<div className='curriculo'><button className='btn btn-light'>
							<FontAwesomeIcon className='icon-container' icon= {faFile}/>
								<span> CV DOWNLOAD  </span>
								</button></div>
							
						</div>
					</Col>
						<Col md={5} className='profile'>
						<div className='propic'>
							<img
								src={head}
								alt="profile,pic"
								
							/>
						</div>
						
					</Col>
				</Row>
			</Container>
		</div>
		</div>
	)
}
