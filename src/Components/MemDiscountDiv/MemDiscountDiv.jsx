import React from "react";
import "./MemDiscountDiv.css";
import GeneralBtn from "../GeneralBtn/GeneralBtn";

function MemDiscountDiv() {
  return (
    <div className="member-discount">
      <div className="tag-icon">
        <svg xmlns="http://www.w3.org/2000/svg" 
        width="28" height="28" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="#4a0695" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        class="lucide lucide-tag-icon lucide-tag">
        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/>
        <circle cx="7.5" cy="7.5" r=".5" fill="#4a0695"/></svg>
      </div>
      <p>
        Members save 10% or more on over
        100,000 hotels worldwide when signed in
      </p>

        <div className="member-signIn">
            <GeneralBtn label="Sign In now"/>
        </div>
    </div>
  );
}

export default MemDiscountDiv;