import React, { useState, useRef } from "react";
import iconOne from "../images/icn1.png";
import iconTwo from "../images/icn2.png";
import iconThree from "../images/icn3.png";

const Card = (props) => {
  const { image, title, desc, isActive } = props;

  return (
    <div
      className={`card cardStyle ${isActive ? "active" : ""}`}
      style={{
        flex: "1 0 250px",
        margin: "2rem",
        overflow: "hidden",
        borderRadius: "6px",
        cursor: "pointer",
        boxShadow: "5px 5px 10px #6AD7E5",
        transition: "transform 0.2s ease-in-out",
        transform: isActive ? "translateY(10px)" : "none",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "50px",
          height: "50px",
          objectFit: "cover",
          borderRadius: "50%",
          border: "1px solid #6AD7E5",
          padding: "10px",
          marginLeft: "10px",
          marginTop: "10px",
        }}
      />
      <div className="card-content" style={{ padding: "1rem" }}>
        <h2
          style={{
            fontFamily: "Syne",
            fontWeight: "600",
            fontSize: "20px",
            color: "#2D3748",
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontFamily: "Arial",
            fontWeight: "400",
            fontSize: "14px",
            color: "#718096",
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

const CardContainer = (props) => {
  const [activeIndex, setActiveIndex] = useState(2);
  const containerRef = useRef(null);
  const cardWidth = 272;

  const handleIndexChange = (index) => {
    setActiveIndex(index);
    const newScrollPosition = index * cardWidth;
    if (containerRef.current) {
      containerRef.current.scrollLeft = newScrollPosition;
    }
  };

  return (
    <div>
      <div
        ref={containerRef}
        className="cards-container"
        style={{
          display: "flex",
          padding: "1rem",
          overflowX: "hidden",
          position: "relative",
          transition: "scroll-left 0.5s",
          alignItems: "flex-start",
        }}
      >
        {props.cards.map((card, index) => (
          <Card
            key={card.title}
            title={card.title}
            desc={card.desc}
            image={card.image}
            isActive={index === activeIndex}
          />
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        {props.cards.map((_, index) => (
          <span
            key={index}
            style={{
              height: "8px",
              width: "8px",
              backgroundColor: activeIndex === index ? "#6AD7E5" : "#ddd",
              borderRadius: "50%",
              display: "inline-block",
              margin: "0 2px",
              cursor: "pointer",
            }}
            onClick={() => handleIndexChange(index)}
          />
        ))}
      </div>
      <div style={{ textAlign: "right", marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ color: "#D3D3D3", margin: "0" }}>01 </p>
          {props.cards.map((_, index) => (
            <span
              key={index}
              style={{
                height: "3px",
                width: "35px",
                backgroundColor: activeIndex === index ? "#6AD7E5" : "#ddd",
                display: "inline-block",
                margin: "0 0px",
                cursor: "pointer",
              }}
              onClick={() => handleIndexChange(index)}
            />
          ))}
          <p style={{ color: "#6AD7E5", margin: "0" }}> 05</p>
        </div>
      </div>
    </div>
  );
};

const WhatWeDo = () => {
  const cardData = [
    {
      image: iconTwo,
      title: "Web Design & Development",
      desc: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      image: iconOne,
      title: "Mobile App Development",
      desc: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      image: iconTwo,
      title: "Web Design Development",
      desc: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      image: iconThree,
      title: "Software Testing Service",
      desc: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      image: iconTwo,
      title: "Software Testing Service",
      desc: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
  ];

  // Determine whether you are on a mobile device based on screen width.
  const isMobile = window.innerWidth < 768;

  return (
    <div id="what-we-do-section" style={{ background: "#F7FEFF" }}>
      <div className="container" style={{ textAlign: "center", width: "90%", margin: "auto" }}>
        <hr className="hr-styled" style={{ margin: "0 auto" }} />
        <h1>Services we offer</h1>

        {isMobile ? (
          <Card
            title={cardData[0].title}
            desc={cardData[0].desc}
            image={cardData[0].image}
            isActive={true}
          />
        ) : (
          <CardContainer cards={cardData} />
        )}
      </div>
    </div>
  );
};

export default WhatWeDo;
