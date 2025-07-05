import React from "react";
import "../CommonPage.css";

const Learn = () => {
  return (
    <div className="page-container">
      <div className="page-header text-center fw-bold py-3 px-2 mb-3 mb-md-4">Learn: Trading & Intraday Trading</div>
      <div className="page-form" style={{ maxWidth: 700 }}>
        <h2>What is Trading?</h2>
        <p>
          Trading is the act of buying and selling financial instruments such as stocks, bonds, commodities, or currencies with the aim of making a profit. Traders analyze markets, monitor price movements, and execute trades based on strategies and market trends.
        </p>
        <h2>What is Intraday Trading?</h2>
        <p>
          Intraday trading refers to buying and selling financial instruments within the same trading day. Positions are opened and closed on the same day, and no positions are held overnight. Intraday traders aim to capitalize on small price movements and often use technical analysis and charts to make quick decisions.
        </p>
        <h2>Common Trading Terms</h2>
        <ul>
          <li><b>Stock:</b> A share in the ownership of a company.</li>
          <li><b>Broker:</b> A person or platform that facilitates buying and selling of financial instruments.</li>
          <li><b>Order:</b> An instruction to buy or sell a security at a specified price.</li>
          <li><b>Stop Loss:</b> An order placed to sell a security when it reaches a certain price, limiting potential losses.</li>
          <li><b>Margin:</b> Borrowed funds from a broker to trade financial assets.</li>
          <li><b>Volume:</b> The number of shares or contracts traded in a security or market during a given period.</li>
          <li><b>Bull Market:</b> A market condition where prices are rising or expected to rise.</li>
          <li><b>Bear Market:</b> A market condition where prices are falling or expected to fall.</li>
          <li><b>Volatility:</b> The degree of variation in trading prices over time.</li>
          <li><b>Liquidity:</b> How easily an asset can be bought or sold in the market without affecting its price.</li>
        </ul>
        <p style={{ marginTop: 24, color: '#1976d2', fontWeight: 500 }}>
          Learning the basics of trading and understanding key terms is the first step to becoming a successful trader. Always research, practice with caution, and never invest more than you can afford to lose.
        </p>
      </div>
    </div>
  );
};

export default Learn;
