import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { handleSelectFromCatalog } from "../actions";

const Catalog = ({ catalog, handleSelectFromCatalog }) => (
  <div>
    Catalog
    {catalog.map(label => (
      <Card
        label={label}
        key={label}
        handleClick={() => handleSelectFromCatalog(label)}
      />
    ))}
  </div>
);

const mapStateToProps = state => ({
  catalog: state.catalog
});

export default connect(
  mapStateToProps,
  { handleSelectFromCatalog }
)(Catalog);
