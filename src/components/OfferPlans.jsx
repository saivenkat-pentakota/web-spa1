import React from "react";
import "./OfferPlans.css";

function OfferPlans() {
  return (
    <div className="offerplans">
      <div className="offerplans-header">PLANS WE OFFER</div>
      <div className="d-flex flex-row" >
        <div className="card bg-transparent" style={{ width: "22rem", padding:"2px",margin:"35px" ,color:"white"}}>
          <div className="card-body">
            <h5 className="card-title">DAAS GOOD CREATIVE DIRECTION</h5>
            <p className="card-text">
              Work with a fractional Senior Creative Director to help you and
              your team with overarching concept development, creative strategy,
              and on providing feedback on any design work being done to
              maximize the effectiveness of your team’s brand and marketing
              output.
            </p>
            <p>4 Video Calls Each Month</p>
            <p>Creative Direction & Feedback</p>
            <p>No Asset Creation</p>
            <p>Pause / Cancel Anytime</p>
            <button className="btn btn-danger">GET STARTED</button>
          </div>
        </div>
        <div className="card bg-transparent" style={{ width: "22rem", padding:"2px",margin:"35px",color:"white"  }}>
          <div className="card-body">
            <h5 className="card-title">DAAS GOOD
DESIGN</h5>
            <p className="card-text">
            Senior Designers from our team will work through your design requests one request at a time. You get unlimited revisions and 24/7 access to both Figma & Trello to make sure you’re always in the loop on where things are at.


            </p>
            <p>One Workstream</p>
            <p>24/7 Platform Access</p>
            <p>Unlimited Revisions</p>
            <p>Pause / Cancel Anytime</p>
            <button className="btn btn-danger">GET STARTED</button>
          </div>
        </div>
        <div className="card bg-transparent" style={{ width: "22rem", padding:"2px",margin:"35px",color:"white"  }}>
          <div className="card-body">
            <h5 className="card-title">DAAS GOOD PROJECT SPRINTS</h5>
            <p className="card-text">
            Have a specific need, but can’t commit a full subscription? No sweat. Our project sprint offering is a one-time, two week design sprint that gives you the design horsepower you need to get sh*t done fast.
            </p>
            <p>Up to 80 hours of design work</p>
            <p>24/7 Access to Figma & Trello</p>
            <p>Unlimited Revisions</p>
            <p>Dedicated Team</p>
            <button className="btn btn-danger">GET STARTED</button>
          </div>
        </div>
        <div className="card bg-transparent" style={{ width: "22rem" , padding:"2px",margin:"35px",color:"white" }}>
          <div className="card-body">
            <h5 className="card-title">DAAS GOOD, BUT I NEED MORE...</h5>
            <p className="card-text">
            Looking for more work streams or throughput? Have longer-term project that require additional help with content or strategy? We build custom subscription plans to fit every team’s budget requirements or needs.
            </p>
            <p>Multiple Workstreams</p>
            <p>Additional Capabilities</p>
            <p>24/7 Platform Access</p>
            <p>Unlimited Revisions</p>
            <button className="btn btn-danger">GET STARTED</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default OfferPlans;
