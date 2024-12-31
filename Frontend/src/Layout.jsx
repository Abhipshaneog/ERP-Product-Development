import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/HomePage/navbar";
import Footer from "./components/HomePage/footer";
import Menu from "./components/HomePage/Menu";
import MenuSecond from "./components/HomePage/MenuSecond";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Menu/>
      <MenuSecond/>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
