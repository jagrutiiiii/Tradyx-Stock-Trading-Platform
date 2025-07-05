
import React from "react";
import { useNavigate } from "react-router-dom";

function OpenAccount() {
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/signup");
  };
  return (
    <div className="container py-5 mb-5">
      <div className="row justify-content-center text-center">
        <div className="col-12 col-md-10 col-lg-8">
          <h1 className="mt-4 mb-3">Open a Tradyx account</h1>
          <p className="mb-4">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              className="btn btn-dark btn-lg px-4"
              style={{ minWidth: "180px", marginBottom: 0 }}
              onClick={handleSignup}
            >
              Sign up Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
