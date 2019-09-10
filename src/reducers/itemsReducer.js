import { SELECT_FROM_CATALOG } from "../actions/types";

const INITAL_STATE = [1, 2, 3, 4, 5];

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case SELECT_FROM_CATALOG:
      if (!state.includes(action.payload)) return [...state, action.payload];
    default:
      return state;
  }
};
