import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./Card";
import { handleDeleteFromSelected } from "../actions";
import { handlePinInSelected } from "../actions";
import "../styles/Card.css";

const MainPage = ({
  cards,
  accessRights,
  handleDeleteFromSelected,
  handlePinInSelected
}) => (
  <div className="card-container">
    {Object.values(cards).map((card, i) => (
      <Card
        label={card.label}
        key={card.label}
        isSelected={card.isSelected}
        isPinned={card.isPinned}
        handleDelete={e => {
          e.stopPropagation();
          // let isEssential = false;
          const reallyDelete = window.confirm(
            `Вы действительно хотите удалить ${card.label} из закреплённых приложений?`
          );
          // if (i === 0) isEssential = true;
          //TEST
          if (accessRights !== "Admin" && card.isPinned && reallyDelete) {
            alert(
              `Недостаточно прав для удаления закреплённого приложения "${card.label}"`
            );
            //TODO: если нельзя удалить, то сразу писать об этом
          } else if (
            (!card.isPinned && reallyDelete) ||
            (card.isPinned && accessRights == "Admin")
          )
            handleDeleteFromSelected(card.label);
        }}
        handleSelect={() => {
          const reallyMakePinned =
            accessRights === "Admin"
              ? window.confirm(
                  `Хотите ли вы сделать приложение ${card.label} обязательным для пользователей?`
                )
              : false;

          if (reallyMakePinned) {
            handlePinInSelected(card.label);
          }
        }}
      />
    ))}
  </div>
);

const mapStateToProps = state => ({
  accessRights: state.accessRights,
  cards: state.item
});

export default connect(
  mapStateToProps,
  { handleDeleteFromSelected, handlePinInSelected }
)(MainPage);
