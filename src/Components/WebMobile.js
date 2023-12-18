import React from 'react';
import Webimg from "../Assets/image 2.png";

const WebMobile = () => {
  return (
    <>
        <div className="web-container">
            <img src={Webimg} alt="Description" className="web-image" />
            <div className="text-container">
                <h2 className='web-title'>Web & Mobile App Development</h2>
                <p>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                <button className='learn-more'>LEARN MORE</button>
            </div>
        </div>
    </>
  );
};

export default WebMobile;
