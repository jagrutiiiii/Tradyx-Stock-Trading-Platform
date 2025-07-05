import React from "react";
import "../CommonPage.css";

import Hero from "./Hero";
import Team from "./Team";

function PricingPage() {
  return (
    <div className="page-container">
      <div className="page-header">About</div>
      <Team />
      <Hero />
    </div>
  );
}

export default PricingPage;
