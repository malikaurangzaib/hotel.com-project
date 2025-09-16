import React from "react";
import "./PromoSection.css";

function PromoSection() {
  return (
    <div className="promo-container">
      <div className="promo-image">
        <img
          src="https://a.travel-assets.com/mad-service/footer/bnaBanners/HCOM_POOL_Stocksy_300dpi.jpg"
          alt="Hotel Pool"
        />
      </div>

      <div className="promo-content">
        <h2>
          With the Hotels.com app, you <br /> can:
        </h2>
        <ul>
          <li>Save on select hotels</li>
          <li>Earn one reward night* for every 10 nights you stay</li>
          <li>Search, book, and save on the go</li>
        </ul>
        <p className="promo-bold">
          Scan the QR code with your device camera and download our app
        </p>
        <a href="/" className="promo-link">
          *See Hotels.com Rewards terms & conditions
        </a>
      </div>

      <div className="promo-qr">
        <img
          src="data:image/png;base64,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"
          alt="QR Code"
        />
      </div>
    </div>
  );
}

export default PromoSection;
