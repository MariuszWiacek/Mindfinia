import React from "react";
import aboutImage from "../images/aboutImage.png"; // Import your image source

const WhoWeAre = () => {
  return (
    <div id="who-we-are-section" className="container">
      {/* First Row */}
      <div className="row" style={{ minHeight: "75vh" }}>
        {/* First Column (50%) */}
        <div className="col-md-6 d-flex align-items-center">
          {/* Your text content here */}
          <div>
            <hr className="hr-styled" />
            <h1>About Mindfinia</h1>

            <p className="paragraph">
              Welcome to Gravity Infosolutions, a visionary force reshaping the
              landscape of Digital Transformation, CRM, and Cloud Consulting. We
              ignite a global revolution in IT Services, forging strategic
              alliances with industry giants like Salesforce, AWS, Google Cloud,
              and Dynamics 365. Our mission? To empower businesses with the tools
              and strategies they need to not only thrive but surpass all
              expectations, delivering unprecedented growth on a global scale.
            </p>
          </div>
        </div>
        {/* Second Column (50%) */}
        <div className="col-md-6 d-flex align-items-center">
          {/* Your rounded image */}
          <div
            style={{
              boxShadow: "5px 5px 10px lightblue", // Add a light blue shadow
              borderRadius: "10%",
            }}
          >
            <img
              src={aboutImage} // Use the imported image source
              alt="Who We Are"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "10%",
              }}
            />
          </div>
        </div>
      </div>
      {/* Second Row */}
      <div className="row" style={{ minHeight: "25vh" }}>
        {/* Full-width row */}
        <div className="col d-flex align-items-start justify-content-start">
          {/* Your content for the second row */}
          <div>
            <hr className="hr-styled" />
            <h1>Meet the people</h1>
            <h1>We are Working With</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
