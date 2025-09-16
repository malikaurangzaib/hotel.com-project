import React from "react";
import "./ExpPopularCard.css";

function ExpCard({ items }) {
  return (
    <>
      {items.map((item) => (
        <div className="exp-card" key={item.id}>
          <img src={item.img} alt={item.title} className="exp-card-img" />
          <div className="exp-card-body">
            <h3 className="exp-card-title">{item.title}</h3>
            <p className="exp-card-location">{item.location}</p>
            <p className="exp-card-price">
              {item.price} <span>avg. nightly price</span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default ExpCard ;
