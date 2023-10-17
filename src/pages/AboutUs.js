import React from "react";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Ourvision from "../images/ourvision.png";
import Ourmission from "../images/ourmission.png";
import aboutImage from "../images/aboutImage.png";
import ContactUs from "../components/ContactUs";


const aboutUsBackground = {
  backgroundColor: "white",
};

const landingBackground = {
  background: "linear-gradient(to bottom, #6AD7E5 50%, white 50%)",
};

const cardStyle = {
  border: "none",
  borderRadius: "10px",
};

const p2Style = {
  color: "#3E3E3E",
  textAlign: "center",
  fontFamily: "Rubik",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "154.5%", // 27.81px
  letterSpacing: "0.99px",
};

const aboutUsText = (
  <div className="HeroAbout d-flex flex-column align-items-center justify-content-center"
  style={{color:"black"}}>
    <h1>About Mindfinia</h1>
    <p style={p2Style }>
      Welcome to Gravity Infosolutions, a visionary force reshaping the
      landscape of Digital Transformation, CRM, and Cloud Consulting. We ignite
      a global revolution in IT Services, forging strategic alliances with
      industry giants like Salesforce, AWS, Google Cloud, and Dynamics 365. Our
      mission? To empower businesses with the tools and strategies they need to
      not only thrive but surpass all expectations, delivering unprecedented
      growth on a global scale.
    </p>
    <img
      className="Imagehero d-flex justify-content-center"
      src={aboutImage}
      alt="about us image"
      style={{width: '100%', height: '100%', borderRadius: 20}}
    />
  </div>
);

const AboutUs = () => {
  return (
    <>
      <div style={aboutUsBackground}>
        <Navbar />
        <div style={landingBackground}>
          <Landing text={aboutUsText} />
        </div>
      </div>
      <div className="container">
        <div className="col-md-12 mx-2 d-flex flex-column align-items-center w-100">
          <hr />
          <h1>Who Are We</h1>
          <p>
            Welcome to Gravity Infosolutions, a visionary force reshaping the
            landscape of Digital Transformation, CRM, and Cloud Consulting. We
            ignite a global revolution in IT Services, forging strategic
            alliances with industry giants like Salesforce, AWS, Google Cloud,
            and Dynamics 365. Our mission? To empower businesses with the tools
            and strategies they need to not only thrive but surpass all
            expectations, delivering unprecedented growth on a global scale.
          </p>
          <p>
            Welcome to Gravity Infosolutions, a visionary force reshaping the
            landscape of Digital Transformation, CRM, and Cloud Consulting. We
            ignite a global revolution in IT Services, forging strategic
            alliances with industry giants like Salesforce, AWS, Google Cloud,
            and Dynamics 365. Our mission? To empower businesses with the tools
            and strategies they need to not only thrive but surpass all
            expectations, delivering unprecedented growth on a global scale.
          </p>
        </div>
        <div className="HeroAbout d-flex flex-row">
          <div className="col-md-12 mx-2">
            <div className="card shadow mb-4" style={cardStyle}>
              <div className="card-body d-flex flex-row">
                <div className="col-md-6">
                  <h3>Our Vision</h3>
                  <p>
                    Welcome to Gravity Infosolutions, a visionary force
                    reshaping the landscape of Digital Transformation, CRM, and
                    Cloud Consulting. We ignite a global revolution in IT Services,
                    forging strategic alliances with industry giants like
                    Salesforce, AWS, Google Cloud, and Dynamics 365. Our mission?
                    To empower businesses with the tools and strategies they need
                    to not only thrive but surpass all expectations, delivering
                    unprecedented growth on a global scale.
                  </p>
                </div>
                <div className="col-md-6">
                  <img
                    className="Imagehero"
                    src={Ourvision}
                    alt="Our Vision Image"
                    style={{ margin: "0" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="HeroAbout d-flex flex-row">
          <div className="col-md-12 mx-2">
            <div className="card shadow mb-4" style={cardStyle}>
              <div className="card-body d-flex flex-row">
                <div className="col-md-6">
                  <img
                    className="Imagehero"
                    src={Ourmission}
                    alt="Our Mission Image"
                  />
                </div>
                <div className="col-md-6">
                  <h3>Our Mission</h3>
                  <p>
                    Welcome to Gravity Infosolutions, a visionary force reshaping
                    the landscape of Digital Transformation, CRM, and Cloud
                    Consulting. We ignite a global revolution in IT Services,
                    forging strategic alliances with industry giants like
                    Salesforce, AWS, Google Cloud, and Dynamics 365. Our mission?
                    To empower businesses with the tools and strategies they need
                    to not only thrive but surpass all expectations, delivering
                    unprecedented growth on a global scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default AboutUs;
