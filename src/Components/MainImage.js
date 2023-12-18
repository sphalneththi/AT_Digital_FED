import React from 'react';
import Hero from "../Assets/Hero Image.png";

const MainImage = () => {
  return (
    <>
    <div className="hero-section">
        <img src={Hero} alt="Hero Image" className="hero-image" />
        <div className="gradient-box">
            <p className="hero-text">
                We Crush Your <br/>Competitors, Goals, And<br/> Sales Records - Without <br/>The B.S.<br/>
            <button className='image-button'>GET THE FREE CONSULTATION</button>
            </p>
        </div>
    </div>
    </>
  );
};

export default MainImage;
