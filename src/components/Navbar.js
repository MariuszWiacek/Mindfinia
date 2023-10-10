import React, { useState } from "react";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [activeButton, setActiveButton] = useState(""); // Initialize state

  const handleClick = (sectionId, buttonName) => {
    scrollToSection(sectionId);
    setActiveButton(buttonName); // Set the active button when clicked
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
                onClick={() => handleClick("landing-section", "Home")} // Pass button name as a parameter
                className={`nav-link btn ${
                  activeButton === "Home" ? "btn-dark" : "btn-light"
                } text-white`}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => handleClick("about-us", "About Us")} 
                className={`nav-link  ${
                  activeButton === "About Us" ? "btn-dark" : "btn-light"
                }text-white`}
              >
                About Us
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => handleClick("who-we-are-section", "Who We Are")} // Pass button name as a parameter
                className={`nav-link  ${
                  activeButton === "Who We Are" ? "btn-dark" : "btn-light"
                } text-white`}
              >
                Who We Are
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => handleClick("what-we-do-section", "What We Do")} // Pass button name as a parameter
                className={`nav-link  ${
                  activeButton === "What We Do" ? "btn-dark" : "btn-light"
                } text-white`}
              >
                What We Do
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => handleClick("solution-section", "Solution")} // Pass button name as a parameter
                className={`nav-link  ${
                  activeButton === "Solution" ? "btn-dark" : "btn-light"
                } text-white`}
              >
                Solution
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => handleClick("contact-us-section", "Contact Us")} // Pass button name as a parameter
                className={`nav-link  ${
                  activeButton === "Contact Us" ? "btn-dark" : "btn-light"
                } text-white`}
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
