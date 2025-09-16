import React, { useRef, useState, useEffect } from "react";
import "./DiscoverFavCarousel.css";

const Carousel = () => {
  const carouselRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const items = [
    {
      title: "Apart hotel",
      img: "https://img.freepik.com/premium-photo/photo-portrait-luxury-hotel-room-with-comfortable-bed_1077802-309882.jpg",
    },
    {
      title: "Resort",
      img: "https://images.unsplash.com/photo-1549294413-26f195200c16?fm=jpg&q=60&w=3000",
    },
    {
      title: "Spa",
      img: "https://static-new.lhw.com/HotelImages/Final/LW2207/lw2207_181715384_1400x600.jpg",
    },
    {
      title: "Apartment",
      img: "https://cdn.mos.cms.futurecdn.net/pWZUE68NSfhbHXMS5LLzqA.jpg",
    },
    {
      title: "Cottage",
      img: "https://b516565.smushcdn.com/516565/wp-content/uploads/2024/06/Portrait-6-small.jpg?lossy=2&strip=1&webp=1",
    },
    {
      title: "Houseboat",
      img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/689960569.jpg?k=56b1b3c03f8710f41ec7b325e81e1ab1add0007193403e8d9f52218cd4a3931f&o=&hp=1",
    },
    {
      title: "Sea view",
      img: "https://media.istockphoto.com/id/1198357641/photo/beachfront-bungalow-with-sea-view.jpg?s=612x612&w=0&k=20&c=IzbxGDLBX_Bk-gAth-bo2B6DoecThMDcOkSdiGiXW0w=",
    },
    {
      title: "Family friendly",
      img: "https://media.istockphoto.com/id/1358217269/photo/smiling-family-of-four-enters-to-the-hotel-lobby-to-check-in-at-the-reception-for-vacation.jpg?s=612x612&w=0&k=20&c=81YOwRoF-QuQ9P6VvI-KAiTv0VUVsnSLnWV9XIDR4AY=",
    },
    {
      title: "Villa",
      img: "https://media.istockphoto.com/id/157525171/photo/villa-sunrise.jpg?s=612x612&w=0&k=20&c=l5eQDGar2pVuGOsuBoNYyUsPs1BPZ4_JmPMubVkC-vE=",
    },
    {
      title: "Hot tub",
      img: "https://static.vecteezy.com/system/resources/previews/069/344/345/non_2x/hot-tub-in-hotel-photo.jpg",
    },
    {
      title: "Campsite",
      img: "https://images.unsplash.com/photo-1576176539998-0237d1ac6a85?fm=jpg&q=60&w=3000",
    },
    {
      title: "Pool",
      img: "https://images.unsplash.com/photo-1551491603-7d38b9e605f5?fm=jpg&q=60&w=3000",
    },
  ];

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 1300;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <div className="carousel-section">
      <h2 className="carousel-title">Discover your new favourite stay</h2>
      <div className="carousel-container">
        {showLeft && (
          <button className="carousel-btn left" onClick={() => scroll("left")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
        )}

        <div
          className="carousel-track"
          ref={carouselRef}
          onScroll={handleScroll}
        >
          {items.map((item, index) => (
            <div className="carousel-card" key={index}>
              <img src={item.img} alt={item.title} />
              <span className="card-text">{item.title}</span>
            </div>
          ))}
        </div>

        {showRight && (
          <button
            className="carousel-btn right"
            onClick={() => scroll("right")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
