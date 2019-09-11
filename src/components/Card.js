import React from "react";
import "../styles/Card.css";

const Card = ({ label, handleClick }) => (
  <div onClick={handleClick} className="card">
    {label || "NoNameCard"}
  </div>
);

export default Card;
