import React from "react";
import "../Css/Whatsup.css";

export default function Whatsup() {
  return (
    <a
      href="https://wa.me/919876543210" // replace with your number
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
}
