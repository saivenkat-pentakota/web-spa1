import React from "react";
import "./MainBody.css";
import topRightArrow from "../images/top-right.png";
import asterisk from "../images/asterisk.png";

function MainBody() {
  return (
    <div className="main-body">
      <p className="main-body-header">
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
        <p className="get-started-text">
          FOR BUSINESSES WHO NEED
          <br />
          GOOD CREATIVE WITHOUT
          <br />
          THE HASSLE OR HEADACHES
        </p>
        <div className="getstarted-btn">GET STARTED</div>
      </div>
      <div className="star">
        <img className="topright-arrow" src={asterisk} alt="toprightarrow" />
      </div>
      <div className="mainbody-text">
        <p>
          NO AGENCY BLOAT.
          <br />
          NO FLAKY FREELANCERS.
          <br />
          JUST REAL <span style={{ color: "white" }}>GOOD</span> WORK.
        </p>
        <p className="mainbody-text-data">
          That’s right. No contracts, No meetings, and no BS. Our service is
          100% senior practitioner<br/> led, designed to give you nothing but
          pixel-perfect work capable of winning the hearts,<br/> minds, and wallets
          of your audiences. Don’t believe us? See some of it for yourself.
        </p>
      </div>
    </div>
  );
}

export default MainBody;
