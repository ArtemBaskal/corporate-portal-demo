import React from "react";
import { connect } from "react-redux";
import { accessRightsChange, User } from "../actions";
import "../styles/Card.css";

interface AccessControlProps {
  accessRightsChange?(data: User): typeof accessRightsChange;
}

const ACCESS_RIGHTS: { [key: string]: User } = {
  User: { status: "User", level: 0 },
  Admin_System: { status: "Admin_System", level: 1 },
  Admin_MRF: { status: "Admin_MRF", level: 2 },
  Admin_RF: { status: "Admin_RF", level: 3 }
};

const AccessControl = ({ accessRightsChange }: any): JSX.Element => (
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
