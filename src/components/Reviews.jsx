import React from "react";
import "./Reviews.css";

function Reviews() {
  return (
    <div className="reviews d-flex flex-row">
      <div
        className="card bg-transparent"
        style={{
          width: "22rem",
          padding: "2px",
          margin: "35px",
          color: "black",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">
            DAAS GOOD DID EVERYTHING FROM BUSINESS CARDS TO THE LOOK AND FEEL OF
            OUR WEBSITE, ALL IN SUCH A SHORT PERIOD OF TIME.  IT HELPED US A
            TON.
          </h5>
          <p>Founder, B2B MedTech Company</p>
        </div>
      </div>
      <div
        className="card bg-transparent"
        style={{
          width: "22rem",
          padding: "2px",
          margin: "35px",
          color: "black",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">
          I’D NEVER WORK WITH ANOTHER AGENCY OR FREELANCER AGAIN. THEIR SERVICE IS THAT GOOD.
          </h5>
          <p>CMO, B2C Apparel Company</p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
