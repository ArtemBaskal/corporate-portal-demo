import { DELETE_FROM_CATALOG } from "../actions/types";

const INITAL_STATE = Array(35)
  .fill(35)
  .map((el, i) => (el = i));

export default (state = INITAL_STATE, action) => {
  // console.log(action);
  switch (action.type) {
    case DELETE_FROM_CATALOG:
      return state.filter(el => el !== action.payload);
    default:
      return state;
  }
};
