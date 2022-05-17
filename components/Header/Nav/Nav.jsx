import { Navbar } from "react-bootstrap";
import { Container, NavDropdown, Nav as Nav1 } from "react-bootstrap";

export default function Nav() {
  return (
    <Navbar className="nav-bar " bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav1 className="me-auto">
            <Nav1.Link href="#inicio">Inicio</Nav1.Link>
            <Nav1.Link href="#nosotros">Nosotros</Nav1.Link>
            <Nav1.Link href="#productos">Productos</Nav1.Link>
            <Nav1.Link href="#blog">Blog</Nav1.Link>
            <Nav1.Link href="#blog">Contacto</Nav1.Link>
          </Nav1>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
