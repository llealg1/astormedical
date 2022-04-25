import { Container, Row, Col, Nav, Card, Button } from "react-bootstrap"

export default function Products() {

  const arr  = [1,2,3,4,5];
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
                      <Card.Img variant="top" src={`/works/${act}.webp`}/>
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
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
