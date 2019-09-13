import React from "react";
import { connect } from "react-redux";
import "../styles/Card.css";
import cardImages from "../api/superheroes.json";

const Card = ({
  label,
  isSelected,
  cards,
  handleSelect,
  handleDelete,
  accessRights,
  canShowBacketwaste
}) => (
  <div>
    {label && (
      <div
        onClick={handleSelect}
        className="card"
        style={{
          backgroundImage:
            `url(${cardImages[label % (cardImages.length - 1)].image})` || "",
          backgroundBlendMode: "hard-light"
        }}
      >
        {/* label */}
        {accessRights === "Admin" && !canShowBacketwaste && (
          <span
            onClick={handleDelete}
            className="card__cross"
            role="img"
            aria-label={"X"}
          >
            &#10060;
          </span>
        )}
        {cards[label] && cards[label].isSelected && (
          <span className="card__check" role="img">
            &#10003;
            {/* &#9842; */}
            {/* &#x1F4CC; */}
          </span>
        )}
        {accessRights === "Admin" && canShowBacketwaste && (
          <span className="card__basketwaste" role="img" onClick={handleDelete}>
            &#x2612;
          </span>
        )}
        {cards[label] && cards[label].isPinned && (
          <span className="card__pin" role="img">
            {/* &#10003; */}
            &#x1F4CC;
          </span>
        )}

        {/* <div className="card__info">{`Selected:${isSelected}`}</div>
        <div className="card__info">{`Pinned:${isPinned}`}</div> */}
        {/* <div>{JSON.stringify(cards[label])}</div> */}
        <h1 className="card__title">
          {label /* + cardImages[label % (cardImages.length - 1)].name */}
        </h1>
      </div>
    )}
  </div>
);

const mapStateToProps = state => ({
  cards: state.item,
  accessRights: state.accessRights
});

export default connect(mapStateToProps)(Card);
