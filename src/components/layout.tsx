import Header from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Connect from "./connect";

const Layout = () => {
  return (
    <div className="main container-fluid h-100 d-flex flex-column px-0 no-copy">
      <Connect />
      <Header />
      <div className="main-content flex-grow-1">
        <Outlet />
      </div>
      <div className="footer mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
