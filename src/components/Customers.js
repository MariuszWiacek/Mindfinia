import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import custPicOne from "../images/custPicOne.png";
import custPicTwo from "../images/custPicTwo.png";
import custPicThree from "../images/custPicThree.png";
import custPicFour from "../images/custPicFour.png";
import custPicFive from "../images/custPicFive.png";

const reviewers = [
  {
    Image: custPicOne,
    Rating: 5,
    Name: "Romeena De Silva",
    Prof: "Janet Cosmetics",
  },
  {
    Image: custPicTwo,
    Rating: 5,
    Name: "Romeena De Silva",
    Prof: "Janet Cosmetics",
  },
  {
    Image: custPicThree,
    Rating: 5,
    Name: "Imran Khan",
    Prof: "Software Engineer",
  },
  {
    Image: custPicFour,
    Rating: 5,
    Name: "Romeena De Silva",
    Prof: "Janet Cosmetics",
  },
  {
    Image: custPicFive,
    Rating: 5,
    Name: "Romeena De Silva",
    Prof: "Janet Cosmetics",
  },
];

const quotes = [
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
  "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.",
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
  "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.",
];

const Customers = () => {
  return (
    <div className="content-wrapper container">
      <hr className="hrReviews" />
      <h1 className="mb-4 text-center">Why customers love</h1>
      <h2 className="text-center mb-5">working with us</h2>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div
            id="multi-item-carousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              {reviewers.map((reviewer, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <div className="row">
                    {reviewers.map((innerReviewer, innerIndex) => (
                      <div className="col-md-2" key={innerIndex}>
                        <img
                          src={innerReviewer.Image}
                          alt={innerReviewer.Name}
                          style={{ width: "100px", height: "100px" }}
                        />
                        {[...Array(innerReviewer.Rating)].map((_, idx) => (
                          <FontAwesomeIcon
                            key={idx}
                            icon={faStar}
                            color="yellow"
                          />
                        ))}
                        <p>{innerReviewer.Name}</p>
                        <p>{innerReviewer.Prof}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <a
              className="carousel-control-prev"
              href="#multi-item-carousel"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#multi-item-carousel"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-12 text-center">
          <p className="quote">{quotes[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default Customers;
