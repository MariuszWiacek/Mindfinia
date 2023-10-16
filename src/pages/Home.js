import React from "react";
import WhoWeAre from "../components/WhoWeAre";
import WhatWeDo from "../components/WhatWeDo";
import Solution from "../components/Solution";
import ContactUs from "../components/ContactUs";
import Logo from "../components/logos";
import Charts from "../components/Charts";
import Logos2 from "../components/logos2";
import Customers from "../components/Customers";
import Workflow from "../components/Workflow";
import NavLayout from "../components/NavLayout"; // Import your NavLayout component
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import BlackBar from "../components/BlackBar";

import "./Home.css";
const HomeText = `
"Mindfinia" combines intellectual expertise ("Mind") with
limitless technological possibilities ("Finia"), encapsulating a
promise of strategic insight and boundless solutions for
technology consulting and services`;
const Home = () => {
  return (
    <>
      <NavLayout>
     <Navbar />
     <Landing text={HomeText}/>
     </NavLayout>
      
      
      <BlackBar />
      
      <div className="container home-container">
        <div className="who-we-are-section">
          <div className="row">
            <div className="col-12">
              <WhoWeAre />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Logo />
          </div>
        </div>
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
        {/*<div className="row">
          <div className="col-12">
            <Customers />
          </div>
        </div>*/}
        <div className="row">
          <div className="col-12">
            <Workflow />
          </div>
        </div>
        <div className="contact-us-section">
          <div className="col-12">
            <ContactUs />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;