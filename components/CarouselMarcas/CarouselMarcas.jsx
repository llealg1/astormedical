import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
export default function CarouselMarcas() {
  const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

  return (
    <>
      <Container fluid>
        <Carousel className=''  >
          {
            arr.map( (act) => 
              <Carousel.Item className='fondo '>
                <div className="d-flex justify-content-center">
                  <Image
                    className="d-block  "
                    src={`/marcas/${ act < 18?act: 0}.png`}
                    alt="First slide"
                  />
                  <Image
                    className="d-block  "
                    src={`/marcas/${ act+1 < 18?act+1: 9}.png`}
                    alt="First slide"
                  />
                  <Image
                    className="d-block  "
                    src={`/marcas/${ act+2 < 18?act+2: 7}.png`}
                    alt="First slide"
                  />
                  <Image
                    className="d-block  "
                    src={`/marcas/${ act+3 < 18?act+3: 6}.png`}
                    alt="First slide"
                  />
                  <Image
                    className="d-block  "
                    src={`/marcas/${ act+4 < 18?act+4: 5}.png`}
                    alt="First slide"
                  />
                  <Image
                    className="d-block  "
                    src={`/marcas/${ act+5 < 18?act+5: 4}.png`}
                    alt="First slide"
                  />
                  <Image
                    className="d-block  "
                    src={`/marcas/${ act+6 < 18?act+6: 3}.png`}
                    alt="First slide"
                  />
                  <Image
                    className="d-block  "
                    src={`/marcas/${ act+7 < 18?act+7: 2}.png`}
                    alt="First slide"
                  />
                  <Image
                    className="d-block  "
                    src={`/marcas/${ act+8 <= 18?act+8: 1}.png`}
                    alt="First slide"
                  />
                </div>
          
            
              </Carousel.Item> 
            )
          }
        </Carousel>
      </Container>
    </>
  );
}