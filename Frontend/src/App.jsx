import "./App.css";
import EcommerceSolution from "./components/HomePage/EcommerceSolution";
import FeaturedCategories from "./components/HomePage/FeaturedCategories";
import FeaturedComponent from "./components/HomePage/FeaturedComponent";
import Hero from "./components/HomePage/Hero";
import Menu from "./components/HomePage/Menu";
import MenuSecond from "./components/HomePage/MenuSecond";
import Newsletter from "./components/HomePage/Newsletter";
import ProductLandingPage from "./components/HomePage/ProductLandingPage";
import Footer from "./components/HomePage/footer";
import Navbar from "./components/HomePage/navbar";

function App() {
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

export default App;
