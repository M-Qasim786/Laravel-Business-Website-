import React, { useState } from "react";
import "./Navbar.css";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <nav className="navbar">
        <h3 className="logo">
          <span style={{ color: "#0dfe85" }}>Ultra</span>Line
        </h3>
        <ul
          className={isMobile ? "nav_link_mobile" : "nav_link"}
          onClick={() => setIsMobile(false)}
        >
          <NavLink to="/" className="home" activeClassName="active_class" exact>
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/about"
            className="about"
            activeClassName="active_class"
            exact
          >
            <li>About</li>
          </NavLink>
          <NavLink
            to="/project"
            className="project"
            activeClassName="active_class"
            exact
          >
            <li>Projects</li>
          </NavLink>
          <NavLink
            to="/service"
            className="service"
            activeClassName="active_class "
            exact
          >
            <li>Services</li>
          </NavLink>
          <NavLink
            to="/contact"
            className="contact"
            activeClassName="active_class"
            exact
          >
            <li>Contact</li>
          </NavLink>
        </ul>
        <button
          className="mobile_menu_icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
        <Button
          className="btn"
          variant="contained"
          color="primary"
          href="/contact"
        >
          Get Quote
        </Button>
      </nav>
    </>
  );
};

export default Navbar;
