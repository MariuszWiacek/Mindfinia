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
              <div key={index}>{word}</div>
            ))}
          </div> )}

          export default BlackBar