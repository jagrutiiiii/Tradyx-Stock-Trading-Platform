import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row px-3 px-md-5 mt-5 mb-4">
        <h1 className="fs-2 text-center">
          Tradyx: Redefining investment for the new era
          <br />
          Empowering you with next-generation trading technology.
        </h1>
      </div>

      <div
        className="row px-2 px-md-5 mt-4 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >
        <div className="col-12 col-md-6 p-3 p-md-5">
          <p>
            Tradyx was founded with a vision to remove barriers for traders and investors across India, making financial markets accessible, affordable, and transparent for everyone.
          </p>
          <p>
            Our innovative pricing and robust in-house technology have quickly established Tradyx as a leading platform for modern investors.
          </p>
          <p>
            Every day, thousands of users trust Tradyx to manage their investments and trades, leveraging our secure and intuitive ecosystem.
          </p>
        </div>
        <div className="col-12 col-md-6 p-3 p-md-5">
          <p>
            We are committed to empowering our community through open educational resources and interactive learning experiences for all levels of investors.
          </p>
          <p>
            Our innovation hub, supports emerging fintech startups and drives the evolution of India's capital markets.
          </p>
          <p>
            At Tradyx, we believe in constant innovation. Stay tuned for exciting updates, new features, and inspiring stories from our growing community.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
