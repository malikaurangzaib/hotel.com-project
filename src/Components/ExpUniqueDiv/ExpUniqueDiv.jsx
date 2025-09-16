import React, { useRef, useState, useEffect } from "react";
import "./ExpUniqueDiv.css";
import DealCard from "../DealCard/DealCard";

  const dealsData = [
  {
    id: 0,
    slug: "welcomHeritage-santa-roza-kasauli",
    title: "WelcomHeritage Santa Roza Kasauli",
    location: "Kasauli",
    rating: 10,
    reviews: 2,
    tag: "Exceptional",
    price: "₹7,809",
    oldPrice: "₹9,761",
    total: "₹18,429 total includes taxes & fees",
    discount: "20% off",
    uniqueDeal: true,
    images: [
      "https://images.trvl-media.com/lodging/97000000/96360000/96350600/96350572/0bed904a.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/97000000/96360000/96350600/96350572/515067a2.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/97000000/96360000/96350600/96350572/708c3110.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/97000000/96360000/96350600/96350572/d4541287.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    ],
  },
  {
    id: 1,
    slug: "orchid-hotel-chandigarh-zirakpur",
    title: "Orchid Hotel Chandigarh,Zirakpur",
    location: "Zirakpur",
    rating: 9.4,
    reviews: 9,
    tag: "Exceptional",
    price: "₹4,576",
    oldPrice: "₹5,792",
    total: "₹10,250 total includes taxes & fees",
    discount: "21% off",
    uniqueDeal: false,
    images: [
      "https://images.trvl-media.com/lodging/113000000/112600000/112591600/112591504/8f2c5d2f.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/113000000/112600000/112591600/112591504/14b32866.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/113000000/112600000/112591600/112591504/b9f4b9de.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/79000000/78750000/78746300/78746208/317b1cb5.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    ],
  },
  {
    id: 2,
    slug: "treebo-premium-arista",
    title: "Treebo Premium Arista",
    location: "Mohali",
    rating: 8.4,
    reviews: 5,
    tag: "Very good",
    price: "₹2,304",
    oldPrice: "₹6,226",
    total: "₹5,160 total includes taxes & fees",
    discount: "63% off",
    uniqueDeal: false,
    images: [
      "https://images.trvl-media.com/lodging/79000000/78750000/78746300/78746208/47e7af78.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/79000000/78750000/78746300/78746208/bd1f32cf.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/79000000/78750000/78746300/78746208/4810de09.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/79000000/78750000/78746300/78746208/426f5c23.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/79000000/78750000/78746300/78746208/317b1cb5.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    ],
  },
  {
    id: 3,
    slug: "hotel-park-tree-near-delhi-airport",
    title: "Hotel Park Tree Near Delhi Airport",
    location: "New Delhi IGI Airport",
    rating: 9.4,
    reviews: 228,
    tag: "Exceptional",
    price: "₹2,799",
    oldPrice: "₹3,999",
    total: "₹6,270 total includes taxes & fees",
    memberPrice: true,
    uniqueDeal: true,
    images: [
      "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202207220800098819-3037c390-2ee8-462c-b52b-334491adaa19.jpg",
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/A85w0E6k5DHVOQM3/dsc_6993-YZ978a21NqfMw2r2.JPG",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/726834717.jpg?k=a6b524f7105161a210dcbeb586cdb07c2b5df8904e35169703bb81e3cb68f205&o=&hp=1",
      "https://rukmini-ct.flixcart.com/w_2048,f_auto,q_auto/ct-hotel-images/places/hotels/cms/3989/3989357/images/image_3989357_ceba9f73-6b0d-48bf-a0f7-16de89144e3a_proc.jpeg",
    ],
  },
  {
    id: 4,
    slug: "hotel-jmk",
    title: "Hotel JMK",
    location: "New Delhi",
    rating: 10,
    reviews: 2,
    tag: "Exceptional",
    price: "₹2,438",
    oldPrice: "₹3,750",
    total: "₹5,460 total includes taxes & fees",
    memberPrice: true,
    uniqueDeal: true,
    images: [
      "https://images.trvl-media.com/lodging/114000000/113330000/113322300/113322267/a96c6c3e.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/114000000/113330000/113322300/113322267/ec980992.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/79000000/78750000/78746300/78746208/317b1cb5.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/93000000/92360000/92351000/92350970/w2998h1999x2y1-5952bf6c.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    
    ],
  },
  {
    id: 5,
    slug: "the-manor-luxury-apartments",
    title: "The Manor luxury Apartments",
    location: "Shimla",
    rating: 9.4,
    reviews: 6,
    tag: "Exceptional",
    price: "₹8,120",
    oldPrice: "₹10,150",
    total: "₹19,163 total includes taxes & fees",
    memberPrice: true,
    uniqueDeal: true,
    images: [
      "https://images.trvl-media.com/lodging/114000000/113330000/113322300/113322267/26cb50f9.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/114000000/113330000/113322300/113322267/1c5accba.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/61000000/60370000/60361800/60361790/089f9d80.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/61000000/60370000/60361800/60361790/03383738.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    ],
  },
  {
    id: 6,
    slug: "hotel-49-amritsar",
    title: "Hotel 49",
    location: "Amritsar",
    rating: 9.4,
    reviews: 13,
    tag: "Exceptional",
    price: "₹1,671",
    oldPrice: "₹2,199",
    total: "₹3,744 total includes taxes & fees",
    discount: "33% off",
    uniqueDeal: false,
    images: [
      "https://images.trvl-media.com/lodging/20000000/19560000/19553100/19553086/04ebc4be.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/20000000/19560000/19553100/19553086/a5678540.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/20000000/19560000/19553100/19553086/aaa6c858.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/20000000/19560000/19553100/19553086/10a6aeb0.jpg?impolicy=resizecrop&rw=1200&ra=fit",
   
    ],
  },
  {
    id: 7,
    slug: "portola-hotel-by-parkside",
    title: "Portola Hotel By Parkside",
    location: "Dharamshala",
    rating: 9.1,
    reviews: 16,
    tag: "Exceptional",
    price: "₹1,671",
    oldPrice: "₹2,199",
    total: "₹3,744 total includes taxes & fees",
    discount: "28% off",
    uniqueDeal: true,
    images: [
      "https://images.trvl-media.com/lodging/101000000/100940000/100934400/100934392/66b924c9.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/101000000/100940000/100934400/100934392/9a476c50.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/101000000/100940000/100934400/100934392/69e853fa.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/101000000/100940000/100934400/100934392/87c058a2.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    ],
  },
  {
    id: 8,
    slug: "fabexpress-yug-villa",
    title: "Fabexpress Yug Villa",
    location: "New Delhi",
    rating: 8.1,
    reviews: 1,
    tag: "Very good",
    price: "₹2,274",
    oldPrice: "₹4,291",
    total: "₹5,095 total includes taxes & fees",
    memberPrice: true,
    uniqueDeal: false,
    images: [
      "https://images.trvl-media.com/lodging/93000000/92360000/92351000/92350970/1447e3ba.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/93000000/92360000/92351000/92350970/cc89a120.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/93000000/92360000/92351000/92350970/w2999h1999x1y1-f9933cfd.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/93000000/92360000/92351000/92350970/w2998h1999x2y1-5952bf6c.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    ],
  },
   {
    id: 9,
    slug: "the-good-vibes-by-aero-stays",
    title: "The Good Vibes by Aero Stays",
    location: "Kasauli",
    rating: 10,
    reviews: 9,
    tag: "Exceptional",
    price: "₹5,180",
    oldPrice: "₹7,400",
    total: "₹10,250 total includes taxes & fees",
    memberPrice: true,
    uniqueDeal: true,
    images: [
      "https://images.trvl-media.com/lodging/116000000/115850000/115840700/115840607/c8d57c84.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/116000000/115850000/115840700/115840607/73cd836b.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/116000000/115850000/115840700/115840607/w1170h1158x0y0-c19110f8.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/79000000/78750000/78746300/78746208/317b1cb5.jpg?impolicy=resizecrop&rw=1200&ra=fit",

    ],
  },
];

function ExpUniqueDiv() {
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
  }, []);

  return (
    <div className="expUnique-carousel-section">
      <h2 className="expUnique-carousel-title">Explore these unique stays</h2>
      <p className="expUnique-carousel-subtitle">
        Showing deals for: <span>3 Oct - 5 Oct</span>
      </p>

      <div className="expUnique-carousel-container">
        {showLeft && (
          <button
            className="expUnique-carousel-btn left"
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
          className="expUnique-carousel-track"
          ref={carouselRef}
          onScroll={handleScroll}
        >
          {dealsData
        .filter((deal) => deal.uniqueDeal) 
        .map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
        </div>

        {showRight && (
          <button
            className="expUnique-carousel-btn right"
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

export default ExpUniqueDiv;
