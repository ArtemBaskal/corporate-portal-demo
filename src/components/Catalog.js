import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleSelectFromCatalog } from "../actions";
import { handleDeleteFromCatalog } from "../actions";

const Catalog = ({
  catalog,
  accessRights,
  handleSelectFromCatalog,
  handleDeleteFromCatalog
}) => (
  <div className="card-container">
    {catalog.map(label => {
      let isSelected = false;
      return (
        <Card
          label={label}
          key={label}
          // isSelected={isSelected}
          handleSelect={() => {
            const reallySelect = window.confirm(
              `Вы действительно хотите добавить ${label} в закреплённые приложений?`
            );
            if (reallySelect /* && !isSelected */) {
              // isSelected = true;
              return handleSelectFromCatalog(label);
              //TODO: Нельзя выбирать уже выбранные приложения
            }
          }}
          handleDelete={e => {
            e.stopPropagation();
            const reallyDelete = window.confirm(
              `Вы действительно хотите удалить ${label} из каталога?`
            );

            if (accessRights !== "Admin") {
              alert(
                `Недостаточно прав доступа ${accessRights} для удаления приложения из каталога!`
              );
            }
            if (reallyDelete && accessRights === "Admin") {
              return handleDeleteFromCatalog(label);
            }
          }}
        />
      );
    })}
  </div>
);

const mapStateToProps = state => ({
  catalog: state.catalog,
  accessRights: state.accessRights
});

export default connect(
  mapStateToProps,
  { handleSelectFromCatalog, handleDeleteFromCatalog }
)(Catalog);
