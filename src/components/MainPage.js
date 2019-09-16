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

const MainPage = props => {
  return (
    <div className="card-container">
      {props.cards.map(
        card =>
          (card.isSelected ||
            Array.from(card.pinnedBy.priority).length > 1) && (
            <Card
              key={card.label}
              label={card.label}
              isSelected={card.isSelected}
              handleDelete={() => {
                return props.deleteFromSelected(card.label);
              }}
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
