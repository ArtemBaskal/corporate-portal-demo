import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import {
  deleteFromSelected,
  togglePin,
  selectFromCatalog,
  handleDrag
} from "../actions";
import "../styles/Card.css";

const MainPage = ({ cards, deleteFromSelected }) => {
  return (
    <div className="card-container">
      {cards.map(
        (card, idx) =>
          (card.isSelected ||
            Object.values(card.pinnedBy).some(el => el === true)) && (
            <Card
              key={card.label}
              label={card.label}
              isSelected={card.isSelected}
              handleDelete={() => deleteFromSelected(idx)}
            />
          )
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  cards: state.item
});

export default connect(
  mapStateToProps,
  {
    deleteFromSelected,
    togglePin,
    selectFromCatalog,
    handleDrag
  }
)(MainPage);
