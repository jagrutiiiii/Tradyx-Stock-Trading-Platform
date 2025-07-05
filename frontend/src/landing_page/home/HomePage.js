import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../CommonPage.css";

function HomePage() {
  return (
    <div className="page-container">
      {/* <Navbar /> */}
      <div className="page-header text-center py-3 mb-0" style={{marginBottom: 0, fontSize: "2rem", fontWeight: 600}}>Welcome to <b>Tradyx</b></div>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <OpenAccount />
      {/* <Footer />   */}
    </div>
  );
}

export default HomePage;
