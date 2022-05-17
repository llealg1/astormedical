import { Container, Row, Col, Image, Card, Button,Modal } from "react-bootstrap"
import {useState } from 'react'
export default function Products() {
  
  const arr  = [
    {
      id: 1,
      type:'Endoscopia',
      name:'Olympus Evis X-1'
    },
    {
      id:2,
      type:'Endoscopia',
      name:'Sistema de endoscopia FujiFilm EPX-3500 HD'
    },
    {
      id:3,
      type:'Endoscopia',
      name:'Olympus Evis Exera III CV-190'
    }
    ,
    {
      id:4,
      type:'Endoscopia',
      name:'Plataforma de Imagenología Evis Exera III.'
    }
    ,
    {
      id:5,
      type:'Endoscopia',
      name:'Olympus Videoscopio IPLEX GX/GT'
    }
    ,
    {
      id:6,
      type:'Endoscopia',
      name:'Gastroscopio USB'
    },
    {
      id:7,
      type:'Endoscopia',
      name:'Colonoscopio EVC 21-37L'
    },
    {
      id:8,
      type:'Endoscopia',
      name:'Sistema de videoendoscopia Fujinon EPX-2500'
    },
    {
      id:9,
      type:'Endoscopia',
      name:'Fujifilm Bomba de Agua JW-2'
    },
    {
      id:10,
      type:'Endoscopia',
      name:'Videogastroscopio ultrasónico EUS J-10 Line up Pentax Medical'
    },
    {
      id:11,
      type:'Endoscopia',
      name:'Monitor de Endoscopia OEV 261-H Olympus'
    },
    {
      id:12,
      type:'Endoscopia',
      name:'Unidad de Regulación CO2 (UCR) Olympus'
    },
  
  ];
    
  const [data, setData] = useState({
    
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid className="products mt-5" >
      <Row>
        <Col sm={12}>
          <Container fluid>
            <Row className="d-flex justify-content-between">
              {
                arr.map( act =>   
                  <Col sm={3} className="mb-4 d-flex justify-content-center">
                    <Card onClick={()=> {setData(act);handleShow();}} style={{ width: '18rem',padding: '15px' }}>
                      <Card.Img variant="top" src={`/works/${act.id}.webp`}/>
                      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                        <Card.Title>{act.type}</Card.Title>
                        <Card.Text className="text-center aux">
                          {act.name}
                        </Card.Text>
                        <Button variant="primary" onClick={()=> {setData(act);handleShow();}} className="botones">View more</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              }
              
            </Row>
          </Container>
        </Col>
      </Row>
      <ModalEspect show={show} data={data}  handleClose={handleClose} />
    </Container>
    
  )
  

}

const ModalEspect = ({show,handleClose,data})=> {
  return (
    <Modal show={show} onHide={handleClose}    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
      <Modal.Header closeButton>
        <Modal.Title>{data.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-5"><Card.Img variant="top" src={`/works/${data.id}.webp`}/></Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
