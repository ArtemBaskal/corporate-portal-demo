import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./Card";
import { handleDeleteFromSelected } from "../actions";
import "../styles/Card.css";

const MainPage = ({ cards, handleDeleteFromSelected }) => (
  <div className="card-container">
    {cards.map((label, i) => (
      <Card
        label={label}
        key={label}
        handleDelete={() => {
          let isEssential = false;
          const reallyDelete = window.confirm(
            `Вы действительно хотите удалить ${label} из закреплённых приложений?`
          );
          if (i === 0) isEssential = true;
          //TEST
          if (isEssential && reallyDelete === true) {
            alert(
              `Недостаточно прав для удаления закреплённого приложения "${label}"`
            );
            //TODO: если нельзя удалить, то сразу писать об этом
          } else if (!isEssential && reallyDelete)
            return handleDeleteFromSelected(label);
        }}
      />
    ))}
  </div>
);

const mapStateToProps = state => ({
  cards: state.item
});

export default connect(
  mapStateToProps,
  { handleDeleteFromSelected }
)(MainPage);
