import { Container, Col, Row } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
export default function CarouselMarcas() {
  const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
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
  
  ]
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={12} className="help3 text-center p-0 mb-4" >
            
           
              <h2 className="">Marcas que representamos</h2>
              <p>Conoce nuestras marcas, contamos con la mejor tecnología en equipos médicos, clínicos y hospitalarios.

</p>
          </Col>
        <Carousel interval={2000} className=''  >
          {
            arr.map( (act) => 
              <Carousel.Item className='fondo '>
                <div className="d-flex justify-content-center p-2">
                  <Image
                    className="d-block mx-1 "
                    src={`/marcas/${ act < 18?act: 0}.png`}
                    alt="First slide"
                  />
                  <Image
                    className="d-block mx-1 "
                    src={`/marcas/${ act+1 < 18? act+1: 9}.png`}
                    alt="First slide"
                  />
                  <Image
                    className="d-block mx-1 "
                    src={`/marcas/${ act+2 < 18?act+2: 7}.png`}
                    alt="First slide"
                  />
                  <Image
                    className="d-block  mx-1"
                    src={`/marcas/${ act+3 < 18?act+3: 6}.png`}
                    alt="First slide"
                  />
                  <Image
                    className="d-block mx-1 "
                    src={`/marcas/${ act+4 < 18?act+4: 5}.png`}
                    alt="First slide"
                  />
                  <Image
                    className="d-block  mx-1"
                    src={`/marcas/${ act+5 < 18?act+5: 4}.png`}
                    alt="First slide"
                  />
                  <Image
                    className="d-block mx-1 "
                    src={`/marcas/${ act+6 < 18?act+6: 3}.png`}
                    alt="First slide"
                  />
                  <Image
                    className="d-block mx-1 "
                    src={`/marcas/${ act+7 < 18?act+7: 2}.png`}
                    alt="First slide"
                  />
                  <Image
                    className="d-block mx-1 "
                    src={`/marcas/${ act+8 <= 18?act+8: 1}.png`}
                    alt="First slide"
                  />
                </div>  
              </Carousel.Item> 
            )
        }
        
        </Carousel>
        {
                dataImportante.map( act =>   
                  <Col sm={3} className="mb-4 d-flex justify-content-center p-0 productItem">
                    <Card style={{ width: '18rem',padding: '15px' }}>
                      <Card.Img variant="top" src={`/works/${act.id}.webp`}/>
                      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                        <Card.Title>{act.type}</Card.Title>
                        <Card.Text className="text-center aux">
                          {act.name}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              }
        </Row>
      </Container>
    </>
  );
}