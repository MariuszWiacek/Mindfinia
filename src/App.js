import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import AboutUs from "./pages/AboutUs";
import WhoWeAre from "./components/WhoWeAre";
import WhatWeDo from "./components/WhatWeDo";
import Solution from "./components/Solution";
import ContactUs from "./components/ContactUs";


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        
      
    </Router>
  );
}

export default App;
