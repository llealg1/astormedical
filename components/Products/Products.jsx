import { Container, Row, Col, Nav, Card, Button } from "react-bootstrap"

export default function Products() {

  return (
    <Container fluid className="products" >
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
              <Col sm={3}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="/slides/0.webp" />
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
              <Col sm={3}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="/slides/0.webp" />
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
              <Col sm={3}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="/slides/0.webp" />
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
              <Col sm={3}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="/slides/0.webp" />
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
              
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
    
  )


}
