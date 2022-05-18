import { Navbar } from "react-bootstrap";
import { Container, NavDropdown, Nav as Nav1 } from "react-bootstrap";
import Link from 'next/link'

export default function Nav() {
  return (
    <Navbar className="nav-bar" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav1 className="me-auto">
            <Nav1.Link className="p-0 mx-3 d-flex align-items-center" >
              <Link href="/">
              <a>Inicio</a>
              </Link>
            </Nav1.Link>
            <Nav1.Link  className="p-0 mx-3 d-flex align-items-center" >
              <Link href="/nosotros">
              <a>Nosotros</a>
              </Link>
            </Nav1.Link>
            <Nav1.Link  className="p-0 mx-3 d-flex align-items-center" >
              <Link href="/productos">
                <a >Productos</a>
              </Link>
          
            </Nav1.Link>
            <Nav1.Link  className="p-0 mx-3 d-flex align-items-center">
              <Link href="/contacto">
                <a>Contacto</a>
              </Link>
            </Nav1.Link>
          </Nav1>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
