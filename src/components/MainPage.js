import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { handleDeleteFromSelected } from "../actions";
import { handlePinInSelected } from "../actions";
import { handleSelectFromCatalog } from "../actions";
import "../styles/Card.css";

const MainPage = ({
  cards,
  handleDeleteFromSelected,
  handlePinInSelected,
  handleSelectFromCatalog
}) => (
  <div className="card-container">
    {Object.values(cards).map(
      card =>
        (card.isSelected ||
          (card.pinnedBy && Object.values(card.pinnedBy).length)) && (
          <Card
            label={card.label}
            key={card.label}
            isSelected={card.isSelected}
            pinnedBy={card.pinnedBy}
            handleDelete={e => {
              e.stopPropagation();
              // const reallyDelete = window.confirm(
              //   `Вы действительно хотите удалить ${card.label} из закреплённых приложений?`
              // );

              // if (accessRights !== "Admin_RC" && card.pinnedBy && reallyDelete) {
              //   alert(
              //     `Недостаточно прав для удаления закреплённого приложения "${card.label}"`
              //   );
              //   //TODO: если нельзя удалить, то сразу писать об этом
              // } else if (
              //   (!card.pinnedBy && reallyDelete) ||
              //   (card.pinnedBy && accessRights == "Admin_RC")
              // )
              return handleDeleteFromSelected(card.label);
            }}
            handleSelect={() => {
              // handleSelectFromCatalog(card.label);
              // handlePinInSelected(card.label);
              // const reallyMakePinned =
              //   accessRights === "Admin_RC"
              //     ? window.confirm(
              //         `Хотите ли вы сделать приложение ${card.label} обязательным для пользователей?`
              //       )
              //     : false;
              // if (reallyMakePinned) {
              // }
            }}
          />
        )
    )}
  </div>
);

const mapStateToProps = state => ({
  // accessRights: state.accessRights,
  cards: state.item
});

export default connect(
  mapStateToProps,
  { handleDeleteFromSelected, handlePinInSelected, handleSelectFromCatalog }
)(MainPage);
