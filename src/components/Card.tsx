import React from "react";
import { connect } from "react-redux";
import "../styles/Card.css";
import cardImages from "../api/superheroes.json";
import { User, Cards } from "../actions";

interface AppProps {
  idx: number;
  label: string;
  cards?: any;
  handleSelect?: any;
  handleDelete?: any;
  accessRights: User;
  canShowBacketwaste?: boolean;
  onDragStart?: any;
  onDragOver?: any;
  onDragEnd?: any;
  isSelected?: any;
}

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
}: AppProps): JSX.Element => (
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
          className="card__img"
          src={`${cardImages[Number(label) % (cardImages.length - 1)].image}`}
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
          accessRights.priority > 0 &&
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

const mapStateToProps = (state: any) => ({
  cards: state.item,
  accessRights: state.accessRights
});

export default connect(mapStateToProps)(Card);
