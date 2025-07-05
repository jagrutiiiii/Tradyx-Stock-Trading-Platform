import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
    const handleSignup = () => {
      navigate("/signup");
    };
  return (
    <div className="container p-4 mb-5">
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-12 col-md-10 col-lg-8">
          <img
            src="media/images/main.jpg"
            alt="Hero_img"
            className="mb-3 img-fluid rounded shadow-sm"
            style={{ width: "100%", maxWidth: "850px", margin: "0 auto" }}
          />
          <h1 className="mt-4 display-5 fw-bold">Invest in everything</h1>
          <p className="lead mb-4">
            Online platform to invest in stocks, derivatives, mutual funds, and more
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              className="btn btn-dark btn-lg px-4"
              style={{ minWidth: "180px", marginBottom: 0 }}
              onClick={handleSignup}
            >
              Signup Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
