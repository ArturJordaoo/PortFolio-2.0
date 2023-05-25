import { Col, Container, Row } from "react-bootstrap";

export function AboutMe(){
  return(<div id="sobre">
    <h2 id='sobre-title'>Sobre mim</h2>
      <Container fluid>
        <Row>
          <Col md={6}>
            <img src="../assets/Profilepic.jpg" alt="propic" />
          </Col>
          <Col md={6}></Col>
        </Row>
        
      </Container>
  </div>
    

  )  
}