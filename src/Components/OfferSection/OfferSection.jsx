import React from "react";
import "./OfferSection.css";

const offers = [
  {
    id: 1,
    title: "Stay 10 nights, get 1 reward night",
    subtitle: "Search stays",
    image:
      "https://images.trvl-media.com/lodging/1000000/900000/894300/894255/102692ce.jpg?impolicy=resizecrop&rw=1200&ra=fit",
  },
  {
    id: 2,
    title: "Plans change. Book a stay with flexibility to cancel at any time",
    subtitle: "Book now",
    image:
      "https://cdn.staytuned.asia/medium_Resize_501_Suerior2beds_1_ee76ab04f5.jpg",
  },
  {
    id: 3,
    title: "Compare hotels side-by-side to find the right one for you",
    subtitle: "Compare hotels",
    image:
      "https://static.wixstatic.com/media/82b1e7_796b8cbdd5a047868d59fd0de2a0597d~mv2.jpg/v1/fill/w_906,h_586,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/82b1e7_796b8cbdd5a047868d59fd0de2a0597d~mv2.jpg",
  },

];

function OffersSection() {
  return (
    <div className="offers-container">
      {offers.map((offer) => (
        <div key={offer.id} className="offer-card">
          <div className="offer-content">
            <h3 className="offer-title">{offer.title}</h3>
            <a className="offer-subtitle">{offer.subtitle} ➔</a>
          </div>
          <div className="offer-image-container">
            <img src={offer.image} className="offer-image" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default OffersSection;


   