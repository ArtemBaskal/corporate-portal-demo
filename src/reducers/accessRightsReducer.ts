import { ActionTypes } from "../actions/types";
import { ChangeAccessRightsAction } from "../actions";

const INITAL_STATE = "User";

export default (
  state: String = INITAL_STATE,
  action: ChangeAccessRightsAction
) => {
  switch (action.type) {
    case ActionTypes.CHANGE_ACCESS_RIGHTS:
      return action.payload;
    default:
      return state;
  }
};
