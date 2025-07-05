import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row flex-column-reverse flex-md-row align-items-center p-2 p-md-5">
        <div className="col-12 col-md-6 p-3 p-md-5">
          <h1 className="fs-2 mb-4">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            Over 1 million customers trust Tradyx with their investments and trading every day.
          </p>
          <h2 className="fs-4">Simple, transparent experience</h2>
          <p className="text-muted">
            No hidden fees, no spam, and no distractions. Tradyx offers a clean, intuitive platform for all your trading needs.
          </p>
          <h2 className="fs-4">The Tradyx ecosystem</h2>
          <p className="text-muted">
            More than just a trading app—Tradyx provides a growing suite of tools and resources to help you succeed in the markets.
          </p>
          <h2 className="fs-4">Empowering your financial journey</h2>
          <p className="text-muted">
            Our mission is to make investing accessible, secure, and rewarding for everyone in India.
          </p>
        </div>
        <div className="col-12 col-md-6 p-3 p-md-5 d-flex align-items-center justify-content-center">
          <img
            src="media/images/trust.jpg"
            className="img-fluid rounded shadow-sm"
            style={{ maxWidth: "600px", width: "100%", height: "auto", display: "block" }}
            alt="Trust"
          />
        </div>
      </div>
    </div>
  );
}

export default Stats;
