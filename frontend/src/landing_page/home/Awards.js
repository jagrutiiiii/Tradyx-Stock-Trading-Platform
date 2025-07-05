import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center flex-column-reverse flex-md-row">
        <div className="col-12 col-md-6 p-4 d-flex justify-content-center">
          <img
            src="media/images/growing.jpg"
            alt="Growing Platform"
            className="img-fluid rounded shadow-sm"
            style={{ maxWidth: "600px", width: "100%", height: "auto", display: "block" }}
          />
        </div>
        <div className="col-12 col-md-6 p-4 mt-2 mt-md-5">
          <h1 className="fw-bold mb-3">India's Fastest Growing Trading Platform</h1>
          <p className="mb-4">
            Tradyx users power a new era of retail investing and trading in India every day, participating in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul className="list-unstyled">
                <li><p>Equity & Derivatives</p></li>
                <li><p>Commodities</p></li>
                <li><p>Currencies</p></li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-unstyled">
                <li><p>Mutual Funds</p></li>
                <li><p>Bonds & Fixed Income</p></li>
                <li><p>IPOs & ETFs</p></li>
              </ul>
            </div>
          </div>
          {/* <img src="media/images/pressLogos.png" style={{ width: "90%" }} /> */}
        </div>
      </div>
    </div>
  );
}

export default Awards;
