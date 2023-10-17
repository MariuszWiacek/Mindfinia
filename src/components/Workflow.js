import React from 'react';

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
      title: "Planning",
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
    <div className="container">
      <div style={{ textAlign: "center" }}>
        <hr
          style={{
            textAlign: "center !important",
            border: 'none',
            borderTop: 'none !important',
            height: '5px',
            background: '#0049e5',
            
          }} />
        <h1>Work Flow</h1>
        <h1>How we Work</h1>
        <br></br>
      </div>
      <div className="row">
        {ourWork.map((work, index) => (
          <div key={index} className="col-md-3 mt-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{work.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{work.period}</h6>
                <p className="card-text">{work.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkFlow;
