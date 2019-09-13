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
      <option value="Admin_RC">Admin_RC</option>
      <option value="Admin_MRF">Admin_MRF</option>
      <option value="Admin_RT">Admin_RT</option>
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
