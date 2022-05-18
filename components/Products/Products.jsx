import { Container, Row, Col, Image, Card, Button,Modal } from "react-bootstrap"
import {useState } from 'react'
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const dataImportante = [
  {
    id: 1,
    type:'Endoscopia',
    name:'Olympus Evis X-1',
    marca: 'OLYMPUS'
  },
  {
    id:2,
    type:'Endoscopia',
    name:'Sistema de endoscopia FujiFilm EPX-3500 HD',
    marca: 'FUJIFILM'
  },
  {
    id:3,
    type:'Endoscopia',
    name:'Olympus Evis Exera III CV-190',
    marca: 'OLYMPUS'
  }
  ,
  {
    id:4,
    type:'Endoscopia',
    name:'Plataforma de Imagenología Evis Exera III.',
    marca:'elvis'
  }
  ,
  {
    id:5,
    type:'Endoscopia',
    name:'Olympus Videoscopio IPLEX GX/GT',
    marca: 'OLYMPUS'
  }
  ,
  {
    id:6,
    type:'Endoscopia',
    name:'Gastroscopio USB',
    marca: 'GENERICO'
  },
  {
    id:7,
    type:'Endoscopia',
    name:'Colonoscopio EVC 21-37L',
    marca: 'EVC'
  },
  {
    id:8,
    type:'Endoscopia',
    name:'Sistema de videoendoscopia Fujinon EPX-2500',
    marca: 'FUJINON'
  },
  {
    id:9,
    type:'Endoscopia',
    name:'Fujifilm Bomba de Agua JW-2',
    marca: 'FUJIFILM'

  },
  {
    id:10,
    type:'Endoscopia',
    name:'Videogastroscopio ultrasónico EUS J-10 Line up Pentax Medical',
    marca:'PENTAX'
  },
  {
    id:11,
    type:'Endoscopia',
    name:'Monitor de Endoscopia OEV 261-H Olympus',
    marca: 'OLYMPUS'
  },
  {
    id:12,
    type:'Endoscopia',
    name:'Unidad de Regulación CO2 (UCR) Olympus',
    marca: 'OLYMPUS'
  },

]

export default function Products() {
  
  const [arr, setArr] = useState([
    {
      id: 1,
      type:'Endoscopia',
      name:'Olympus Evis X-1',
      marca: 'OLYMPUS'
    },
    {
      id:2,
      type:'Endoscopia',
      name:'Sistema de endoscopia FujiFilm EPX-3500 HD',
      marca: 'FUJIFILM'
    },
    {
      id:3,
      type:'Endoscopia',
      name:'Olympus Evis Exera III CV-190',
      marca: 'OLYMPUS'
    }
    ,
    {
      id:4,
      type:'Endoscopia',
      name:'Plataforma de Imagenología Evis Exera III.',
      marca:'elvis'
    }
    ,
    {
      id:5,
      type:'Endoscopia',
      name:'Olympus Videoscopio IPLEX GX/GT',
      marca: 'OLYMPUS'
    }
    ,
    {
      id:6,
      type:'Endoscopia',
      name:'Gastroscopio USB',
      marca: 'GENERICO'
    },
    {
      id:7,
      type:'Endoscopia',
      name:'Colonoscopio EVC 21-37L',
      marca: 'EVC'
    },
    {
      id:8,
      type:'Endoscopia',
      name:'Sistema de videoendoscopia Fujinon EPX-2500',
      marca: 'FUJINON'
    },
    {
      id:9,
      type:'Endoscopia',
      name:'Fujifilm Bomba de Agua JW-2',
      marca: 'FUJIFILM'

    },
    {
      id:10,
      type:'Endoscopia',
      name:'Videogastroscopio ultrasónico EUS J-10 Line up Pentax Medical',
      marca:'PENTAX'
    },
    {
      id:11,
      type:'Endoscopia',
      name:'Monitor de Endoscopia OEV 261-H Olympus',
      marca: 'OLYMPUS'
    },
    {
      id:12,
      type:'Endoscopia',
      name:'Unidad de Regulación CO2 (UCR) Olympus',
      marca: 'OLYMPUS'
    },
  
  ]);
  
  const [data, setData] = useState({
    
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const arr1 = [
    {
      id:5,
      name:"EIZO"
    },
    {
      id:17,
      name:"WELCH ALLYN"
    },
    ,
    {
      id:13,
      name:"PENTAX"
    },
    {
      id:2,
      name:"BOSTON SCIENTIFIC "
    },
    ,
    {
      id:12,
      name:"OLYMPUS"
    },
    ,
    {
      id:6,
      name:"FUJINON"
    },

  ];

  const handleSearch = ( texto ) => {

    setArr( dataImportante.filter( item => item.marca == texto ))
  }
  
  const handleAll = (  ) => {

    setArr( dataImportante)
  }
  
  return (
    <Container fluid className="products" >
      <Row>
        <Col sm={12}>
          <Container fluid >
            <div className="searcher d-flex justify-content-center px-5">
              <div className="itemSearch d-flex align-items-center m-2 mb-0 mt-0">
                  <Form.Check
                    onClick={handleAll}
                    inline
                    name="group1"
                    type="radio"
                    id={`inline-radio-1`}
                  />
                  <h2 className="m-0">Todos</h2>
              </div>
              {
                arr1.map( act => 
                <div className="itemSearch d-flex align-items-center justify-content-start m-2 mb-0 mt-0 mx-4 cursor-pointer">
                  <Form.Check
                    onClick={ ()=> handleSearch(act.name)}
                    inline
                    name="group1"
                    type="radio"
                    id={`inline-radio-${act.id}`}
                  />
                  <label for={`inline-radio-${act.id}`}>
                    <Image
                      src={`/marcas/${act.id}.png`}
                      alt="First slide"
                      width="100%"
                      height="100%"
                    />
                  </label>
              
                </div>)
              }
              <div className="d-flex align-items-center">
                <Form.Label className="m-0" htmlFor="inputPassword5">
                <FontAwesomeIcon className="m-0 mx-2 searchIcon" icon={faMagnifyingGlass}/>
                </Form.Label>
                <Form.Control
                  type="text"
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                  autoComplete="false"
                />
              </div>
            </div>
            <Row className="d-flex justify-content-around productItem">
              {
                arr.map( act =>   
                  <Col sm={3} className="mb-4 d-flex justify-content-center p-0 productItem">
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
    <Modal show={show} onHide={handleClose}    size="md"
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
