import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa"; // Import quote and star icons
import sampleCustomerImage from "../images/icn3.png";

const Customers = () => {
  const customerReviews = [
    {
      name: "John Doe",
      position: "CEO",
      stars: 5,
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        name: "John Doe",
        position: "CEO",
        stars: 5,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "John Doe",
        position: "CEO",
        stars: 5,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "John Doe",
        position: "CEO",
        stars: 5,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "John Doe",
        position: "CEO",
        stars: 5,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    // Add more customer reviews here
  ];

  const cardStyle = {
    width: "20%", // Each card takes 20% of the container width to create 5 columns
    display: "inline-block",
    verticalAlign: "top",
    textAlign: "center",
    padding: "20px",
  };

  return (
    <div style={{ textAlign: "center" }}>
      <hr className="hr-styled" />
      <h1>
        Our<br></br>Why customers love<br></br>working with us
      </h1>
      <p className="big-quoted-quote">"Here will be quotes from customers"</p>

      <div className="customer-cards">
        {customerReviews.map((review, index) => (
          <div key={index} style={cardStyle} className="customer-card">
            <div className="quote-icon">
              <FaQuoteLeft />
            </div>
            <div className="customer-image">
              <div className="circle">
                <img src={sampleCustomerImage} alt={review.name} />
              </div>
            </div>
            <div className="star-icons">
              {[...Array(review.stars)].map((_, i) => (
                <FaStar key={i} className="yellow-star" />
              ))}
            </div>
            <div className="customer-info">
              <p>{review.name}</p>
              <p>{review.position}</p>
              <p>{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;
