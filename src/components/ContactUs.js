import React from "react";
import logo from "../images/logo.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const smallFontStyle = {
  fontFamily: "arial, sans-serif", 
  fontSize: "12px", 
};

const ContactUs = () => {
  return (
    <footer id="contact-us-section" style={{ background: "#013220", color: "#fff" }}>
      <div className="container">
        <div className="row">
         
          <div className="col-md-4">
            <img src={logo} alt="Logo" />
            <p>Some text about company</p>
            <div>
             
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>

          
          <div className="col-md-4">
            <h3>Links</h3>
            <ul className="list-unstyled" >
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/contact">Contact Us</a></li>
             
            </ul>
          </div>

         
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>123 Main Street</p>
            <p>City, Country</p>
            <p>Email: example@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
        
        
        <div className="row">
          <div className="col">
            
            <p className="text-center" style={smallFontStyle}>&copy; 2023 whatever</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactUs;
