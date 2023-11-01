import React, { useState, useEffect } from "react";

const cardStyle = {
  width: "30%",
  padding: "20px",
  border: "none",
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#F7F7FA",
};

const circleStyle = {
  width: "100px",
  height: "100px",
  border: "2px solid #000",
  borderRadius: "50%",
  lineHeight: "100px",
  fontSize: "24px",
  textAlign: "center",
  marginBottom: "20px",
};

const descriptionStyle = {
  textAlign: "center",
};

const h2Style = {
  fontSize: "18px",
  margin: 0,
};

const pStyle = {
  fontSize: "14px",
  color: "black",
};

const Charts = () => {
  const [isMobileLayout, setIsMobileLayout] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobileLayout(window.innerWidth <= 767);
    }

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobileLayout ? "column" : "row",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "50vh",
        background: "#F7F7FA",
        width: "100%",
      }}
    >
      <div style={cardStyle} className="col-md-4">
        <div style={circleStyle}>100%</div>
        <div style={descriptionStyle}>
          <h2 style={h2Style}>PROFICIENCY</h2>
          <p style={pStyle}>
            Gravity Infosolutions expertise spans consulting, development,
            integration, delivering tailored high-quality solutions to meet
            specific industry needs.
          </p>
        </div>
      </div>

      <div style={cardStyle} className="col-md-4">
        <div style={circleStyle}>100%</div>
        <div style={descriptionStyle}>
          <h2 style={h2Style}>AFFORDABILITY</h2>
          <p style={pStyle}>
            Gravity Infosolutions expertise spans consulting, development,
            integration, delivering tailored high-quality solutions to meet
            specific industry needs.
          </p>
        </div>
      </div>

      <div style={cardStyle} className="col-md-4">
        <div style={circleStyle}>100%</div>
        <div style={descriptionStyle}>
          <h2 style={h2Style}>AGILITY</h2>
          <p style={pStyle}>
            Gravity Infosolutions expertise spans consulting, development,
            integration, delivering tailored high-quality solutions to meet
            specific industry needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Charts;
