
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header";
import "./HotelsOverviewPage.css";
import { dealsData } from "../../Components/TopDealsDiv/TopDealsDiv";
import MainSearch from "../../Components/WhereToNextDiv/MainSearch";
import DatePickerDiv from "../../Components/WhereToNextDiv/DatePickerDiv";
import TravellersDiv from "../../Components/WhereToNextDiv/TravellersDiv";
import GeneralBtn from "../../Components/GeneralBtn/GeneralBtn";
import PromoSection from "../../Components/PromoSection/PromoSection";
import Footer from "../../Components/Footer";

function HotelsOverviewPage() {
  const { slug } = useParams();
  const hotel = dealsData.find((d) => d.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!hotel) return <h2>Hotel not found</h2>;

  return (
    <div className="HotelsOverviewPage">
      <Header />
      <div className="top-div">
        <MainSearch />
        <DatePickerDiv />
        <TravellersDiv />
        <GeneralBtn label="Search" />
      </div>

      <div className="hotel-gallery">
        <div className="main-image">
          <img src={hotel.images[0]} alt={hotel.title} />
        </div>
        <div className="side-images">
          {hotel.images.slice(1, 4).map((img, i) => (
            <img key={i} src={img} alt={`${hotel.title}-${i}`} />
          ))}
        </div>
      </div>

      <div className="hotel-tabs">
        <span className="active">Overview</span>
        <span>About</span>
        <span>Rooms</span>
        <span>Accessibility</span>
        <span>Policies</span>
        <div className="select-a-room-btn">        <GeneralBtn label="Select a room" /> </div>
      </div>

      <div className="overview-container">
        <div className="overview-left">

          <div className="hotel-header">
            <h1>{hotel.title}</h1>
            <div className="stars">★★★</div>

            <div className="policies">
              <span> 
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#007a00" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    class="lucide lucide-check-icon lucide-check"><
                        path d="M20 6 9 17l-5-5"/></svg>

                Fully refundable</span>

              <span>
                <svg xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#007a00" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    class="lucide lucide-check-icon lucide-check"><
                        path d="M20 6 9 17l-5-5"/></svg>

                
                Reserve now, pay later</span>
            </div>

            <div className="rating-box">
              <div className="rating-tag ">
                <span className="rating">{hotel.rating}</span>
                <span className="tag">{hotel.tag}</span>
              </div>
              <span className="reviews">See all {hotel.reviews} reviews</span>
            </div>
          </div>

          <div className="about-this-property">
            <h2>About this property</h2>
            <ul>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                class="lucide lucide-square-parking-icon lucide-square-parking">
                    <rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>

                Self-parking included</li>

              <li>
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="20" height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                class="lucide lucide-utensils-icon lucide-utensils">
                    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>
                
                Restaurant</li>

              <li>
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                class="lucide lucide-wifi-icon lucide-wifi">
                    <path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/></svg> 
                    
                    Free Wi-Fi in public areas</li>

              <li>
               <svg xmlns="http://www.w3.org/2000/svg" 
               width="20" 
               height="20" 
               viewBox="0 0 24 24" 
               fill="none" 
               stroke="currentColor" 
               stroke-width="2" 
               stroke-linecap="round" 
               stroke-linejoin="round" 
               class="lucide lucide-air-vent-icon lucide-air-vent">
                <path d="M18 17.5a2.5 2.5 0 1 1-4 2.03V12"/><path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 8h12"/><path d="M6.6 15.572A2 2 0 1 0 10 17v-5"/></svg>
                
                Air-conditioning</li>

              <li>
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                class="lucide lucide-brush-cleaning-icon lucide-brush-cleaning">
                    <path d="m16 22-1-4"/><path d="M19 13.99a1 1 0 0 0 1-1V12a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v.99a1 1 0 0 0 1 1"/><path d="M5 14h14l1.973 6.767A1 1 0 0 1 20 22H4a1 1 0 0 1-.973-1.233z"/><path d="m8 22 1-4"/></svg> 
                
                Daily housekeeping</li>

              <li>
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                class="lucide lucide-hand-platter-icon lucide-hand-platter">
                    <path d="M12 3V2"/><path d="m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5"/><path d="M2 14h12a2 2 0 0 1 0 4h-2"/><path d="M4 10h16"/><path d="M5 10a7 7 0 0 1 14 0"/><path d="M5 14v6a1 1 0 0 1-1 1H2"/></svg> 
                
                Room service</li>

            </ul>
            <a href="#">See all about this property →</a>
          </div>
        </div>

        <div className="overview-right">
          <div className="map-box">
            <h3>Explore the area</h3>
            <iframe
              title="hotel-map"
              width="100%"
              height="180"
              style={{ border: 0, borderRadius: "8px" }}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                hotel.location
              )}&output=embed`}
            ></iframe>

            <div className="hotel-location">
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="19" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#000000" 
                stroke-width="1.5" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                class="lucide lucide-map-pin-icon lucide-map-pin">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg> 
                    
                    {hotel.location}

                </div>
            <a href="#">See all about this area →</a>
          </div>
        </div>
      </div>


      <PromoSection/>
      <Footer/>        

    </div>
  );
}


export default HotelsOverviewPage;
