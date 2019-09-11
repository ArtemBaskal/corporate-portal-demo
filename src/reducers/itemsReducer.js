import { SELECT_FROM_CATALOG, DELETE_FROM_SELECTED } from "../actions/types";

const INITAL_STATE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export default (state = INITAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case DELETE_FROM_SELECTED:
      return state.filter(el => el !== action.payload);
    case SELECT_FROM_CATALOG:
      if (!state.includes(action.payload)) return [...state, action.payload];
      else return state;
    default:
      return state;
  }
};
