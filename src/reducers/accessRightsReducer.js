import { CHANGE_ACCESS_RIGHTS } from "../actions/types";

const INITAL_STATE = "User";

export default (state = INITAL_STATE, action) => {
  // console.log(action);
  switch (action.type) {
    case CHANGE_ACCESS_RIGHTS:
      return action.payload;
    default:
      return state;
  }
};
