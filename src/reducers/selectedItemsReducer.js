import {
  SELECT_FROM_CATALOG,
  DELETE_FROM_SELECTED,
  PIN_IN_SELECTED
} from "../actions/types";

// const INITAL_STATE = Array(15)
//   .fill(15)
//   .map((el, i) => (el = i));

const INITAL_STATE = {
  1: { label: 1, isSelected: true, isPinned: true },
  2: { label: 2, isSelected: true, isPinned: false },
  3: { label: 3, isSelected: true, isPinned: false }
};

// INITAL_STATE = Object.values(INITAL_STATE).map(val => val.value);

export default (state = INITAL_STATE, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case DELETE_FROM_SELECTED:
      // return state.filter(el => el !== action.payload);
      return {
        ...state,
        [action.payload]: { label: null, isSelected: false, isPinned: false }
      };
    case SELECT_FROM_CATALOG:
      // if (!state.includes(action.payload)) return [...state, action.payload];
      // else return state;
      if (!(action.payload in state)) {
        return {
          ...state,
          [action.payload]: {
            label: action.payload,
            isSelected: true,
            isPinned: false
          }
        };
      }
    case PIN_IN_SELECTED:
      // if (!(action.payload in state)) {
      return {
        ...state,
        [action.payload]: {
          label: action.payload,
          isSelected: true,
          isPinned: !state[action.payload].isPinned
        }
        // };
      };
      return state;
    default:
      return state;
  }
};
