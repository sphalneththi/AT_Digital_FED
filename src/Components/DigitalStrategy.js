import React from 'react';
import digitalstrategyimg from "../Assets/image 1.png";

const DigitalStrategy = () => {
  return (
    <>
        <div className="digi-container">
            <img src={digitalstrategyimg} alt="Description" className="digi-image" />
            <div className="text-container">
                <h2 className='digi-title'>Digital Strategy Consulting</h2>
                <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
                <button className='learn-more'>LEARN MORE</button>
            </div>
            
        </div>
    </>
  );
};

export default DigitalStrategy;
