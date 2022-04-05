import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import { Container } from 'semantic-ui-react'
export default function CarouselMain() {
  return (
    <Container fluid className='carousel-box p-0'>
      <Carousel fade  className=' m-0' >
        <Carousel.Item  className='m-0 fondo con'>
          <img
            className="d-block w-100"
            src='/astormedic.png'
            alt="Second slide"
            
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            alt="Third slide"
          />

          <Carousel.Caption >
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}
