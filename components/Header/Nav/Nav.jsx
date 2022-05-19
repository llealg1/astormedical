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
              <p>Inicio</p>
              </Link>
            </Nav1.Link>
            <Nav1.Link  className="p-0 mx-3 d-flex align-items-center" >
              <Link href="/nosotros">
              <p>Nosotros</p>
              </Link>
            </Nav1.Link>
            <Nav1.Link  className="p-0 mx-3 d-flex align-items-center" >
              <Link href="/productos">
                <p>Productos</p>
              </Link>
          
            </Nav1.Link>
            <Nav1.Link  className="p-0 mx-3 d-flex align-items-center">
              <Link href="/contacto">
                <p>Contacto</p>
              </Link>
            </Nav1.Link>
          </Nav1>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
