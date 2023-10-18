import React from "react";
import { Chrono } from "react-chrono";
import TrophyImage from "../images/Trophy.png"; // Replace with the actual image path

const Workflow = () => {
  const workflowData = [
    {
      id: "#1",
      title: "Consultation",
      cardSubtitle:
        "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.",
    },
    {
      id: "#2",
      title: "Planning",
      cardSubtitle:
        "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
    },
    {
      id: "#3",
      title: "Implementation",
      cardSubtitle:
        "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.",
    },
    {
      id: "#4",
      title: "Customization",
      cardSubtitle:
        "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.",
    },
  ];

  const items = workflowData.map((item) => {
    return {
      title: item.title,
      cardTitle: item.id,
      cardSubtitle: item.cardSubtitle,
      cardDetailedText: item.cardSubtitle,
      // Add your styles here
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
          width: "95%", // Set to 90%
          margin: "auto auto",
        }}
      >
        <div style={{ flex: 9, position: "relative" }}>
          <Chrono
            items={items}
            mode="HORIZONTAL"
            scrollable={{ scrollbar: false }}
            slideShow={{ autostart: true, interval: 4000 }} 
          />
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "left" }}>
          <img
            src={TrophyImage}
            alt="Trophy"
            style={{
              height: "50px", // Adjust the size as needed
              position: "relative",
              top: "9%", // Adjust the position vertically
              left: "0%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Workflow;
