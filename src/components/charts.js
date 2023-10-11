import React from "react";

const cardContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "20px 0",
};

const cardStyle = {
  width: "30%",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
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
};

const Charts = () => {
  return (
    <div className="charts">
      <div style={cardContainerStyle}>
        <div style={cardStyle}>
          <div style={circleStyle}>100%</div>
          <div style={descriptionStyle}>
            <h2 style={h2Style}>Title 1</h2>
            <p style={pStyle}>Some description for the first chart.</p>
          </div>
        </div>

        <div style={cardStyle}>
          <div style={circleStyle}>100%</div>
          <div style={descriptionStyle}>
            <h2 style={h2Style}>Title 2</h2>
            <p style={pStyle}>Some description for the second chart.</p>
          </div>
        </div>

        <div style={cardStyle}>
          <div style={circleStyle}>100%</div>
          <div style={descriptionStyle}>
            <h2 style={h2Style}>Title 3</h2>
            <p style={pStyle}>Some description for the third chart.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
