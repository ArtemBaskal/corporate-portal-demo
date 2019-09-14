import React from "react";
import { connect } from "react-redux";
import "../styles/Card.css";
import { handleAccessRightsChange } from "../actions";
import "../styles/Card.css";

const ACCESS_RIGHTS = {
  User: { status: "User", priority: 0 },
  Admin_RC: { status: "Admin_RC", priority: 1 },
  Admin_MRF: { status: "Admin_MRF", priority: 2 },
  Admin_RT: { status: "Admin_RT", priority: 3 }
};

const AccessControl = ({ handleAccessRightsChange }) => (
  <div className="access-control__select">
    <select
      name="access"
      id="access"
      onChange={e => handleAccessRightsChange(ACCESS_RIGHTS[e.target.value])}
    >
      <option value="User">User</option>
      <option value="Admin_RC">Admin_RC</option>
      <option value="Admin_MRF">Admin_MRF</option>
      <option value="Admin_RT">Admin_RT</option>
    </select>
    {/* <span>{`Ваши текущие права доступа: ${accessRights}`}</span> */}
  </div>
);

// const mapStateToProps = state => ({
//   accessRights: state.accessRights
// });

export default connect(
  null,
  { handleAccessRightsChange }
)(AccessControl);
