import React from "react";
import "./BestWork4.css";
import bestworkvideo4 from "../images/bestwork4-video.mp4";
import bestwork4Image from "../images/bestwork4-image.jpg";

function BestWork4() {
  return (
    <div className=" d-flex flex-row bestwork4"> 
      <img
        className="bestwork4Image"
        src={bestwork4Image}
        alt="bestwork4Image"
      />
      <iframe
        className="bestwork4-video"
        width="700"
        height="700"
        src={bestworkvideo4}
        title="Embedded Video"
        allowFullScreen
        controls
        loop
      ></iframe>
      
    </div>
  );
}

export default BestWork4;
