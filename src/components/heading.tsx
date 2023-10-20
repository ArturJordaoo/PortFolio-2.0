import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import head from '../assets/head.svg';
import '../css/heading.css';

export function Heading() {
  return (
    <div>
      <div className="heading">
        <Container fluid className="text-center" id="head">
          <Row className="d-flex align-items-center justify-content-center">
            <Col xs={12} sm={12} md={6}>
              <div id="heading">
                <h1 id="intro">
                  Olá, sou <br />{' '}
                  <span className="nome">Artur Jordão</span> <br />
                  Desenvolvedor Web
                </h1>
                <div className="wrapper">
                  <a
                    className="linkedin icon"
                    href="https://www.linkedin.com/in/artur-jord%C3%A3o-1340b0221/"
                    role="button"
                    id="linkedinBtn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="tooltip">LinkedIn</div>
                    <FontAwesomeIcon className="icon-container" icon={faLinkedin} />
                  </a>
                  <a
                    className="github icon"
                    href="https://github.com/ArturJordaoo"
                    role="button"
                    id="gitBtn"
                    target="_blank"
                    rel="noopener noreferrer"
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
                    rel="noopener noreferrer"
                  >
                    <div className="tooltip">WhatsApp</div>
                    <FontAwesomeIcon className="icon-container" icon={faWhatsapp} />
                  </a>
                </div>
                <div className="curriculo">
                  <a className="btn btn-light"
                  href='../assets/CurriculoArtur(maio).pdf'>
                    <FontAwesomeIcon className="icon-container" icon={faFile} />
                    <span> CURRÍCULO </span>
                  </a>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6}>
              <div className="profile">
                <div className="propic">
                  <img src={head} alt="profile pic" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
