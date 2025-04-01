import React from "react";
import './Header_btn.css'; 

const Button = ({ text = "Get In Touch" }) => {
  return (
    <button className="get-in-touch-button">
      <span className="arrow-icon">→</span>
      <span className="button-text">{text}</span>
    </button>
  );
};

export default Button;
