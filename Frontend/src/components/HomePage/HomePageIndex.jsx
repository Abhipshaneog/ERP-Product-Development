import Navbar from "./navbar";
import Menu from "./Menu";
import MenuSecond from "./MenuSecond";
import Hero from "./Hero";
import FeaturedComponent from "./FeaturedComponent";
import FeaturedCategories from "./FeaturedCategories";
import ProductLandingPage from "./ProductLandingPage";
import Footer from "./footer";
import EcommerceSolution from "./EcommerceSolution";
import Newsletter from "./Newsletter";

function HomePageIndex() {
  return (
    <>
      <Navbar />
      <Menu />
      <MenuSecond/>
      <Hero/>
      <FeaturedComponent/>
      <FeaturedCategories/>
      <ProductLandingPage/>
      <EcommerceSolution/>
      <Newsletter/>
      <Footer/>
    </>
  );
}

export default HomePageIndex;