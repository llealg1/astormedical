import Carousel from "../components/Carousel";
import BasicLayout from "../layouts/BasicLayout";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Nosotros from "../components/Nosotros";
import CarouselMarcas from "../components/CarouselMarcas";
import About from "../components/About";



export default function Productos()  {
  return (
    <BasicLayout>
      <Products />
      <Footer />
    </BasicLayout>
  )
}

