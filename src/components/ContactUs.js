import React from "react";
import logo from "../images/logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";


const iconStyle = {
  backgroundColor: "#fff", 
  borderRadius: "50%", 
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px", 
  height: "40px",
  margin: "5px", 
};

const iconColorStyle = {
  color: "#013220", 
  fontSize: "20px", 
};

const ContactUs = () => {
  return (
    <footer id="contact-us-section" style={{ background: "#013220", color: "#fff" }}>
      <div className="container">
        <div className="row">
         
          <div className="col-md-4">
            <img src={logo} alt="Logo" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.</p>
            <div className="social-icons">
            <a href="#" style={iconStyle}>
                <FaFacebook style={iconColorStyle} />
              </a>
              <a href="#" style={iconStyle}>
                <FaInstagram style={iconColorStyle} />
              </a>
              <a href="#" style={iconStyle}>
                <FaTwitter style={iconColorStyle} />
              </a>
              <a href="#" style={iconStyle}>
                <FaLinkedin style={iconColorStyle} />
              </a>
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

         
          <div className="col-md-4 text-light">
            <h3>Contact us</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p>+923183561921</p>
          </div>
        </div>
        
        
        <div className="row">
          <div className="col">
            
          <p className="text-white-50 text-center">
          © 2023 Copyright by IK Developers. All rights reserved.
        </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactUs;
