import { Container, Row, Col, Nav, Card, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faFlaskVial,faGear,faWrench, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col sm={3} className="cardC d-flex justify-content-center">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <FontAwesomeIcon icon={faArrowsRotate} style={{color:"#4e0f59"}} />
                  <Card className=" d-flex justify-content-center align-items-center " style={{ width: '18rem',color: '#4e0f59',border: '0px solid black' }}>
                    <FontAwesomeIcon icon={faHeart} className="iconContent" style={{ fontSize: "6rem"}}  size="lg" />
                    <Card.Body>
                      <Card.Title>Equipos Médicos</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
                <div className="flip-card-back text-center">
                  <p>De diágnostico, investigación biomédica, terapeúticos, para soporte de vida o apoyo. Última generación nuevos o refurbished.</p>
                  <Button >Saber más </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={3} className="cardC d-flex justify-content-center">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <FontAwesomeIcon icon={faArrowsRotate} style={{color:"#4e0f59"}}/>
                  <Card className=" d-flex justify-content-center align-items-center" style={{ width: '18rem',color: '#4e0f59', border: '0px solid black' }}>
                  <FontAwesomeIcon icon={faFlaskVial} className="iconContent" style={{ fontSize: "6rem",color: '#4e0f59' }}  size="lg"/>
                    <Card.Body>
                      <Card.Title>Insumos</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
                <div className="flip-card-back text-center">
                  <p>Material sanitario, médico y hospitalario para las distintas especialidades médicas y adaptadas a las necesidades clínicas de cada paciente.</p>
                  <Button >Saber más </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={3} className="cardC d-flex justify-content-center">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <FontAwesomeIcon icon={faArrowsRotate} style={{color:"#4e0f59"}}/>
                  <Card className=" d-flex justify-content-center align-items-center" style={{ width: '18rem',color: '#4e0f59', border: '0px solid black' }}>
                    <FontAwesomeIcon icon={faGear} style={{ fontSize: "6rem",color: '#4e0f59' }}  size="lg" /> 
                    <Card.Body>
                      <Card.Title>Instrumentación <br /> y Accesorioss</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
                <div className="flip-card-back text-center">
                  <p>Biomédicos, quirúrgicos, terapeúticos, dispositivos eléctricos, electrónicos y mecánicos, software clínicos.</p>
                  <Button >Saber más </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={3} className="cardC d-flex justify-content-center">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <FontAwesomeIcon icon={faArrowsRotate} style={{color:"#4e0f59"}}/>
                  <Card className=" d-flex justify-content-center align-items-center" style={{ width: '18rem',color: '#4e0f59',border: '0px solid black' }}>
                    <FontAwesomeIcon icon={faWrench} style={{ fontSize: "6rem",color: '#4e0f59' }}  size="lg" />
                    <Card.Body>
                      <Card.Title>Laboratorio Técnicos</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
                <div className="flip-card-back text-center">
                  <p>Moderno laboratorio. Asesoría y capacitación en el manejo de equipos médicos, mantenimiento preventivo y correctivo.</p>
                  <Button >Saber más </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}