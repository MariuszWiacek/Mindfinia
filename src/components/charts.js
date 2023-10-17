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
  border: "none", background: "#F7F7FA"
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
    <div className="charts container"
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "50vh",
      background: "#F7F7FA",
    }}>
      <div style={cardContainerStyle} className="row">
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
    </div>
  );
};

export default Charts;
