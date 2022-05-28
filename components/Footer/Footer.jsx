import { Container } from "react-bootstrap";
import { Image } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <Container fluid className="mt-0 p-0">
      <footer className=" text-center text-lg-start bg-light">
        {/* Social media */}

        {/* Social media */}

        {/* about */}
        <section className="footer pt-2">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-5">
                <Image
                  src="/astormedic.png"
                  className="mb-3"
                  size="tiny"
                  alt="logo astormedical"
                />
                <span className="about-us">
                  Somos una empresa que provee equipamiento médico, de insumos y
                  accesorios con excelentes estándares de calidad. Contamos con
                  laboratorio técnico para mantenimiento correctivo, preventivo,
                  de esterilización y desinfección de equipos.
                </span>
              </div>
              {/* about */}

              {/* links */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-5">
                <h3 className="links text-uppercase fw-bold mb-4">Menú</h3>
                <p>
                  <a href="#!" className="text-reset">
                    Inicio
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Nosotros
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Productos
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Contacto
                  </a>
                </p>
              </div>
              {/* links */}

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-5">
                <h3 className="catalog text-uppercase fw-bold mb-4">
                  Cátalogo
                </h3>
                <p>
                  <a href="#!" className="text-reset">
                    Insumos
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Equipos Médicos
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Laboratorios Médicos
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Instrumentos y Accesorios
                  </a>
                </p>
              </div>
              {/* links */}

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-5">
                <h3 className="text-uppercase fw-bold mb-4">Contactanos</h3>
                <p>
                  <FontAwesomeIcon
                    icon={faMapLocationDot}
                    className="me-2"
                    style={{ color: "#fff" }}
                  />
                  Centro San Ignacio, Edificio Torre Copérnico, Piso 4, Oficina
                  406. Av. Blandín, Miranda 1060, Estado Miranda.
                </p>
                <p>
                  <a href="mailto:Info@astormedic.com" className="text-reset">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="me-2"
                      style={{ color: "#fff" }}
                    />
                    info@astormedic.com
                  </a>
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="me-2"
                    style={{ color: "#fff" }}
                  />
                  (+58) 412-6036107
                </p>
              </div>
              {/* links */}
            </div>
          </div>
          {/* copyright */}
          <div className="text-center text-white p-4">
            © 2022 Copyright:
            <a className="text-reset ms-1 fw-bold">Astormedical.com</a>
          </div>
          {/* copyright */}
        </section>
      </footer>
    </Container>
  );
}
