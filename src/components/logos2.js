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

const Logos2 = () => {
  return (
    <div style={{
        textAlign:"center",
        alignContent:"center",
    }}>
        <hr className="hr-styled"></hr>
        <h1>Our<br></br> Valued Customer</h1>
       

<div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img className="node" src={nodejs} alt="node" />
        <img className="php" src={php} alt="php" />
        <img className="Mysql" src={mysql} alt="mysql" />
        <img className="java" src={java} alt="java" />
        <img className="net" src={Netcore} alt="net" />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img className="python" src={python} alt="python" />
        <img className="rails" src={ruby} alt="ruby" />
        <img className="go" src={go} alt="go" />
        <img className="mongo" src={mongo} alt="mongoDb" />
      </div>
    </div>
    </div>
    
  );
};

export default Logos2;