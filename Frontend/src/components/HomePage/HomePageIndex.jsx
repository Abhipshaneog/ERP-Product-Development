import Hero from "./Hero";
import FeaturedComponent from "./FeaturedComponent";
import FeaturedCategories from "./FeaturedCategories";
import ProductLandingPage from "./ProductLandingPage";
import EcommerceSolution from "./EcommerceSolution";
import Newsletter from "./Newsletter";

function HomePageIndex() {
  return (
    <>
      <Hero/>
      <FeaturedComponent/>
      <FeaturedCategories/>
      <ProductLandingPage/>
      <EcommerceSolution/>
      <Newsletter/>
    </>
  );
}

export default HomePageIndex;