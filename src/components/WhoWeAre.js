import React from "react";
import aboutImage from "../images/aboutImage.png"; // Import your image source

const WhoWeAre = () => {
  return (
    <div id="who-we-are-section">
      {/* First Row */}
      <div className="row" style={{ height: "75vh" }}>
        {/* First Column (50%) */}
        <div className="col-md-6">
          <div className="d-flex align-items-center justify-content-center h-100">
            {/* Your text content here */}
            <div>
              <h1>Who We Are</h1>
              <p>Your description</p>
            </div>
          </div>
        </div>
        {/* Second Column (50%) */}
        <div className="col-md-6">
          <div className="d-flex align-items-center justify-content-center h-100">
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
      </div>
      {/* Second Row */}
      <div className="row" style={{ height: "25vh" }}>
        {/* Full-width row */}
        <div className="col">
          {/* Your content for the second row */}
          <div className="d-flex align-items-center justify-content-center h-50">
            <p>Meet the people <br></br>we are working with</p>
          </div>
          <div className="d-flex align-items-center justify-content-center h-50">
            <p>logos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
