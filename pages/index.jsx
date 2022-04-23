import Carousel from "../components/Carousel";
import BasicLayout from "../layouts/BasicLayout";
import Footer from "../components/Footer";
import Products from "../components/Products";

export default function Home() {
  return (
    <BasicLayout>
      <Carousel />
      <Products />
      <Footer />
    </BasicLayout>
  );
}
