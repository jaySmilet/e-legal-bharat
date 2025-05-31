import { useLocation, useNavigate } from "react-router-dom";
import { RoutePath } from "../models/models";
import { BASE_IMAGE_PATH } from "../constants";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = (path: string) => {
    navigate(`/${path}`);
  };
  const isActive = (path: string) => {
    return location.pathname.includes(path);
  };

  return (
    <nav
      className="navbar sticky-top navbar-expand-lg bg-black ps-2"
      data-bs-theme="dark"
    >
      <div className="container-fluid px-0">
        <a
          className="navbar-brand cursor-pointer"
          onClick={() => handleClick(RoutePath.HOME)}
        >
          <img
            src={`${BASE_IMAGE_PATH}logo/e-legal-bharat-green.png`}
            className="me-2"
            style={{ width: "155px" }}
            alt="e-legal-bharat-logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end w-50 bg-black"
          tabIndex={-1}
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title"
              id="offcanvasDarkNavbarLabel"
              onClick={() => handleClick(RoutePath.HOME)}
            >
              <img
                src={`${BASE_IMAGE_PATH}logo/e-legal-bharat-green.png`}
                className="me-1"
                style={{ width: "130px" }}
                alt="e-legal-bharat-logo"
              />
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
              <li
                className="nav-item"
                onClick={() => handleClick(RoutePath.HOME)}
                data-bs-dismiss="offcanvas"
              >
                <a
                  className={`nav-link cursor-pointer ${
                    isActive(RoutePath.HOME) ? "active" : ""
                  }`}
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li
                className="nav-item"
                onClick={() => handleClick(RoutePath.ABOUT)}
                data-bs-dismiss="offcanvas"
              >
                <a
                  className={`nav-link cursor-pointer ${
                    isActive(RoutePath.ABOUT) ? "active" : ""
                  }`}
                >
                  About
                </a>
              </li>
              <li
                className="nav-item"
                onClick={() => handleClick(RoutePath.SERVICES)}
                data-bs-dismiss="offcanvas"
              >
                <a
                  className={`nav-link cursor-pointer ${
                    isActive(RoutePath.SERVICES) ? "active" : ""
                  }`}
                >
                  Services
                </a>
              </li>
              <li
                className="nav-item"
                onClick={() => handleClick(RoutePath.CONTACT)}
                data-bs-dismiss="offcanvas"
              >
                <a
                  className={`nav-link cursor-pointer ${
                    isActive(RoutePath.CONTACT) ? "active" : ""
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
