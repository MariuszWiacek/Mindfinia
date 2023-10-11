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
  "PTABILITY",
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
    <div>
      <div id="landing-section" style={landingStyle}>
        <p className="lead fs-3" style={textStyle}>
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
  );
};

export default Landing;
