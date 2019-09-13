import {
  SELECT_FROM_CATALOG,
  DELETE_FROM_SELECTED,
  PIN_IN_SELECTED,
  DELETE_FROM_CATALOG
} from "../actions/types";

// const INITAL_STATE = Array(15)
//   .fill(15)
//   .map((el, i) => (el = i));

const INITAL_STATE = {
  1: { label: 1, isSelected: true, isPinned: true, isInCatalog: true },
  2: { label: 2, isSelected: false, isPinned: true, isInCatalog: true },
  3: { label: 3, isSelected: true, isPinned: false, isInCatalog: true },
  4: { label: 4, isSelected: true, isPinned: false, isInCatalog: true },
  5: { label: 5, isSelected: true, isPinned: false, isInCatalog: true },
  6: { label: 6, isSelected: true, isPinned: false, isInCatalog: true },
  7: { label: 7, isSelected: false, isPinned: false, isInCatalog: true },
  8: { label: 8, isSelected: false, isPinned: false, isInCatalog: true },
  9: { label: 9, isSelected: false, isPinned: false, isInCatalog: true },
  10: { label: 10, isSelected: false, isPinned: false, isInCatalog: true },
  11: { label: 11, isSelected: false, isPinned: false, isInCatalog: true },
  12: { label: 12, isSelected: false, isPinned: false, isInCatalog: true },
  13: { label: 13, isSelected: false, isPinned: false, isInCatalog: true },
  14: { label: 14, isSelected: false, isPinned: false, isInCatalog: true },
  15: { label: 15, isSelected: false, isPinned: false, isInCatalog: true },
  16: { label: 16, isSelected: false, isPinned: false, isInCatalog: true },
  17: { label: 17, isSelected: false, isPinned: false, isInCatalog: true },
  18: { label: 18, isSelected: false, isPinned: false, isInCatalog: true },
  19: { label: 19, isSelected: false, isPinned: false, isInCatalog: true }
};

// INITAL_STATE = Object.values(INITAL_STATE).map(val => val.value);

export default (state = INITAL_STATE, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case DELETE_FROM_SELECTED:
      // return state.filter(el => el !== action.payload);
      return {
        ...state,
        [action.payload]: {
          label: state[action.payload].label,
          isSelected: false,
          isPinned: false,
          isInCatalog: state[action.payload].isInCatalog
        }
      };
    case DELETE_FROM_CATALOG:
      return {
        ...state,
        [action.payload]: {
          label: state[action.payload].label,
          isSelected: false,
          isPinned: false,
          isInCatalog: false
        }
      };

    case SELECT_FROM_CATALOG:
      // if (!state.includes(action.payload)) return [...state, action.payload];
      // else return state;
      // if (!(action.payload in state)) {
      return {
        ...state,
        [action.payload]: {
          label: action.payload,
          isSelected: !state[action.payload].isSelected,
          isPinned: state[action.payload].isPinned,
          isInCatalog: state[action.payload].isInCatalog
        }
        // };
      };
    case PIN_IN_SELECTED:
      // if (!(action.payload in state)) {
      return {
        ...state,
        [action.payload]: {
          label: action.payload,
          isSelected: state[action.payload].isSelected,
          isPinned: !state[action.payload].isPinned,
          isInCatalog: state[action.payload].isInCatalog
        }
        // };
      };
    // return state;
    default:
      return state;
  }
};
