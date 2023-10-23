import { Col, Container, Row } from "react-bootstrap";
import Profilepic from '../assets/Profilepic.png';
import '../css/aboutme.css';

export function AboutMe() {
  return (
    <div id="sobre">
      <h2>Sobre mim</h2>
      <div></div>
      <Container fluid>
        <Row className="d-flex align-items-center justify-content-center">
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <img src={Profilepic} alt="propic" className="aboutpic" />
          </Col>
          <Col md={6}>
            <h3 id="webintro">Desenvolvedor Web</h3>
            <p id="abouttxt">
            Oi, sou Artur, estudante de Ciências da Computação. Desde 2021, minha jornada na programação começou com Python, e hoje sou apaixonado por Front-end. No 4º período, estou em busca de oportunidades nessa área. Durante meu intercâmbio, aprimorei habilidades interculturais. Iniciei como estagiário em Gestor de TI na Serra Leoa, e graças ao meu desempenho, fui efetivado antes do término do contrato de estágio, agora atuando com carteira assinada. Experiências na Bonito Artesanato e como Gestor de TI moldaram minha versatilidade. Destaco-me por projetos em React e JavaScript. Estou pronto para desafios no mundo do Front-end!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
