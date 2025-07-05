import React from "react";
import "../CommonPage.css";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import OpenAccount from "../OpenAccount";

const PricingPage = () => {
  return (
    <div className="page-container">
      <div className="page-header text-center fw-bold py-3 px-2 mb-3 mb-md-4">Investment Rates</div>
      <Hero />
      <OpenAccount />
      <Brokerage />
    </div>
  );
};

export default PricingPage;
