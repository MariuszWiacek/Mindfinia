import React from "react";

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

const bottomBarStyle = {
  background: "black",
  color: "white",
  padding: "10px 0",
  textAlign: "center",
  textTransform: "uppercase",
  width: "100%",
  fontWeight: "bold",
  display: "flex",
  justifyContent: "space-around",
};

const bottomBarWords = [
  "STABILITY",
  "EXPERTISE",
  "INTEGRITY",
  "IMPROVEMENT",
  "QUALITY",
  "CUSTOMER SATISFACTION",
  "TRANSPARENCY",
  "COLLABORATION",
  "IMPROVEMENT",
];

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
          <div style={bottomBarStyle}>
            {bottomBarWords.map((word, index) => (
              <div key={index}>{word}</div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="row"> {/* Add margin-top to create space between components */}
        <div className="col-md-12">
          
        </div>
      </div>
      
    </div>
    
  );
};

export default Landing;
