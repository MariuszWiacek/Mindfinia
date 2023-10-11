import React from "react";
import "../App.css";
import addclip from "../images/addclip.png";
import bImage from "../images/b.png";
import click from "../images/clickorder.png";
import logothree from "../images/logothree.png";
import pjc from "../images/pjc.png";
import sampath from "../images/sampath.png";
import techmate from "../images/techmate.png";

const Logo = () => {
  const images = [
    addclip,
    bImage,
    click,
    pjc,
    sampath,
    techmate,
  ];

  const imageStyle = {
    width: "100%",
    height: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "row", // Change to "row" for horizontal alignment
    overflowX: "auto",   // Enable horizontal scrolling if needed
  };

  return (
    <div className="slider pb-5 bg-light">
      <div className="slide-track" style={containerStyle}>
        {images.map((imageSrc, index) => (
          <div key={index} className={`slide slide-${(index % 9) + 1}`}>
            <img src={imageSrc} alt={`Slide ${index}`} style={imageStyle} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logo;
