import React from "react";
import "./CommonNavFooter.css";

function Footer() {
  return (
    <footer className="footer bg-white border-top mt-5 pt-4">
      <div className="container">
        <div className="row mt-4 gy-4">
          <div className="col-12 col-md-3 text-center text-md-start">
            <img src="media/images/logo.png" style={{ width: "120px", maxWidth: "70%" }} alt="Tradyx Logo" />
            <p className="mt-2 mb-0 small">&copy; 2025, Tradyx Broking Ltd. All rights reserved.</p>
          </div>
          <div className="col-6 col-md-3">
            <p className="fw-bold mb-2">Company</p>
            <a href="">About</a><br />
            <a href="">Products</a><br />
            <a href="">Pricing</a><br />
            <a href="">Referral programme</a><br />
            <a href="">Careers</a><br />
            <a href="">Tradyx.tech</a><br />
            <a href="">Press & media</a><br />
            <a href="">Tradyx cares (CSR)</a><br />
          </div>
          <div className="col-6 col-md-3">
            <p className="fw-bold mb-2">Support</p>
            <a href="">Contact</a><br />
            <a href="">Support portal</a><br />
            
            <a href="">List of charges</a><br />
            <a href="">Downloads & resources</a><br />
          </div>
          <div className="col-12 col-md-3">
            <p className="fw-bold mb-2">Account</p>
            <a href="">Open an account</a><br />
            <a href="">Fund transfer</a><br />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-muted small" style={{ fontSize: "14px" }}>
            <p className="mb-2">Tradyx Broking Ltd.</p>
            <p className="mb-2">
              Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
            </p>
            <p className="mb-2">
              Investments in securities market are subject to market risks; read all the related documents carefully before investing.
            </p>
            <p className="mb-0">
              "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Tradyx and offering such services, please contact us.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
