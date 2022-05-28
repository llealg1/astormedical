import TopBar from "./TopBar";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk,faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <>
      <Container fluid className='infoBox d-flex align-items-center '>
        <Row>
          <Col sm={12} className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={ faMailBulk}/>
              <p className="m-0">Administración@astormedic.com</p>
              <span className="mx-4">|</span>
              <FontAwesomeIcon icon={ faPhone}/>
              <p>+58  212-266-70-53</p>
            </div>
    
            <div>
              <FontAwesomeIcon className="mx-2" icon={ faFacebookSquare} size="lg"/>
              <FontAwesomeIcon className="mx-2" icon={ faInstagram} size="lg"/>
              <FontAwesomeIcon className="mx-2" icon={ faTwitterSquare} size="lg"/>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="header-main">
        <TopBar />
        <div></div>
      </div>
    </>

  );
}
