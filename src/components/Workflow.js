import React from "react";
import Trophy from "../images/b.png";

const TimelineItem = ({ period, title, desc, position, id }) => (
  <div className={`timeline-content ${position}`}>
    <div className="header-section">
      <div className="timeline-id">{id}</div>
      <div className="timeline-title">{title}</div>
      <div className="timeline-period">{period}</div>
    </div>
    <p>{desc}</p>
  </div>
);

const WorkFlow = () => {
  const ourWork = [
    {
      id: "#1",
      period: "01",
      title: "Consultation",
      desc: "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.",
    },
    {
      id: "#2",
      period: "02",
      title: "Planning       ",
      desc: "Sprint roadmap  is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
    },
    {
      id: "#3",
      period: "03",
      title: "Implementation",
      desc: "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.",
    },
    {
      id: "#4",
      period: "04",
      title: "Customization",
      desc: "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.",
    },
  ];

  return (
    <div className="workflow">
      <div>
        <hr className="hrwork" />
        <h2 className="flow">Work Flow</h2>
        <h1>How we Work</h1>
      </div>
      <div className="timeline">
        <div className="timeline-line">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
          <div className="line4"></div>
        </div>
        <img className="trophy" src={Trophy} alt="trophy" />

        {/* Render top items */}
        <div className="top-items">
          {ourWork.map(
            (step, index) =>
              index % 2 === 0 && (
                <TimelineItem
                  key={index}
                  id={step.id}
                  period={step.period}
                  title={step.title}
                  desc={step.desc}
                  position="top"
                />
              )
          )}
        </div>

        {/* Render bottom items */}
        <div className="bottom-items">
          {ourWork.map(
            (step, index) =>
              index % 2 !== 0 && (
                <TimelineItem
                  key={index}
                  id={step.id}
                  period={step.period}
                  title={step.title}
                  desc={step.desc}
                  position="bottom"
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;