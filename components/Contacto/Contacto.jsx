import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Image from "next/image";
export default function Contacto() {
  return (
    <>
      <Container fluid className=" mb-5">
        <Row>
          <Col sm={12} className="temazo p-0 mb-4">
            <div className="aboutImg2 d-flex align-items-center justify-content-center">
              <h2 className="title4">Contacto</h2>
            </div>
          </Col>
          <Col sm={5} className="p-5">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="labelForm">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Inserta tu correo electrónico aquí"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="labelForm">Nombre Completo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserta tu nombre completo aquí"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="labelForm">Teléfono</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserta tu número de teléfono aquí"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="labelForm">Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  className="textarea"
                  placeholder="Inserta tu mensaje aquí"
                  rows={5}
                />
              </Form.Group>
              <div className="text-end">
                <Button className="buttonSubmit" type="submit">
                  Envíar
                </Button>
              </div>
            </Form>
          </Col>
          <Col sm={7} className="p-0">
            <Image
              src="/img2.webp"
              className="teamImg1"
              alt=""
              width={1600}
              height={900}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
