import React from "react";
import "./GeneralBtn.css";

function Button({ label = "Button", onClick, type = "button" ,style}) {
  return (
    <button className="custom-btn" onClick={onClick} type={type} style={style}>
      {label}
    </button>
  );
}

export default Button;
