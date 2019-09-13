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
    {Object.values(cards).map(
      card =>
        // console.log(cards[card.label] && cards[card.label].isPinned);

        // let isSelected = false;

        card.isInCatalog && (
          <Card
            label={card.label}
            key={card.label}
            canShowBacketwaste
            handleSelect={e => {
              e.stopPropagation();
              // const reallySelect = window.confirm(
              //   `Вы действительно хотите добавить ${card.label} в закреплённые приложений?`
              // );

              // let reallyMakePinned;
              // if (accessRights === "Admin" && cards[card.label]) {
              //   if (cards[card.label].isPinned) {
              //     reallyMakePinned = window.confirm(
              //       `Хотите ли вы сделать приложение ${card.label} обязательным для пользователей?`
              //     );
              //   }
              // }

              // if (reallyMakePinned) {
              if (accessRights === "Admin")
                return handlePinInSelected(card.label);
              handleSelectFromCatalog(card.label);
              // }

              // if (reallySelect) {
              //TODO: Нельзя выбирать уже выбранные приложения
              // }
            }}
            handleDelete={e => {
              e.stopPropagation();
              // const reallyDelete = window.confirm(
              //   `Вы действительно хотите удалить ${card.label} из каталога?`
              // );

              // if (accessRights !== "Admin") {
              //   alert(
              //     `Недостаточно прав доступа ${accessRights} для удаления приложения из каталога!`
              //   );
              // }
              // if (reallyDelete && accessRights === "Admin") {
              return handleDeleteFromCatalog(card.label);
              // }
            }}
          />
        )
    )}
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
