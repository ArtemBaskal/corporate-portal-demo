import React from "react";
import "../styles/Card.css";

const Card = ({ label, handleSelect, handleDelete }) => (
  <div>
    <div onClick={handleSelect} className="card">
      {label.toString() || "NoNameCard"}
      <span
        onClick={handleDelete}
        className="card__cross"
        role="img"
        aria-label={"X"}
      >
        &#10060;
      </span>
      <h1 className="card__title">{label}</h1>
    </div>
  </div>
);

export default Card;
