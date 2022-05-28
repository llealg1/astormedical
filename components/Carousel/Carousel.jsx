import { Container } from 'semantic-ui-react'
import Image from 'react-bootstrap/Image'
import Carousel  from 'react-bootstrap/Carousel'
export default function CarouselMain() {
  
  const arr = [0,1,2,3,4];
  return (
    <Container fluid className='p-0' id="carou" >
      <Carousel className='carousel-box' interval={4000} >
        {
          arr.map( (act,i) => 
            <Carousel.Item   key={i} className='fondo '>
              <Image
              
                className="d-block w-100 h-80 "
                src={`/slides/${act}.webp`}
                alt="First slide"
              />
            </Carousel.Item> 
          )
        }
      </Carousel>
    </Container>
    
  )


}


