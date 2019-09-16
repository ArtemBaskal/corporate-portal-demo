import React from "react";
import { connect } from "react-redux";
import "../styles/Card.css";
import { accessRightsChange } from "../actions";
import "../styles/Card.css";

const ACCESS_RIGHTS = {
  User: { status: "User", priority: 0 },
  Admin_System: { status: "Admin_System", priority: 1 },
  Admin_MRF: { status: "Admin_MRF", priority: 2 },
  Admin_RF: { status: "Admin_RF", priority: 3 }
};

const AccessControl = ({ accessRightsChange }) => (
  <div className="access-control__select">
    <select
      name="access"
      id="access"
      onChange={e => accessRightsChange(ACCESS_RIGHTS[e.target.value])}
    >
      <option value="User">User</option>
      <option value="Admin_System">Admin_System</option>
      <option value="Admin_MRF">Admin_MRF</option>
      <option value="Admin_RF">Admin_RF</option>
    </select>
  </div>
);

export default connect(
  null,
  { accessRightsChange }
)(AccessControl);
