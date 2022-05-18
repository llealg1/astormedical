import { Container, Row, Col, Nav, Card, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield,faHandHoldingMedical,faPeopleGroup,faHeartPulse,faWrench, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

export default function About(){
  return(
    <>
      <Container fluid className="m-0 p-0">
        <Row  className="m-0 p-0">

          <Col sm={6} className="d-flex justify-content-center p-0">
            <img src="/service2.webp" alt="" width="100%" height="100%"  />
          
          </Col>
          <Col sm={6}>
            <div className="p-5 mt-5">
              <h2 className="title">¿Quiénes somos?</h2>
              <p className="parrafo">Una empresa que provee equipos, insumos y accesorios con excelentes estándares de calidad al sector médico. Nuestros fundadores, Josebely Bastidas y Johan Suarez formaron la empresa a través del compromiso y experiencia por más de dos décadas dedicadas al cuidado de la salud por varios países de Latinoamérica .</p>
            </div>
          </Col>
          <Col sm={6} className=" p-5" style={{backgroundColor:'#4e0f59',color:'white'}}>
            <div className="p-5">
              <h2 className="title">Misión</h2>
              <p className="parrafo">Garantizar el suministro de equipos, insumos y accesorios de las mejores marcas acompañado de un servicio técnico especializado confiable que supere con creces las expectativas de nuestros clientes.</p>
            </div>
          </Col>
          <Col sm={6} className="d-flex justify-content-center  p-0">
            <img src="/service3.webp" alt=""width="100%" height="100%" />
          </Col>
          <Col sm={6} className="d-flex justify-content-center p-0">
            <img src="/service1.webp" alt="" width="100%" height="100%" />
          </Col>
          <Col sm={6} className=" p-5">
            <div className="p-5">
              <h2 className="title">Visión</h2>
              <p className="parrafo">Ser la empresa líder en el equipamiento de instrumentos para diagnóstico, insumos y accesorios médicos, reconocidos por su atención personalizada, servicio técnico, innovación, precios asequibles y productos de calidad.</p>
            </div>
          </Col>
          <Col sm={3} className="efe p-2">
            <div className="p-5 text-center">
              <FontAwesomeIcon icon={faShield} style={{color:"#fff",fontSize:"5rem"}}/>
              <h2 className="title1">Integridad</h2>
              <p className="parrafo1">Mantenemos los más altos estándares de integridad en todas nuestras acciones.</p>
            </div>
          </Col>
          <Col sm={3} className="efe p-2">
            <div className="p-5 text-center">
            <FontAwesomeIcon icon={faHandHoldingMedical} style={{color:"#fff",fontSize:"5rem"}}/>

              <h2 className="title1">Confianza</h2>
              <p className="parrafo1">Creemos en el liderazgo constante, profesionalismo, integridad, respeto y confidencialidad de nuestro equipo.</p>
            </div>
          </Col>
          <Col sm={3} className="efe p-2">
            <div className="p-5 text-center">
            <FontAwesomeIcon icon={faHeartPulse} style={{color:"#fff",fontSize:"5rem"}}/>
              <h2 className="title1">Constancia</h2>
              <p className="parrafo1">Nos fundamentamos en la constancia para integrar el esfuerzo y la esperanza.</p>
            </div>
          </Col>
          <Col sm={3} className="efe p-2 text-center">
            <div className="p-5">
            <FontAwesomeIcon icon={faPeopleGroup} style={{color:"#fff",fontSize:"5rem"}}/>
              <h2 className="title1">Trabajo en equipo</h2>
              <p className="parrafo1">Trabajamos juntos, más allá de las fronteras, para satisfacer las necesidades de nuestros clientes y ayudar a nuestra empresa a ganar.</p>
            </div>
          </Col>
          <Col sm={6} className="d-flex justify-content-center  p-0">
            <img src="/service3.webp" alt=""width="100%" height="100%" />
          </Col>
          <Col sm={6} className="d-flex justify-content-center  p-0">
            <img src="/service3.webp" alt=""width="100%" height="100%" />
          </Col>
        </Row>
      </Container>
    </>
  )
}
