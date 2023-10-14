import React from 'react';
import './Sample.css'; // You may need to adjust the path to your CSS file
import image1 from "./image1.png"
import image2 from "./image2.png"
function Sample() {
  return (
    <div className="image-container">
      <img src={image1} alt="Image 1" className="image" />
      <img src={image2} alt="Image 2" className="image" />
    </div>
  );
}

export default Sample;
