import React from "react";
import image4 from "../images/image4.png";

const Solution = () => {
  return (
    <div id="solution-section" className="container">
      {/* First Row */}
      <div className="row" style={{ minHeight: "75vh" }}>
        {/* First Column (50%) */}
        <div className="col-md-6 d-flex align-items-center">
          {/* Your text content here */}
          <div>
            <hr className="hr-styled" />
            <h1>Why Choose Us</h1>
            <h6 className="heading">
              UNMATCHED EXPERTISE, EMPOWERING SCALABILITY, & IRRESISTIBLE
              COMPETITIVE PRICING
            </h6>
            <p className="paragraph">
              Gravity Infosolutions is a dynamic digital transformation,
              Salesforce consulting and development powerhouse, dedicated to
              empowering businesses to unleash the full potential of the
              Salesforce platform. With a comprehensive suite of cutting-edge
              services, we enable organizations to embark on seamless Salesforce
              implementation, tailor-made customization, seamless integration,
              streamlined migration, and unwavering support. We are your trusted
              partner in harnessing the transformative power of Salesforce to
              drive unprecedented growth, enhance operational efficiency, and
              achieve unrivaled success.
            </p>
          </div>
        </div>
        {/* Second Column (50%) */}
        <div className="col-md-6 d-flex align-items-center">
          {/* Your rounded image */}
          <div
            style={{
              boxShadow: "5px 5px 10px lightblue", 
              borderRadius: "10%",
            }}
          >
            <img
              src={image4} 
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
    </div>
  );
};

export default Solution;
