import { Container, Row, Col, Nav, Card, Button } from "react-bootstrap"

export default function Products() {

  const arr  = [
  {
    id: 1,
    type:'Endoscopia',
    name:'Olympus Evis X-1'
  },
  {
    id:2,
    type:'Endoscopia',
    name:'Sistema de endoscopia FujiFilm EPX-3500 HD'
  },
  {
    id:3,
    type:'Endoscopia',
    name:'Olympus Evis Exera III CV-190'
  }
  ,
  {
    id:4,
    type:'Endoscopia',
    name:'Plataforma de Imagenología Evis Exera III.'
  }
  ,
  {
    id:5,
    type:'Endoscopia',
    name:'Olympus Videoscopio IPLEX GX/GT'
  }];
  return (
    <Container fluid className="products mt-5" >
      <Row>
        <Col sm={3} >
          <Nav className="d-flex flex-column" variant="pills" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link eventKey="link-3">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Option 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-9" >
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        <Col sm={9}>
          <Container fluid>
            <Row>
              {
                arr.map( act =>   
                  <Col sm={3}>
                    <Card style={{ width: '18rem',padding: '15px' }}>
                      <Card.Img variant="top" src={`/works/${act.id}.webp`}/>
                      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                        <Card.Title>{act.type}</Card.Title>
                        <Card.Text className="text-center aux">
                          {act.name}
                        </Card.Text>
                        <Button variant="primary" className="botones">View more</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              }
              
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
    
  )


}
