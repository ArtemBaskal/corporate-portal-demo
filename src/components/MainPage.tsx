import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { deleteFromSelected, togglePin, handleDrag } from "../actions";
import "../styles/Card.css";
import { Cards } from "../actions";

const MainPage = ({ cards, deleteFromSelected }: any): JSX.Element => {
  return (
    <div className="card-container">
      {cards.map((card: Cards, idx: number) => {
        if (
          card.isSelected ||
          Object.values(card.pinnedBy).some(el => el === true)
        ) {
          return (
            <Card
              idx={idx}
              key={card.label}
              label={card.label.toString()}
              isSelected={card.isSelected}
              handleDelete={() => deleteFromSelected(idx)}
            />
          );
        }
      })}
    </div>
  );
};

const mapStateToProps = (state: any): any => ({
  cards: state.item
});

export default connect(
  mapStateToProps,
  {
    deleteFromSelected,
    togglePin,
    handleDrag
  }
)(MainPage);
