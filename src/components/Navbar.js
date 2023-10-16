import React, { useState } from "react";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState("");

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (sectionId, buttonName) => {
    if (window.location.pathname !== "/") {
      window.location.href = "/";
    } else {
      scrollToSection(sectionId);
      setActiveButton(buttonName);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-transparent border-bottom">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <img className="navLogo" src={logo} alt="Logo" />
        </NavLink>
        <div className="collapse navbar-collapse d-flex justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                onClick={() => handleNavigation("Home", "Home")}
                className={`nav-link ${activeButton === "Home" ? "btn-dark" : "btn-light"
                  } text-white`}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
            <NavLink
  to="/about-us"
  className={`nav-link ${activeButton === "About Us" ? "btn-dark" : "btn-light"} ${activeButton === "About Us" ? "text-black" : "text-white"}`}
>
  About Us
</NavLink>
            </li>
            <li className="nav-item">
              <button
                onClick={() => handleNavigation("who-we-are-section", "Who We Are")}
                className={`nav-link ${activeButton === "Who We Are" ? "btn-dark" : "btn-light"} text-white`}
              >
                Who We Are
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => handleNavigation("what-we-do-section", "What We Do")}
                className={`nav-link ${activeButton === "What We Do" ? "btn-dark" : "btn-light"} text-white`}
              >
                What We Do
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => handleNavigation("solution-section", "Solution")}
                className={`nav-link ${activeButton === "Solution" ? "btn-dark" : "btn-light"} text-white`}
              >
                Solution
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => handleNavigation("contact-us-section", "Contact Us")}
                className={`nav-link ${activeButton === "Contact Us" ? "btn-dark" : "btn-light"} text-white`}
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
