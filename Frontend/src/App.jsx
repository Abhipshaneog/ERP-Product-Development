import "./App.css";
import HomePageIndex from "./components/HomePage/HomePageIndex";
import AboutIndex from "./components/AboutUsPage/AboutIndex";
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
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
