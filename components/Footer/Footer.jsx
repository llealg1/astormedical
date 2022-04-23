import { Container, Row, Col, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <Container fluid className="footer text-center">
      <Row className="container-row">
        <Col className="about-us">
          <h3>AstorMedical C.A</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam,
            officiis! Et odio ipsam non eum nihil corrupti architecto,
            voluptatum, molestias officia iure fugiat sequi facere, velit
            aspernatur! Temporibus, vel error?
          </p>
        </Col>
        <Col className="contact mx-auto">
          <h3>Contacto</h3>
          <p className="d-flex align-items-center">
            <FontAwesomeIcon icon={faMap} />
            <a href="#">Ubicación</a>
          </p>
          <p className="d-flex align-items-center">
            <FontAwesomeIcon icon={faPhone} />
            <a href="#">0412-000000</a>
          </p>
          <p className="d-flex align-items-center">
            <FontAwesomeIcon icon={faPhone} />
            <a href="#">0412-000000</a>
          </p>
          <p className="d-flex align-items-center">
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="#">Correo: mail@mail.com</a>
          </p>
        </Col>
        <Col className="menu">
          <h3>Menú</h3>
          <Nav className="flex-column">
            <Nav.Link>Inicio</Nav.Link>
            <Nav.Link>Nosotros</Nav.Link>
            <Nav.Link>Productos</Nav.Link>
            <Nav.Link>Blog</Nav.Link>
          </Nav>
        </Col>
        <Col className="social-networks">
          <h3>Nuestras Redes Sociales</h3>
          <p className="d-flex justify-content-center align-items-center">
            <FontAwesomeIcon icon={faFacebookSquare} />
            <a href="#"> AstorMedical </a>
          </p>
          <p className="d-flex justify-content-center align-items-center">
            <FontAwesomeIcon icon={faInstagram} />
            <a href="#"> AstorMedical </a>
          </p>
          <p className="d-flex justify-content-center align-items-center">
            <FontAwesomeIcon icon={faTwitterSquare} />
            <a href="#"> AstorMedical </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
