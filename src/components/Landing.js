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

const Landing = ({ text }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div style={landingStyle}>
            <p style={textStyle}>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
