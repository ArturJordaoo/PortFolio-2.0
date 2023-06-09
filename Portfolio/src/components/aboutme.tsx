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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam asperiores nulla sed repudiandae repellendus! Est velit quidem fugiat veniam nemo perferendis error omnis aliquam optio corrupti, molestias qui rerum beatae.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
