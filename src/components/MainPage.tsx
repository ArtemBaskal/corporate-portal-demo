import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { deleteFromSelected, togglePin, handleDrag } from "../actions";
import "../styles/Card.css";
import { App } from "../actions";

const MainPage = ({ apps, deleteFromSelected }: any): JSX.Element => {
  return (
    <div className="card-container">
      {apps.map((card: App, idx: number) => {
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
  apps: state.apps
});

export default connect(
  mapStateToProps,
  {
    deleteFromSelected,
    togglePin,
    handleDrag
  }
)(MainPage);
