import React from 'react';
import Slider from 'react-infinite-logo-slider';

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

const blackBarStyle = {
  background: "black",
  color: "white",
  padding: "8px 0",
  textAlign: "center",
  textTransform: "uppercase",
  width: "100%",
  fontWeight: "bold",
  display: "flex",
  justifyContent: "space-between",
  margin: "0",
};

const BlackBar = () => {
  return (
    <div style={blackBarStyle} className="bottom-bar">
      <Slider
        width="250px"
        duration={40}
        pauseOnHover={true}
        blurBorders={false}
        blurBorderColor="#fff"
      >
        {bottomBarWords.map((word, index) => (
          <Slider.Slide key={index}>
            <h4 className="word" style={{ marginRight: `${word.length * 1.5}px` }}>
              {word}
            </h4>
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  );
};

export default BlackBar;
