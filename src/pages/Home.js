import React from "react";
import WhoWeAre from "../components/WhoWeAre";
import WhatWeDo from "../components/WhatWeDo";
import Solution from "../components/Solution";
import ContactUs from "../components/ContactUs";
import Logo from "../components/logos";
import Charts from "../components/Charts";
import Logos2 from "../components/logos2"
import "./Home.css"; // Import a custom CSS file for styling

const Home = () => {
  return (
    <div className="container home-container">
      <div className="row">
        <div className="col-12">
          <WhoWeAre />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Logo />
        </div></div>
      <div className="row">
        <div className="col-12">
          <WhatWeDo />
        </div>
      </div>
      
      <div className="row">
        <div className="col-12">
          <Solution />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Charts />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Logos2 />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default Home;
