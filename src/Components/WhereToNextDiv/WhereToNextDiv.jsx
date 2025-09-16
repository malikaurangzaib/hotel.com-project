
import React from "react";
import "./WhereToNextDiv.css";
import MainSearch from "./MainSearch";
import DatePickerDiv from "./DatePickerDiv";
import GeneralBtn from "../GeneralBtn/GeneralBtn";
import TravellersDiv from "./TravellersDiv";

function WhereToNextDiv() {
  return (
    <div className="where-to-next-container">
      <div className="where-to-next-inner">
        <div className="where-to-next-heading">Where to next?</div>
          <div className="where-to-next-bottom">
              <MainSearch/> 
              <DatePickerDiv/> 
              <TravellersDiv/> 
              <GeneralBtn label="Search" /> 
          </div>
      </div>
    </div>
  );
}

export default WhereToNextDiv;


