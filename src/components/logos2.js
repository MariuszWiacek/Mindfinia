import React from "react";
import go from "../images/logos/Go.png";
import java from "../images/logos/Java.png";
import mongo from "../images/logos/mongodb.png";
import mysql from "../images/logos/mysql.png";
import Netcore from "../images/logos/NETCore.png";
import nodejs from "../images/logos/NodeJS.png";
import php from "../images/logos/PHP.png";
import python from "../images/logos/Python.png";
import ruby from "../images/logos/RubyOnRails.png";

const mediaQuery = `@media screen and (max-width: 768px) {
  .logo-group {
    max-width: 400px;
  }
}`;

const Logos2 = () => {
  const containerStyles = {
    textAlign: "center",
  };

  const hrStyles = {
    /* Define your horizontal rule styling */
  };

  const headingStyles = {
    /* Define your heading styling */
  };

  const logosWrapperStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  };

  const logoGroupStyles = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    maxWidth: "800px",
    margin: "0 auto",
  };

  const logoStyles = {
    maxWidth: "100%",
    height: "auto",
  };

  return (
    <div style={containerStyles}>
      <hr style={hrStyles} />
      <h1 style={headingStyles}>Our Valued Customer</h1>

      <div style={logosWrapperStyles}>
        <style>{mediaQuery}</style>
        <div style={logoGroupStyles} className="logo-group">
          <img style={logoStyles} src={nodejs} alt="node" />
          <img style={logoStyles} src={php} alt="php" />
          <img style={logoStyles} src={mysql} alt="mysql" />
          <img style={logoStyles} src={java} alt="java" />
          <img style={logoStyles} src={Netcore} alt="net" />
        </div>
        <div style={logoGroupStyles} className="logo-group">
          <img style={logoStyles} src={python} alt="python" />
          <img style={logoStyles} src={ruby} alt="ruby" />
          <img style={logoStyles} src={go} alt="go" />
          <img style={logoStyles} src={mongo} alt="mongoDb" />
        </div>
      </div>
    </div>
  );
};

export default Logos2;
