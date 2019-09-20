import { ActionTypes } from "../actions/types";
import { AccessRightsChangeAction } from "../actions";
import { AccessRights } from "../actions";
import { Users } from "../actions";

const INITAL_STATE = { status: Users.User, level: 0 };

export default (
  state: AccessRights = INITAL_STATE,
  action: AccessRightsChangeAction
) => {
  switch (action.type) {
    case ActionTypes.CHANGE_ACCESS_RIGHTS:
      return action.payload;
    default:
      return state;
  }
};
