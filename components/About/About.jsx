import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield,faHandHoldingMedical,faPeopleGroup,faHeartPulse,faEarthAmerica, faUserTie } from "@fortawesome/free-solid-svg-icons";
import bg from '../../public/slides/1.webp'

const style={
}
export default function About(){
  console.log();
  return(
    <>
      <Container fluid className="m-0 p-0 aboutMe">
        <Row  className="m-0 p-0">
          <Col sm={12} className="temazo p-0" >
            
            <div className="aboutImg d-flex align-items-center justify-content-center"> 
              <h2 className="title3">Nosotros</h2>

            </div>
          </Col>
          <Col sm={6} className="d-flex justify-content-center p-0">
            <img src="/service2.webp" alt="" width="100%" height="100%"  />
          
          </Col>
          <Col sm={6} className="d-flex align-items-center">
            <div className="p-5  ">
              <h2 className="title3">¿Quiénes somos?</h2>
              <p className="parrafo">Una empresa que provee equipos, insumos y accesorios con excelentes estándares de calidad al sector médico. Nuestros fundadores, Josebely Bastidas y Johan Suarez formaron la empresa a través del compromiso y experiencia por más de dos décadas dedicadas al cuidado de la salud por varios países de Latinoamérica .</p>
            </div>
          </Col>
          <Col sm={6} className=" p-5 d-flex align-items-center" style={{backgroundColor:'#4e0f59',color:'white'}}>
            <div className="p-5">
              <h2 className="title3 text-white">Misión</h2>
              <p className="parrafo">Garantizar el suministro de equipos, insumos y accesorios de las mejores marcas acompañado de un servicio técnico especializado confiable que supere con creces las expectativas de nuestros clientes.</p>
            </div>
          </Col>
          <Col sm={6} className="d-flex justify-content-center  p-0">
            <img src="/service3.webp" alt=""width="100%" height="100%" />
          </Col>
          <Col sm={6} className="d-flex justify-content-center p-0">
            <img src="/service9.webp" alt="" width="100%" height="100%" />
          </Col>
          <Col sm={6} className=" p-5 d-flex align-items-center">
            <div className="p-5">
              <h2 className="title3 ">Visión</h2>
              <p className="parrafo">Ser la empresa líder en el equipamiento de instrumentos para diagnóstico, insumos y accesorios médicos, reconocidos por su atención personalizada, servicio técnico, innovación, precios asequibles y productos de calidad.</p>
            </div>
          </Col>
          <Col sm={3} className="efe p-2">
            <div className="p-5 text-center">
              <FontAwesomeIcon icon={faShield} style={{color:"#fff",fontSize:"5rem"}}/>
              <h2 className="title31">Integridad</h2>
              <p className="parrafo1">Mantenemos los más altos estándares de integridad en todas nuestras acciones.</p>
            </div>
          </Col>
          <Col sm={3} className="efe p-2">
            <div className="p-5 text-center">
            <FontAwesomeIcon icon={faHandHoldingMedical} style={{color:"#fff",fontSize:"5rem"}}/>

              <h2 className="title31">Confianza</h2>
              <p className="parrafo1">Creemos en el liderazgo constante, profesionalismo, integridad, respeto y confidencialidad de nuestro equipo.</p>
            </div>
          </Col>
          <Col sm={3} className="efe p-2">
            <div className="p-5 text-center">
            <FontAwesomeIcon icon={faHeartPulse} style={{color:"#fff",fontSize:"5rem"}}/>
              <h2 className="title31">Constancia</h2>
              <p className="parrafo1">Nos fundamentamos en la constancia para integrar el esfuerzo y la esperanza.</p>
            </div>
          </Col>
          <Col sm={3} className="efe p-2 text-center">
            <div className="p-5">
            <FontAwesomeIcon icon={faPeopleGroup} style={{color:"#fff",fontSize:"5rem"}}/>
              <h2 className="title31">Trabajo en equipo</h2>
              <p className="parrafo1">Trabajamos juntos, más allá de las fronteras, para satisfacer las necesidades de nuestros clientes y ayudar a nuestra empresa a ganar.</p>
            </div>
          </Col>
          <Col sm={6} className="d-flex justify-content-around  pt-4 px-0">
            <img src="/team2.jpg" className="teamImg" alt=""width="60%" height="100%" />
            <div className="text-center d-flex flex-column justify-content-center align-items-center">
              <h2 className="teamtitle3">Josebelys Bastidas</h2>
              <span className="text-muted">Directora Comercial</span>
              <FontAwesomeIcon icon={faEarthAmerica} className="mt-5" style={{fontSize:"4rem"}}/>
            </div>
          </Col>
          <Col sm={6} className="d-flex justify-content-between pt-4 px-0">
            <div className="text-center d-flex flex-column justify-content-center align-items-center">
              <h2 className="teamtitle3">Johan <br />Suarez</h2>
              <span className="text-muted">Director de Operaciones</span>
              <FontAwesomeIcon icon={faUserTie} className="mt-5" style={{fontSize:"4rem"}}/>

              
            </div>
            <img src="/team3.jpg"  alt=""width="60%" height="100%" />

          </Col>
   
   
        </Row>
      </Container>
    </>
  )
}
