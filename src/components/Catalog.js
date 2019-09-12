import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { handleSelectFromCatalog } from "../actions";
import { handleDeleteFromCatalog } from "../actions";
import { handlePinInSelected } from "../actions";

const Catalog = ({
  catalog,
  accessRights,
  cards,
  handleSelectFromCatalog,
  handleDeleteFromCatalog,
  handlePinInSelected
}) => (
  <div className="card-container">
    {Object.values(catalog).map(card => {
      console.log(cards[card.label] && cards[card.label].isPinned);

      // let isSelected = false;
      return (
        <Card
          label={card.label}
          key={card.label}
          //isSelected={isSelected}
          handleSelect={() => {
            const reallySelect = window.confirm(
              `Вы действительно хотите добавить ${card.label} в закреплённые приложений?`
            );

            let reallyMakePinned;
            if (accessRights === "Admin" && cards[card.label]) {
              if (cards[card.label].isPinned) {
                reallyMakePinned = window.confirm(
                  `Хотите ли вы сделать приложение ${card.label} обязательным для пользователей?`
                );
              } /* else if (!cards[card.label].isPinned) {
                reallyMakePinned = window.confirm(
                  `Хотите ли вы сделать приложение ${card.label} необязательным для пользователей?`
                );
              } */
            }

            if (reallyMakePinned) {
              handlePinInSelected(card.label);
            }

            if (reallySelect) {
              handleSelectFromCatalog(card.label);
              //TODO: Нельзя выбирать уже выбранные приложения
            }
          }}
          handleDelete={e => {
            e.stopPropagation();
            const reallyDelete = window.confirm(
              `Вы действительно хотите удалить ${card.label} из каталога?`
            );

            if (accessRights !== "Admin") {
              alert(
                `Недостаточно прав доступа ${accessRights} для удаления приложения из каталога!`
              );
            }
            if (reallyDelete && accessRights === "Admin") {
              return handleDeleteFromCatalog(card.label);
            }
          }}
        />
      );
    })}
  </div>
);

const mapStateToProps = state => ({
  catalog: state.catalog,
  accessRights: state.accessRights,
  cards: state.item
});

export default connect(
  mapStateToProps,
  { handleSelectFromCatalog, handleDeleteFromCatalog, handlePinInSelected }
)(Catalog);
