import React from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

const Layout = () => {
  return (
    <div className="container-fluid h-100 d-flex flex-column  px-0">
      <Header />
      <div className="main" style={{ marginTop: "56px" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
