import React from "react";

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
  margin: "0",
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

const BlackBar = () => {
  return (
    <div style={bottomBarStyle}>
      {bottomBarWords.map((word, index) => (
        <h4 className="word" key={index}>
          {word}
        </h4>
      ))}
    </div>
  );
};

export default BlackBar;
