import React from "react";
import { connect } from "react-redux";
import "../styles/Card.css";
import { handleAccessRightsChange } from "../actions";
import "../styles/Card.css";

const AccessControl = ({ handleAccessRightsChange, accessRights }) => (
  <div className="access-control__select">
    <select
      name="access"
      id="access"
      onChange={e => {
        // alert(`Вы теперь ${e.target.value}`);
        return handleAccessRightsChange(e.target.value);
      }}
    >
      <option value="User">User</option>
      <option value="Admin">Admin</option>
    </select>
    {/* <span>{`Ваши текущие права доступа: ${accessRights}`}</span> */}
  </div>
);

const mapStateToProps = state => ({
  accessRights: state.accessRights
});

export default connect(
  mapStateToProps,
  { handleAccessRightsChange }
)(AccessControl);
