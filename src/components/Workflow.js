import React from "react";
import styled from "styled-components";

const Timeline = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TimelineItem = styled.div`
  background: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  width: 200px;
  text-align: center;
  position: relative;
  flex: 1;
  margin: 5px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -10px;
    width: 10px;
    height: 2px;
    background: #007BFF; /* Blue line */
  }

  &:first-child::before {
    content: none;
  }
`;

const WorkFlow = () => {
  const ourWork = [
    {
      id: 1,
      title: "Consultation",
      desc:
        "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.",
    },
    {
      id: 2,
      title: "Planning",
      desc:
        "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
    },
    {
      id: 3,
      title: "Implementation",
      desc:
        "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.",
    },
    {
      id: 4,
      title: "Customization",
      desc:
        "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.",
    },
  ];

  return (
    <div className="workflow mb-5"><br></br>
      <div style={{textAlign: "center"}}>
            <hr className="hr-styled" style={{margin: "0 auto"}} />
            <h1>Work Flow</h1>
            <h1>How we work</h1>
            <br></br>
          </div>
      <Timeline>
        {ourWork.map((step) => (
          <TimelineItem key={step.id}>
            <div className="timeline-title">{step.title}</div>
            <p>{step.desc}</p>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default WorkFlow;
