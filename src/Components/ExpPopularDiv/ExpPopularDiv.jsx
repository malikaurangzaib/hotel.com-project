import React, { useRef, useState, useEffect } from "react";
import ExpPopularCard from "../ExpPopularCard/ExpPopularCard";
import "./ExpPopularDiv.css";

const categories = {
  Beach: [
    {
      id: 1,
      title: "Candolim",
      location: "Goa, India",
      price: "₹5,781",
      img: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTqbM-FweZKDA_RvPD79SJKIaGuV3JeGboThjrT_QMIxXJBlvQg6rQBR3HOPOwdJ9H1WmeJxKAgiE-vXP_EQc-xSD_zDXFxvubNEHl5pg",
    },
    {
      id: 2,
      title: "Patong",
      location: "Phuket, Thailand",
      price: "₹6,390",
      img: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/554000/554014-patong.jpg",
    },
    {
      id: 3,
      title: "Pattaya",
      location: "Thailand",
      price: "₹6,111",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/43/44/db/photo0jpg.jpg?w=900&h=500&s=1",
    },
    {
      id: 4,
      title: "Udaipur",
      price: "₹9,012",
      img: "https://s7ap1.scene7.com/is/image/incredibleindia/lake-pichola-udaipur-rajasthan-2-attr-hero?qlt=82&ts=1742161994371",
    },
    {
      id: 5,
      title: "Calangute",
      location: "Goa, India",
      price: "₹5,781",
      img: "https://hippie-inheels.com/wp-content/uploads/2021/08/Calangute_Sunset.jpg",
    },
    {
      id: 6,
      title: "Nusa dua",
      location: "Bali, Indonesia",
      price: "₹24,724",
      img: "https://cdn.prod.website-files.com/66fab24d6dde4d79b3b50865/678258d8a57c03a93b723b53_NUSA%20DUA.webp",
    },
    {
      id: 7,
      title: "Mumbai",
      location: "Maharashtra, India",
      price: "₹10,563",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/40/ce/c3/mumbai-marine-drive-along.jpg?w=900&h=-1&s=1",
    },
    {
      id: 8,
      title: "Da Nang",
      location: "Da Nang, Vietnam",
      price: "₹6,283",
      img: "https://imagedelivery.net/W3Iz4WACAy2J0qT0cCT3xA/didi/articles/aeqllwtoghtuincyt0ps4fty/public",
    },
    {
      id: 9,
      title: "Phu Quoc",
      location: "Phu Quoc, Vietnam",
      price: "₹9,596",
      img: "https://fionatravelsfromasia.com/wp-content/uploads/2025/06/Hon-Thom-Cable.jpg",
    },
  ],
  Culture: [
    {
      id: 20,
      title: "London",
      location: "United Kingdom",
      price: "₹22,979",
      img: "https://www.visitlondon.com/-/media/images/london/visit/things-to-do/sightseeing/london-itinerary/london-itinerary-lp-shutterstock-1920x1080.jpg?mw=800",
    },
    {
      id: 21,
      title: "New Delhi",
      location: "India",
      price: "₹8,696",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQPeb8oowKAnqsuEaAOwn7MKWdmD_biR6KXA&s",
    },
    {
      id: 22,
      title: "Paris",
      location: "France",
      price: "₹31,709",
      img: "https://static.independent.co.uk/2025/04/25/13/42/iStock-1498516775.jpg",
    },
    {
      id: 23,
      title: "Amsterdam",
      location: "Netherlands",
      price: "₹16,433",
      img: "https://img.static-kl.com/images/media/5444C1BF-7D85-4DE4-A0CF823E2866C03F",
    },
    {
      id: 24,
      title: "Sydney",
      location: "Australia",
      price: "₹16,788",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/cf/69/07/sydney-harbour.jpg?w=900&h=500&s=1",
    },
    {
      id: 25,
      title: "Toronto",
      location: "Ontario,Canada",
      price: "₹23,163",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNSfNVDD0jJdfd_F-gzCm_wLx1a6zQmi9tVw&s",
    },
    {
      id: 26,
      title: "Amritsar",
      location: "India",
      price: "₹4,785",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcMwnNBySO2dVd_ZrhHMN4P-kyeffVikdgoQ&s",
    },
    {
      id: 27,
      title: "Agra",
      location: "India",
      price: "₹6,945",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb61tCGU0Ut-jWPbzKj7I6CsW7pwrhYg8tSg&s",
    },
  ],
  Ski: [],
};

function ExpPopularDiv() {
  const [activeTab, setActiveTab] = useState("Beach");
  const carouselRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 1185; 
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
  }, [activeTab]);

  return (
    <div className="exp-container">
      <h2 className="exp-title">Explore stays in popular destinations</h2>

      <div className="exp-tabs">
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            className={`exp-tab ${activeTab === cat ? "active" : ""}`}
            onClick={() => {
              setActiveTab(cat);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="exp-carousel-container">
        {showLeft && (
          <button
            className="exp-btn left"
            onClick={() => scroll("left")}
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
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
        )}

        <div
          className="exp-carousel-track"
          ref={carouselRef}
          onScroll={handleScroll}
        >
          <ExpPopularCard items={categories[activeTab]} />
        </div>

        {showRight && (
          <button
            className="exp-btn right"
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
}

export default ExpPopularDiv;
