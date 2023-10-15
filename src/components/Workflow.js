import React from "react";


const WorkFlow = () => {
  const ourWork = [
    {
      id: "#1",
      period: " 1",
      title: "Consultation",
      desc: "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.",
    },
    {
      id: "#2",
      period: " 2",
      title: "Planning       ",
      desc: "Sprint roadmap  is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
    },
    {
      id: "#3",
      period: " 3",
      title: "Implementation",
      desc: "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.",
    },
    {
      id: "4",
      period: " 4",
      title: "Customization",
      desc: "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.",
    },
  ];

  return (
    <div className="workflow">
      <div>
        <hr />
        <h2 className="flow">Work Flow</h2>
        <h1>How we Work</h1>
      </div>
     
    </div>
  );
};

export default WorkFlow;