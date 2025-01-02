import "./App.css";

import HomePageIndex from "./components/HomePage/HomePageIndex";
import AboutIndex from "./components/AboutUsPage/AboutIndex";
import ContactIndex from "./components/ContactUsPage/ContactIndex";

import Layout from "./Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePageIndex />} />
          <Route path="about" element={<AboutIndex />} />
          <Route path="contact" element={<ContactIndex />} />
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
