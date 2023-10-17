import React from 'react';
import Slider from 'react-infinite-logo-slider';
import addclip from '../images/addclip.png';
import bImage from '../images/b.png';
import click from '../images/clickorder.png';
import pjc from '../images/pjc.png';
import sampath from '../images/sampath.png';
import techmate from '../images/techmate.png';

const Component = () => {
  const images = [
    addclip,
    bImage,
    click,
    pjc,
    sampath,
    techmate,
  ];

  return (
    <Slider
      width="250px"
      duration={40}
      pauseOnHover={true}
      blurBorders={false}
      blurBorderColor="#fff"
    >
      {images.map((imageSrc, index) => (
        <Slider.Slide key={index}>
          <img src={imageSrc} alt={`Slide ${index}`} className="w-36" />
        </Slider.Slide>
      ))}
    </Slider>
  );
};

export default Component;
