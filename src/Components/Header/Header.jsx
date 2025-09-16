import React, { useState, useRef, useEffect } from "react";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="header">
      <a href="/"><div className="logoDiv">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEXvM0YZHjv92zLzM0YJHTs5HzwVHjv6NEe+LUKOJ0AAHTsAHjvRL0T4qjpYIj3uJUdLITz2iz2cKkFsJj9DIDzLL0TUMET+3zFRIj0vHzymK0E0HzuhKkHgMUXBLUPvH0f0fD/3mzyNJ0CvK0JGIDzmMkV2JT/wTkTwQ0X4sDn92TP4ojv1kj30d0DZMURoJD7yWkP6wjZ/Jz8h/2x+AAADk0lEQVR4nO3deVPiMBzG8YT0Iq0FkSrl9ITVVXR9/y9uYdeDhaSzaHP8Ms/3XyeDn0nvlsIYQgghhBBCCCGEEEIIIYQQQgghhBBCVhKp5YSw62NZ97prscFNwVKLxnRdxjyxGa+Ho+7MmjEtbqVV37ZI8snU0qKang8j7qAkivozG8QNULoAbo0yvzNPFIUz4CYLRFH1HQI3xD4zSxTVyClwszIOUrPA0i2Q82hicmvjAZAn3OAk+gDkPB8ZWxP9APJoWBgSegLkSX1jZjF1vhV9z9SKmBZu94OfJUnXhNDhodp+ZoQeAc0IU6fHonuZELo6XVJnQOjTIspNCN2eLh3WutD16dJBbQu92dF/1LawGuWuSXu1KxSFH8eiu7U8h1PvgG0LxzJylCWhOF8OJ7GLaltzyGbzzEXzQa2bxdb3Fm5K57EtoaNEBiH1IKQfhPSDkH4Q0g9C+kFIPwjpByH9IKQfhPSDkH4uhdqHyTV/6C166ha9pk9xJhSsGg+UTefKRwZ7q8tTdU8/GogOhVlfaorHCmFvdd+5UPfws4HoTChmZ9pvWsjR+pC4eOxcdNRdPDwtPBQ23PWObqtDYe9E49sST32cwyZhH0IIIYQQQgghhBBCCCGEEEIIIYQQQggh/G/h+jlPNB+cl4qXHSyu9NdLO5ceXi9lbFxHubp4oLrm/fJLO4f3Kw/ncPuCqNczZctMed9i8XJ1ou5xpZ9Cl3PY9CUJ5QBq955sBSH9IKQfhPSDkH4Q0g9C+kFIPwjpR0p43CWB90F0hELMKmXFXZORjlCwQdlXV940jaMjzOJc8wIaqXpac2ccFeFSdwWZJ3LaMI6O8Ez7Iq0kHzSMC0IoISQvDH8phZC+EOshhH6EpVQ7DkJvwlKqHReE8MtzeE1FiDnUjZtkdn9krjkDQmnuV1i+UvtLaRRXPi2k7QujSeYVsHWh9A3IxHOr66GsfQMy8RrpryaqXlHwPk4pzGPvgEzM61z3EgbVM8Uf41TCfOjVfuJvgo2fS3XLrGmcQuglcEtcF+pmR96Z2QDt/dtH1dLdtS3Qxyn8agfC0IAHwuCA+8LtRiYs4J5Qxl5uRb/VP0Lp2cF2K+0Ko2GAwF1hmMAdoQwT+CkMFfghDHIj86c3obwNFfgmzJtOsIgn5sOI56NwgUzMllKWAQM3nU+nhev/wWyCBXYygRBCCCGEEEIIIYQQQgghhBBC6Fv9BuDAjtcoNs/IAAAAAElFTkSuQmCC"
          alt="Hotels.com"
          className="logoImg"
        />
        <h2 className="logoTitle">Hotels.com</h2>
      </div></a>

      <div className="dropdownShopTravelWrapper" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="dropdownShopTravelBtn"
        >
          Shop travel
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#E61E43"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="chevronIcon"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        {isOpen && (
          <div className="dropdownShopTravelMenu">
            <p className="dropdownShopTravelItem">Hotels.com® Rewards</p>
          </div>
        )}
      </div>

      <div className="rightMenu">
        <button className="getAppBtn">
          Get the app
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 -1 24 24"
            fill="none"
            stroke="#1668E3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="downloadIcon"
          >
            <path d="M12 15V3" />
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <path d="m7 10 5 5 5-5" />
          </svg>
        </button>
        <button className="rightBtn">INR 🇮🇳</button>
        <button className="rightBtn">List your property</button>
        <button className="rightBtn">Support</button>
        <button className="rightBtn">Trips</button>
        <button className="chatBtn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#E61E43"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="chatIcon"
          >
            <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
            <path d="M7 11h10" />
            <path d="M7 15h6" />
            <path d="M7 7h8" />
          </svg>
        </button>
        <button className="rightBtn">Sign in</button>
        
      </div>
    </header>
  );
}

export default Header;
