import React from "react";
import { connect } from "react-redux";
import "../styles/Card.css";
import cardImages from "../api/superheroes.json";

const Card = ({
  idx,
  label,
  cards,
  handleSelect,
  handleDelete,
  accessRights,
  canShowBacketwaste,
  onDragStart,
  onDragOver,
  onDragEnd
}) => (
  <div>
    {label.toString() && (
      <div
        onClick={handleSelect}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDragEnd={onDragEnd}
        className="card"
      >
        <img
          className="card"
          src={`${cardImages[label % (cardImages.length - 1)].image}`}
        ></img>
        {accessRights.status &&
          accessRights.status.slice(0, 5) === "Admin" &&
          !canShowBacketwaste && (
            <span onClick={handleDelete} className="card__cross">
              &#10060;
            </span>
          )}
        {cards[idx] && cards[idx].isSelected && (
          <span className="card__check">&#10003;</span>
        )}

        {accessRights.status &&
          accessRights.status.slice(0, 5) === "Admin" &&
          accessRights.priority > 1 &&
          canShowBacketwaste && (
            <span className="card__basketwaste" onClick={handleDelete}>
              &#x2612;
            </span>
          )}

        {cards[idx] &&
          Object.values(cards[idx].pinnedBy).some(el => el === true) && (
            <span
              className={
                "card__pin " +
                Object.keys(cards[idx].pinnedBy)
                  .filter(el => cards[idx].pinnedBy[el] === true)
                  .join(" ")
              }
            >
              &#x1F4CC;
            </span>
          )}
        <h1 className="card__title">{label}</h1>
        {/* <div style={{ fontSize: "10px" }}>
          {JSON.stringify(accessRights.priority)}
        </div> */}
      </div>
    )}
  </div>
);

const mapStateToProps = state => ({
  cards: state.item,
  accessRights: state.accessRights
});

export default connect(mapStateToProps)(Card);
