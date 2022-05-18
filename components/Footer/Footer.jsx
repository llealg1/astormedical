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
                <a className="mb-4 logo">
                  <Image src="/astormedic.png" className="mb-3" size="tiny" />
                </a>
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
                    Blog
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
                  <a
                    href="https://www.google.com/maps/place/astor+medical/@10.4969911,-66.8575217,17.83z/data=!4m19!1m13!4m12!1m4!2m2!1d-67.9061688!2d10.2032677!4e1!1m6!1m2!1s0x87176f5159b1dc67:0xa118448b9f2b3660!2sastor+medical!2m2!1d-66.8565051!2d10.4977242!3m4!1s0x87176f5159b1dc67:0xa118448b9f2b3660!8m2!3d10.4977242!4d-66.8565051"
                    target={"_blank"}
                    className="text-reset"
                  >
                    <FontAwesomeIcon
                      icon={faMapLocationDot}
                      className="me-2"
                      style={{ color: "#fff" }}
                    />
                    Centro San Ignacio, Edificio Torre Copérnico, Piso 4,
                    Oficina 406. Av. Blandín, Miranda 1060, Estado Miranda.
                  </a>
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
                  <a
                    href="https://api.whatsapp.com/send/?phone=584126036107&text&app_absent=0"
                    target={"_blank"}
                    className="text-reset"
                  >
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="me-2"
                      style={{ color: "#fff" }}
                    />
                    (+58) 412-6036107
                  </a>
                </p>
              </div>
              {/* links */}
            </div>
          </div>
          {/* copyright */}
          <div className="text-center text-white p-4">
            © 2022 Copyright:
            <a class="text-reset ms-1 fw-bold" href="#">
              Astormedical.com
            </a>
          </div>
          {/* copyright */}
        </section>
      </footer>
    </Container>
  );
}
