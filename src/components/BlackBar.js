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
  // Define the number of words to display based on screen width
  let wordsToDisplay = bottomBarWords;
  if (window.innerWidth < 768) {
    wordsToDisplay = bottomBarWords.slice(0, 4); // Display only the first 4 items on smaller screens
  }

  return (
    <div style={bottomBarStyle}>
      {wordsToDisplay.map((word, index) => (
        <div key={index}>{word}</div>
      ))}
    </div>
  );
};

export default BlackBar;
