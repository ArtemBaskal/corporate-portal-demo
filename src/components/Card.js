import React from "react";
import { connect } from "react-redux";

const Card = ({ label, handleClick }) => (
  <div onClick={handleClick}>{label || "NoNameCard"}</div>
);

const mapStateToProps = state => ({
  catalog: state.catalog
});

export default connect(mapStateToProps)(Card);
