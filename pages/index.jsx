import Carousel from "../components/Carousel";
import BasicLayout from "../layouts/BasicLayout";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Nosotros from "../components/Nosotros";

export default function Home() {
  return (
    <BasicLayout>
      <Carousel />
      <Nosotros />
      <Products />
      <Footer />
    </BasicLayout>
  );
}
