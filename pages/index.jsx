import Carousel from "../components/Carousel";
import BasicLayout from "../layouts/BasicLayout";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <BasicLayout>
      <Carousel />
      <Footer />
    </BasicLayout>
  );
}
