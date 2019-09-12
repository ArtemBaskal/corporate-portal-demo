import { DELETE_FROM_CATALOG } from "../actions/types";

// const INITAL_STATE = Array(35)
//   .fill(35)
//   .map((el, i) => (el = i));

// const INITAL_STATE = [3, 4, 5];

const INITAL_STATE = {
  1: { label: 1, isSelected: true, isPinned: true },
  4: { label: 4, isSelected: false, isPinned: false },
  5: { label: 5, isSelected: false, isPinned: false },
  6: { label: 6, isSelected: false, isPinned: false }
};

export default (state = INITAL_STATE, action) => {
  // console.log(action);
  switch (action.type) {
    case DELETE_FROM_CATALOG:
      // return state.filter(el => el !== action.payload);
      // console.log("DELETE_FROM_CATALOG");
      return { ...state, [action.payload]: { label: null } };
    default:
      return state;
  }
};
