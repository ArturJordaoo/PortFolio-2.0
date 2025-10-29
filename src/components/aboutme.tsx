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
            <h3 id="webintro">
              {' '}
              “Um dos meus dias mais produtivos foi quando eu joguei fora 1000
              linhas de código.” – Ken Thompson
            </h3>
            <p id="abouttxt">
              É com essa frase que me apresento, sou estudante em final de
              formação em Ciências da Computação. Sou um desenvolvedor fullstack
              com paixão em JavaScript, React e tudo sobre desenvolvimento web.
              Acredito no aprendizado contínuo, atualmente me atualizando sobre
              sistemas com usos de kubernetes e AWS. Possuo conhecimento geral
              em diversas tecnologias, mas a principal que estou utilizando é o
              NextJs junto com TailwindCss para desenvolvimento de sistemas.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
