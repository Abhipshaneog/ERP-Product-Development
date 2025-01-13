import "./App.css";

import HomePageIndex from "./components/HomePage/HomePageIndex";
import AboutIndex from "./components/AboutUsPage/AboutIndex";
import ContactIndex from "./components/ContactUsPage/ContactIndex";
import LoginRegister from "./components/LoginAndRegister/LoginRegister";
import PasswordReset from "./components/LoginAndRegister/PasswordReset";
import ResetPassword from "./components/LoginAndRegister/ResetPassword";

import { gapi } from "gapi-script";
const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

import Layout from "./Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: googleClientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePageIndex />} />
            <Route path="about" element={<AboutIndex />} />
            <Route path="contact" element={<ContactIndex />} />
            <Route path="my-account" element={<LoginRegister />} />
            <Route path="password-reset" element={<PasswordReset />} />
            <Route path="reset-password/:token" element={<ResetPassword />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
