import React from "react";
import "./MainBody.css";
import topRightArrow from "../images/top-right.png";

function MainBody() {
  return (
    <div className="main-body">
      <p>
        DONE-FOR-YOU
        <br />
        CREATIVE ON
        <br />
        DEMAND
        <img
          className="topright-arrow"
          src={topRightArrow}
          alt="toprightarrow"
        />
      </p>
      <div className="get-started">
        <p>
            FOR BUSINESSES WHO NEED<br/>GOOD CREATIVE WITHOUT<br/>THE HASSLE OR HEADACHES
        </p>
        <p className="getstarted-btn">GET STARTED</p>
        
      </div>
    </div>
  );
}

export default MainBody;
