import Carousel from "../components/Carousel";
import BasicLayout from "../layouts/BasicLayout";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Nosotros from "../components/Nosotros";
import CarouselMarcas from "../components/CarouselMarcas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShield,
  faHandHoldingMedical,
  faPeopleGroup,
  faHeartPulse,
  faWrench,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Col, Row } from "react-bootstrap";

export default function Home() {
  return (
    <BasicLayout>
      <Carousel />
      <Nosotros />
      <CarouselMarcas />
      <Container fluid>
        <Row>
          <Col sm={3} className="efe p-2">
            <div className="p-5 text-center">
              <FontAwesomeIcon
                icon={faShield}
                style={{ color: "#fff", fontSize: "5rem" }}
              />
              <h2 className="title1">Integridad</h2>
              <p className="parrafo1">
                Mantenemos los más altos estándares de integridad en todas
                nuestras acciones.
              </p>
            </div>
          </Col>
          <Col sm={3} className="efe p-2">
            <div className="p-5 text-center">
              <FontAwesomeIcon
                icon={faHandHoldingMedical}
                style={{ color: "#fff", fontSize: "5rem" }}
              />

              <h2 className="title1">Confianza</h2>
              <p className="parrafo1">
                Creemos en el liderazgo constante, profesionalismo, integridad,
                respeto y confidencialidad de nuestro equipo.
              </p>
            </div>
          </Col>
          <Col sm={3} className="efe p-2">
            <div className="p-5 text-center">
              <FontAwesomeIcon
                icon={faHeartPulse}
                style={{ color: "#fff", fontSize: "5rem" }}
              />
              <h2 className="title1">Constancia</h2>
              <p className="parrafo1">
                Nos fundamentamos en la constancia para integrar el esfuerzo y
                la esperanza.
              </p>
            </div>
          </Col>
          <Col sm={3} className="efe p-2 text-center">
            <div className="p-5">
              <FontAwesomeIcon
                icon={faPeopleGroup}
                style={{ color: "#fff", fontSize: "5rem" }}
              />
              <h2 className="title1">Trabajo en equipo</h2>
              <p className="parrafo1">
                Trabajamos juntos, más allá de las fronteras, para satisfacer
                las necesidades de nuestros clientes y ayudar a nuestra empresa
                a ganar.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </BasicLayout>
  );
}
