import React from "react";
import { connect } from "react-redux";
import "../styles/Card.css";
import { handleAccessRightsChange } from "../actions";

const AccessControl = ({ handleAccessRightsChange, accessRights }) => (
  <div>
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
    <h2>{`Ваши текущие права доступа: ${accessRights}`}</h2>
  </div>
);

const mapStateToProps = state => ({
  accessRights: state.accessRights
});

export default connect(
  mapStateToProps,
  { handleAccessRightsChange }
)(AccessControl);
