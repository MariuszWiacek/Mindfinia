import React from "react";
import BlackBar from "./BlackBar";

const landingStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  margin: "10%",
  color: "#fff",
  padding: "0px",
};

const textStyle = {
  fontWeight: "bold",
  fontSize: "24px",
};



const Landing = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div style={landingStyle}>
            <p  style={textStyle}>
              "Mindfinia" combines intellectual expertise ("Mind") with limitless
              technological possibilities ("Finia"), encapsulating a promise of
              strategic insight and boundless solutions for technology consulting
              and services
            </p>
          </div>
          
        </div>
      </div>
      
      
      
    </div>
    
  );
};

export default Landing;
