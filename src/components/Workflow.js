import React from "react";
import { Chrono } from "react-chrono";
import TrophyImage from "../images/Trophy.png";

const Workflow = () => {
  const workflowData = [
    {
      id: "1",
      title: "Consultation",
      cardSubtitle:
        "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.",
        cardSubtitle2: "01"},
    {
      id: "2",
      title: "Planning",
      cardSubtitle:
        "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
        cardSubtitle2: "02"},
    {
      id: "3",
      title: "Implementation",
      cardSubtitle:
        "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.",
        cardSubtitle2: "03"},
    {
      id: "4",
      title: "Customization",
      cardSubtitle:
        "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.",
      cardSubtitle2: "04"
    },
  ];

  const items = workflowData.map((item) => {
    return {
      title: item.title,
      cardTitle: (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <span style={{ color: "blue", fontSize: "1.8em" }}>#{item.id}</span>
          </div>
          <div style={{ color: "black" , fontSize: "1.8em"}}>{item.title}</div>
          <div style={{  fontSize: "3rem", color: "lightgrey"  }}>{item.cardSubtitle2}</div>
        </div>
      ),
      
      cardDetailedText: item.cardSubtitle,
      style: {
        
        borderRadius: "9px",
        border: "1px solid var(--shade-primary-lite-bg, #E7DAED)",
      },
    };
  });

  return (
    <div>
      <div className="container" style={{ textAlign: "center", width: "90%", margin: "auto" }}>
        <hr className="hr-styled" style={{ margin: "0 auto" }} />
        <h1 className="flow">Work Flow</h1>
        <h1>How we Work</h1>
      </div>
      <div
        style={{
          display: "flex",
          width: "90%", 
          margin: "auto auto",
        }}
      >
        <div style={{ flex: 9, position: "relative"}}>
          <Chrono
            items={items}
            mode="HORIZONTAL"
            scrollable={{ scrollbar: false }}
            slideShow={{ autoPlay: true, interval: 3000, repeat: true }} 
          />
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "left" }}>
          <img
            src={TrophyImage}
            alt="Trophy"
            style={{
              height: "50px", 
              position: "relative",
              top: "9%", 
              left: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Workflow;
