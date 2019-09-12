import React from "react";
import "../styles/Card.css";

const Card = ({ label, handleSelect, handleDelete, isSelected, isPinned }) => (
  <div>
    {label && (
      <div onClick={handleSelect} className="card">
        {label}
        <span
          onClick={handleDelete}
          className="card__cross"
          role="img"
          aria-label={"X"}
        >
          &#10060;
        </span>
        <h1 className="card__title">{label}</h1>
        <div className="card__info">{`Selected:${isSelected}`}</div>
        <div className="card__info">{`Pinned:${isPinned}`}</div>
      </div>
    )}
  </div>
);

export default Card;
