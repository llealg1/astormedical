import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export default function Contacto(){
  return (
    <>
      <Container fluid className=" mb-5">
        <Row>
        <Col sm={12} className="temazo p-0 mb-4" >
            
            <div className="aboutImg2 d-flex align-items-center justify-content-center"> 
              <h2 className="title4">Contacto</h2>

            </div>
          </Col>
          <Col sm={5} className="p-5">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="labelForm">Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label  className="labelForm">Nombre Completo</Form.Label>
                <Form.Control type="text" placeholder="Pedro Perez" />
              </Form.Group>

              
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label  className="labelForm">Teléfono</Form.Label>
                <Form.Control type="text" placeholder="+58 414123456" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label  className="labelForm">Mensaje</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <div className='text-end'>
                <Button className='buttonSubmit'  type="submit">
                  Submit
                </Button>
              </div>

            </Form>
          </Col>
          <Col sm={7} className="p-0">
            <img src="/img2.webp" className="teamImg1" alt=""width="100%" height="100%" />
          </Col>
        </Row>
      </Container>
    </>
  )
}