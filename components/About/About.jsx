import { Container, Row, Col, Nav, Card, Button } from "react-bootstrap"


export default function About(){
  return(
    <>
      <Container fluid>
        <Row>
          <Col sm={12} className="p-0 d-flex align-items-center mb-5">

          </Col>
          <Col sm={6} className="d-flex justify-content-center">
            <img src="/service2.webp" alt="" width="580px" height="400px" />
          
          </Col>
          <Col sm={6}>
            <div>
              <h2 className="title">¿Quiénes somos?</h2>
              <p className="parrafo">Una empresa que provee equipos, insumos y accesorios con excelentes estándares de calidad al sector médico. Nuestros fundadores, Josebely Bastidas y Johan Suarez formaron la empresa a través del compromiso y experiencia por más de dos décadas dedicadas al cuidado de la salud por varios países de Latinoamérica .</p>
            </div>
          </Col>
          <Col sm={6} className="mt-5 p-5">
            <div className="p-5">
              <h2 className="title">Misión</h2>
              <p className="parrafo">Garantizar el suministro de equipos, insumos y accesorios de las mejores marcas acompañado de un servicio técnico especializado confiable que supere con creces las expectativas de nuestros clientes.</p>
            </div>
          </Col>
          <Col sm={6} className="d-flex justify-content-center mt-5">
            <img src="/service3.webp" alt="" width="580px" height="400px" />
          </Col>
          <Col sm={6} className="d-flex justify-content-center mt-5">
            <img src="/service1.webp" alt="" width="580px" height="400px" />
          </Col>
          <Col sm={6} className="mt-5 p-5">
            <div className="p-5">
              <h2 className="title">Visión</h2>
              <p className="parrafo">Ser la empresa líder en el equipamiento de instrumentos para diagnóstico, insumos y accesorios médicos, reconocidos por su atención personalizada, servicio técnico, innovación, precios asequibles y productos de calidad.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
