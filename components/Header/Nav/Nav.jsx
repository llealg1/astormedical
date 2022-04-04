import Navbar from 'react-bootstrap/NavBar';
import { Container, NavDropdown, Nav as Nav1  } from 'react-bootstrap';

export default function Nav() {


  return (
  <Navbar className='nav-bar' bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav1 className="me-auto">
          <Nav1.Link href="#home">Home</Nav1.Link>
          <Nav1.Link href="#link">Link</Nav1.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav1>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
