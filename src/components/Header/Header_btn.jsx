import React from "react";
import './Header_btn.css'; // Ensure this file contains styles

const Button = ({ text = "Get In Touch" }) => {
  return (
    <button className="get-in-touch-button">
      <span className="arrow-icon">→</span>
      <span className="button-text">{text}</span>
    </button>
  );
};

export default Button;
