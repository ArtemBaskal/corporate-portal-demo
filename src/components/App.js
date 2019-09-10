import React from "react";
import Card from "./Card";
import Catalog from "./Catalog";
import { connect } from "react-redux";

const App = ({ cards }) => (
  <div>
    {cards.map(label => (
      <Card label={label} key={label} />
    ))}
    <Catalog />
  </div>
);

const mapStateToProps = state => ({
  cards: state.item
});

export default connect(mapStateToProps)(App);
