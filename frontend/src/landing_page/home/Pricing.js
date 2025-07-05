import React from "react";

function Pricing() {
  return (
    <div className="container py-4">
      <div className="row align-items-center g-4">
        <div className="col-12 col-md-5 mb-4 mb-md-0">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="/pricing" style={{ textDecoration: "none" }}>
            See Pricing{' '}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-12 col-md-7 mb-5">
          <div className="row text-center g-3">
            <div className="col-12 col-sm-6 p-3 border rounded-3 bg-light">
              <h1 className="mb-3">₹0</h1>
              <p>
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>
            <div className="col-12 col-sm-6 p-3 border rounded-3 bg-light">
              <h1 className="mb-3">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
