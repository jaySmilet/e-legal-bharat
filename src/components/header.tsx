import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RoutePath } from "../models/models";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = (path: string) => {
    navigate(`/${path}`);
  };
  const isActive = (path: string) => {
    return location.pathname === `/${path}`;
  };

  return (
    <nav
      className="navbar fixed-top navbar-expand-lg px-0"
      data-bs-theme="dark"
      style={{ backgroundColor: "#712cf9" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand cursor-pointer">E Legal Bharat</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-5" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li
              className="nav-item"
              onClick={() => handleClick(RoutePath.HOME)}
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
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
