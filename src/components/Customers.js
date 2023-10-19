import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faQuoteLeft,
  faQuoteRight,
  faStar,
  faArrowLeft,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import custPicOne from "../images/custPicOne.png";
import custPicTwo from "../images/custPicTwo.png";
import custPicThree from "../images/custPicThree.png";
import custPicFour from "../images/custPicFour.png";
import custPicFive from "../images/custPicFive.png";

const testimonialStyles = {
  testimonialSlider: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'justify',
    marginLeft: "8%",
    marginRight: "8%",
  },

  quoteContainer: {
    position: 'relative',
    backgroundColor: 'white',
    padding: '20px',
    margin: '10px',
    borderRadius: '5px',
    textAlign: 'center',
    overflow: 'hidden',
    marginLeft: "25%",
    marginRight: "25%"
    
  },

  
  leftQuote: {
    position: 'absolute',
    left: '10px',
    top: '10px',
    fontSize: '1rem',
    'fa-primary-color': '#000000', // Customize the primary color
    'fa-secondary-color': '#ffffff', // Customize the secondary color
  },

  rightQuote: {
    position: 'absolute',
    right: '10px',
    bottom: '10px',
    fontSize: '1rem',
    '--fa-primary-color': '#000000', 
    '--fa-secondary-color': 'white', 
  },
  

  quote: {
    fontSize: '18px',
    fontFamily: "Rubik",
    
    
  },

  customerCards: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'nowrap', 
    overflowX: 'hidden', 
  },

  customerCard: {
    padding: '0px',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    margin: '1px',
    width: '15%',
    textAlign: 'center',
    cursor: 'pointer',
  },

  active: {
    border: 'none',
    filter: 'none', 
  },

  inactive: {
    filter: 'blur(1.5px)',
  },

  controls: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
  },

  controlButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    margin: '0 10px',
  },

  customerImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
  },

  star: {
    color: 'gold',
  },
};

const testimonials = [
  {
    Image: custPicOne,
    id: 1,
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Romeena De Silva',
    role: 'Janet Cosmetics',
    rating: 5,
  },
  {
    Image: custPicTwo,
    id: 2,
    quote: 'Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.',
    name: 'Romeena De Silva',
    role: 'Janet Cosmetics',
    rating: 5,
  },
  {
    Image: custPicThree,
    id: 3,
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Jane Smith',
    role: 'UX Designer',
    rating: 5,
  },
  {
    Image: custPicFour,
    id: 4,
    quote: 'Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.',
    name: 'Romeena De Silva',
    role: 'Janet Cosmetics',
    rating: 5,
  },
  {
    Image: custPicFive,
    id: 5,
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Romeena De Silva',
    role: 'Janet Cosmetics',
    rating: 5,
  },
];

const CustomerTestimonial = () => {
  const defaultActiveIndex = testimonials.findIndex(testimonial => testimonial.id === 3);
  const [currentTestimonial, setCurrentTestimonial] = useState(defaultActiveIndex);

  const nextTestimonial = () => {
    const next = (currentTestimonial + 1) % testimonials.length;
    setCurrentTestimonial(next);
  };

  const prevTestimonial = () => {
    const prev = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    setCurrentTestimonial(prev);
  };

  return (
    <div style={testimonialStyles.testimonialSlider}>
      <div style={testimonialStyles.quoteContainer}>
        <FontAwesomeIcon icon={faQuoteLeft} style={testimonialStyles.leftQuote} />
        <p style={testimonialStyles.quote}>{testimonials[currentTestimonial].quote}</p>
        <FontAwesomeIcon icon={faQuoteRight} style={testimonialStyles.rightQuote} />
      </div>
      <div style={testimonialStyles.customerCards}>
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            style={{
              ...testimonialStyles.customerCard,
              ...(currentTestimonial === index ? testimonialStyles.active : testimonialStyles.inactive),
            }}
            onClick={() => setCurrentTestimonial(index)} 
          >
            <div>
              {[...Array(testimonial.rating)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} style={testimonialStyles.star} />
              ))}
              <img src={testimonial.Image} alt={`Customer ${testimonial.id}`} style={testimonialStyles.customerImage} />
              <p>{testimonial.name}</p>
              <p>{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={testimonialStyles.controls}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={testimonialStyles.controlButton}
          onClick={prevTestimonial}
        />
        <FontAwesomeIcon
          icon={faArrowRight}
          style={testimonialStyles.controlButton}
          onClick={nextTestimonial}
        />
      </div>
    </div>
  );
};

export default CustomerTestimonial;
