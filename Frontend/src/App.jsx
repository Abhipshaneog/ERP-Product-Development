import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePageIndex from "./components/HomePage/HomePageIndex";
import AboutIndex from "./components/AboutUsPage/AboutIndex";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePageIndex />} />
        <Route path="/about" element={<AboutIndex />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
