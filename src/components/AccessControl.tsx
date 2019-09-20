import React from "react";
import { connect } from "react-redux";
import { accessRightsChange, AccessRights } from "../actions";
import "../styles/Card.css";
import { Admins, Users } from "../actions";

interface AccessControlProps {
  accessRightsChange: typeof accessRightsChange;
}

const ACCESS_RIGHTS: { [key: string]: AccessRights } = {
  User: { status: Users.User, level: 0 },
  Admin_System: { status: Admins.Admin_System, level: 1 },
  Admin_MRF: { status: Admins.Admin_MRF, level: 2 },
  Admin_RF: { status: Admins.Admin_RF, level: 3 }
};

const AccessControl = ({
  accessRightsChange
}: AccessControlProps): JSX.Element => (
  <div className="access-control__select">
    <select
      name="access"
      id="access"
      onChange={e =>
        accessRightsChange && accessRightsChange(ACCESS_RIGHTS[e.target.value])
      }
    >
      {Object.values(ACCESS_RIGHTS).map(({ status }) => (
        <option key={status}>{status}</option>
      ))}
    </select>
  </div>
);

export default connect(
  null,
  { accessRightsChange }
)(AccessControl);
