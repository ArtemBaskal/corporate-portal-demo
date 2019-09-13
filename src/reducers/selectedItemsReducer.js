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
  1: { label: 1, isSelected: false, isPinned: true, isInCatalog: true },
  2: { label: 2, isSelected: true, isPinned: true, isInCatalog: true },
  3: { label: 3, isSelected: true, isPinned: false, isInCatalog: true },
  4: { label: 4, isSelected: false, isPinned: false, isInCatalog: true },
  5: { label: 5, isSelected: false, isPinned: false, isInCatalog: true },
  6: { label: 6, isSelected: false, isPinned: false, isInCatalog: true }
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
