import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleSelectFromCatalog } from "../actions";

const Catalog = ({ catalog, handleSelectFromCatalog }) => (
  <div className="card-container">
    {catalog.map(label => {
      let isSelected = false;
      return (
        <Card
          label={label}
          key={label}
          isSelected={isSelected}
          handleClick={() => {
            const reallySelect = window.confirm(
              `Вы действительно хотите добавить ${label} в закреплённые приложений?`
            );
            if (reallySelect /* && !isSelected */) {
              // isSelected = true;
              return handleSelectFromCatalog(label);
              //TODO: Нельзя выбирать уже выбранные приложения
            }
          }}
        />
      );
    })}
  </div>
);

const mapStateToProps = state => ({
  catalog: state.catalog
});

export default connect(
  mapStateToProps,
  { handleSelectFromCatalog }
)(Catalog);
