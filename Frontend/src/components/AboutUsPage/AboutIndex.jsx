import Navbar from "../HomePage/navbar";
import Menu from "../HomePage/Menu";
import MenuSecond from "../HomePage/MenuSecond";
import AboutUs from "./AboutUs";
import OnlineStoreInfo from "./OnlineStoreInfo";
import Footer from "../HomePage/footer";
import TeamSection from "./TeamSection";
import VideoSection from "./VideoSection";
import AboutSection from "./AboutSection";
function AboutIndex() {
  return (
    <>
      <Navbar />
      <Menu />
      <MenuSecond />
      <AboutUs />
      <OnlineStoreInfo/>
      <TeamSection/>
      <AboutSection/>
      <VideoSection/>
      <Footer/>
    </>
  );
}

export default AboutIndex;