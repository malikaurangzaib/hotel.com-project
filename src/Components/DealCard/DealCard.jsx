import React, { useState } from "react";
import "./DealCard.css";

import { Link } from "react-router-dom";


function DealCard({ deal }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? deal.images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === deal.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="deal-carousel-card">
      <div className="deal-image">
        <img src={deal.images[currentIndex]} alt={deal.title} />
        {deal.images.length > 1 && (
          <>
            <button className="image-nav left" onClick={prevImage}>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="24"
              viewBox="0 0 24 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            </button>
            <button className="image-nav right" onClick={nextImage}>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="24"
              viewBox="0 0 24 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
            </button>
          </>
        )}
      </div>
    <Link
        to={`/hotel/${deal.slug}`}
        style={{ textDecoration: "none", color: "black" }}
      >
      <div className="deal-info">
        <div className="deal-rating">
          <div className="rating">{deal.rating}</div>
          <div className="tag">{deal.tag}</div>
          <div className="reviews">({deal.reviews} reviews)</div>
        </div>
        <h3>{deal.title}</h3>
        <p className="location">{deal.location}</p>

        <p className="price">
          {deal.price} <span className="oldPrice">{deal.oldPrice}</span>
        </p>
        <p className="total">{deal.total}</p>

        {deal.memberPrice ? (
          <span className="memberPrice"> 
           <svg xmlns="http://www.w3.org/2000/svg" 
           width="14" 
           height="12" 
           viewBox="0 0 24 24" 
           fill="none" 
           stroke="currentColor" 
           stroke-width="1.75" 
           stroke-linecap="round" 
           stroke-linejoin="round" 
           class="lucide lucide-flame-icon lucide-flame">
            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>

          Member Price available</span>
        ) : (
          <span className="discount">{deal.discount}</span>
        )}
      </div>
      </Link>
    </div>
  );
}

export default DealCard;
