import React, { useState } from "react";
import logo from "../images/logo.png";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState("");
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (sectionId, buttonName) => {
    if (location.pathname !== "/") {
      window.location.href = "/";
    } else {
      scrollToSection(sectionId);
      setActiveButton(buttonName);
    }
  };

  const isAboutUsPage = location.pathname.startsWith("/about-us");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent border-bottom">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <img className="navLogo" src={logo} alt="Logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button
                onClick={() => handleNavigation("Home", "Home")}
                className={`nav-link ${activeButton === "Home" || isAboutUsPage ? "btn-dark text-black" : "btn-light text-white"}`}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about-us"
                className={`nav-link ${
                  isAboutUsPage ? "btn-dark text-black" : "btn-light text-white"
                }`}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <button
                onClick={() => handleNavigation("who-we-are-section", "Who We Are")}
                className={`nav-link ${activeButton === "Who We Are" || isAboutUsPage ? "btn-dark text-black" : "btn-light text-white"}`}
              >
                Who We Are
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => handleNavigation("what-we-do-section", "What We Do")}
                className={`nav-link ${activeButton === "What We Do" || isAboutUsPage ? "btn-dark text-black" : "btn-light text-white"}`}
              >
                What We Do
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => handleNavigation("solution-section", "Solution")}
                className={`nav-link ${activeButton === "Solution" || isAboutUsPage ? "btn-dark text-black" : "btn-light text-white"}`}
              >
                Solution
              </button>
            </li>
            <li className="nav-item">
              <a
                href="#contact-us-section"
                className={`nav-link ${activeButton === "Contact Us" || isAboutUsPage ? "btn-dark text-black" : "btn-light text-white"}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact-us-section");
                  setActiveButton("Contact Us");
                }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
