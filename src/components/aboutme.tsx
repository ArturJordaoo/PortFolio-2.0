import { Col, Container, Row } from 'react-bootstrap';
import Profilepic from '../assets/Profilepic.png';
import '../css/aboutme.css';

export function AboutMe() {
  return (
    <div id="sobre">
      <h2>Sobre mim</h2>
      <div></div>
      <Container fluid>
        <Row className="d-flex align-items-center justify-content-center">
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <img src={Profilepic} alt="propic" className="aboutpic" />
          </Col>
          <Col md={6}>
            <h3 id="webintro">Desenvolvedor Full-stack</h3>
            <p id="abouttxt">
              Oi, sou Artur, estudante de Ciências da Computação. Atualmente no
              7º período, estou em busca de oportunidades nessa área. Durante
              meu intercâmbio, aprimorei habilidades interculturais e meu
              inglês. Destaco-me por projetos em NextJs e NestJs. Estou pronto
              para desafios no mundo do Full-Stack!.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
