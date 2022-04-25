import { Container, Row, Col, Nav, Card, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faFlaskVial,faGear,faWrench, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col sm={3} className="d-flex justify-content-center">
            <FontAwesomeIcon icon={faArrowsRotate} />
            <Card className=" d-flex justify-content-center align-items-center" style={{ width: '18rem',color: '#4e0f59' }}>
              <FontAwesomeIcon icon={faHeart} className="iconContent" style={{ fontSize: "9rem"}}  size="lg" />
              <Card.Body>
                <Card.Title>Equipos Médicos</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3} className="d-flex justify-content-center">
            <FontAwesomeIcon icon={faArrowsRotate} />
            <Card className=" d-flex justify-content-center align-items-center" style={{ width: '18rem',color: '#4e0f59' }}>
              <FontAwesomeIcon icon={faFlaskVial} className="iconContent" style={{ fontSize: "9rem",color: '#4e0f59' }}  size="lg"/>
              <Card.Body>
                <Card.Title>Insumos</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3} className="d-flex justify-content-center">
            <FontAwesomeIcon icon={faArrowsRotate} />
            <Card className=" d-flex justify-content-center align-items-center" style={{ width: '18rem',color: '#4e0f59' }}>
              <FontAwesomeIcon icon={faGear} style={{ fontSize: "9rem",color: '#4e0f59' }}  size="lg" /> 
              <Card.Body>
                <Card.Title>Instrumentación <br /> y Accesorios</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3} className="d-flex justify-content-center">
            <FontAwesomeIcon icon={faArrowsRotate} />
            <Card className=" d-flex justify-content-center align-items-center" style={{ width: '18rem',color: '#4e0f59' }}>
            <FontAwesomeIcon icon={faWrench} style={{ fontSize: "9rem",color: '#4e0f59' }}  size="lg" />
              <Card.Body>
                <Card.Title>Laboratorio Técnico</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}