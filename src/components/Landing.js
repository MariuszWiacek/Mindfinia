import React from "react";

const landingStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  
margin: "10%",
  color: "#fff", 
  padding: "20px",
};

const bottomBarStyle = {
  background: "black",
  color: "",
  padding: "10px 0",
  textAlign: "center",
  textTransform: "uppercase",
  width: "100%",
  alignItems: "bottom",
  fontWeight: "bold",
  
};

const textStyle = {
  fontWeight: "bold",
  fontSize: "24px",
};

const Landing = () => {
  return (
    <div id="landing-section" style={landingStyle}>
      <div className="landingText" style={textStyle}>
        <p className="lead fs-3">
          "Mindfinia" combines intellectual expertise ("Mind") with limitless
          technological possibilities ("Finia"), encapsulating a promise of
          strategic insight and boundless solutions for technology consulting
          and services
        </p>
      </div>
      
    
    <div className="bottom-bar" style={bottomBarStyle}>
    Improvement Quality Customer Satisfaction Transparency
  </div>
  </div>
  );
};

export default Landing;
