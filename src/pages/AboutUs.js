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

const landingBackgroundMobile = {
  background: "linear-gradient(to bottom, #6AD7E5 80%, white 20%)",
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
  lineHeight: "154.5%",
  letterSpacing: "0.99px",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: 20,
};

const aboutUsText = (
  <div className="HeroAbout d-flex flex-column align-items-center justify-content-center">
    <h1 style={{ color: "black", textAlign: "center", fontFamily: "Syne", fontSize: "32px", fontStyle: "normal", fontWeight: "600", lineHeight: "154.5%" }}>
      About Mindfinia
    </h1>
    <p style={p2Style}>
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
      style={{ width: '100%', height: 'auto', borderRadius: 20 }}
    />
  </div>
);

const AboutUs = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div style={aboutUsBackground}>
      <Navbar />
      <div style={isMobile ? landingBackgroundMobile : landingBackground}>
        <Landing text={aboutUsText} />
      </div>
      <div className="container">
        <div className="col-md-12 mx-2 d-flex flex-column align-items-center w-100">
          <hr />
          <h1 
          style={{ color: "black", textAlign: "center", fontFamily: "Syne", fontSize: "32px", fontStyle: "normal", fontWeight: "600", lineHeight: "154.5%" }}>
            Who Are We
          </h1>
          <p style={p2Style}>
            Welcome to Gravity Infosolutions, a visionary force reshaping the
            landscape of Digital Transformation, CRM, and Cloud Consulting. We
            ignite a global revolution in IT Services, forging strategic
            alliances with industry giants like Salesforce, AWS, Google Cloud,
            and Dynamics 365. Our mission? To empower businesses with the tools
            and strategies they need to not only thrive but surpass all
            expectations, delivering unprecedented growth on a global scale.
          </p>
          <p style={p2Style}>
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
          <div className={`col-md-12 mx-2 ${isMobile ? 'flex-column' : ''}`}>
            <h1>Our Vision</h1>
            <div className="card shadow mb-4" style={cardStyle}>
              <div className={`card-body d-flex flex-row ${isMobile ? 'flex-column' : ''}`}>
                <div className={`col-md-6 ${isMobile ? 'mb-4' : 'd-md-flex'}`}>
                  <p style={p2Style}>
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
                <div className={`col-md-6 ${isMobile ? 'd-md-flex' : ''}`}>
                  <img
                    className="Imagehero"
                    src={Ourvision}
                    alt="Our Vision Image"
                    style={isMobile ? imageStyle : { width: "100%", height: 'auto', margin: "0" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="HeroAbout d-flex flex-row">
          <div className={`col-md-12 mx-2 ${isMobile ? 'flex-column' : ''}`}>
            <h1>Our Mission</h1>
            <div className="card shadow mb-4" style={cardStyle}>
              <div className={`card-body d-flex flex-row ${isMobile ? 'flex-column' : ''}`}>
                <div className={`col-md-6 ${isMobile ? 'd-md-flex' : ''}`}>
                  <img
                    className="Imagehero"
                    src={Ourmission}
                    alt="Our Mission Image"
                    style={isMobile ? imageStyle : { width: "100%", height: 'auto' }}
                  />
                </div>
                <div className={`col-md-6 ${isMobile ? 'mb-4' : ''}`}>
                  <p style={p2Style}>
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
      <div className="contact-us-section">
        <ContactUs />
      </div>
    </div>
  );
};

export default AboutUs;
