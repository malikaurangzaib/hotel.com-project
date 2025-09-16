import React, { useState, useRef, useEffect } from "react";
import "./MainSearch.css";

function MainSearch() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isSearchOpen &&
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isSearchOpen]);

  return (
    <div ref={searchRef} className="main-search-container" onClick={() => setIsSearchOpen(true)}>
      <div className="main-location-logo"> 
        <svg xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="24"
        viewBox="2 0 24 24" 
        fill="none" 
        stroke="black" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"  
        class="lucide lucide-map-pin-icon lucide-map-pin">
       <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
      <circle cx="12" cy="10" r="1"/>
      </svg>
      </div>
         Where to?
     
      {isSearchOpen && (
        <div className="search-dropdown">
         <input
            type="text"
            placeholder="Where to?" 
                    className="main-search-input"

            />
          <p className="search-dropdown-title">Popular destinations</p>
          <ul className="search-dropdown-list">
            {[
              "Lahore, Pakistan",
              "Makkah, Saudi Arabia",
              "London, UK",
              "Madinah, Saudi Arabia",
              "New York, USA",
              "Istanbul, Turkiye",
              "LA, USA"
            ].map((city) => (
              <li
                key={city}
                className="search-dropdown-item"
                onClick={() => setIsSearchOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="24"
                  viewBox="2 0 24 24" 
                  fill="none" 
                  stroke="black" 
                  stroke-width="2" 
                  stroke-linecap="round" 
                  stroke-linejoin="round"  
                  class="lucide lucide-map-pin-icon lucide-map-pin">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
                <circle cx="12" cy="10" r="1"/>
                </svg>
                {city}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MainSearch;
