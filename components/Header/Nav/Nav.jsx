import { Navbar } from "react-bootstrap";
import { Container, NavDropdown, Nav as Nav1 } from "react-bootstrap";
import Link from 'next/link'
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <Navbar className="nav-bar" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav1 className="me-auto">
          
              <Link className={router.pathname == "/" ? "selected" : ""} href="/">
              <a>Inicio</a>
              </Link>


              <Link href="/nosotros">
              <a>Nosotros</a>
              </Link>
        
              <Link href="/productos">
                <a>Productos</a>
              </Link>
          
              <Link href="/contacto">
                <a>Contacto</a>
              </Link>
          </Nav1>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
