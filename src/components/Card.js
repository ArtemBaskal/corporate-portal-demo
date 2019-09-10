import React from "react";

const Card = ({ label, handleClick }) => (
  <div onClick={handleClick}>{label || "NoNameCard"}</div>
);

export default Card;
