import {
  SELECT_FROM_CATALOG,
  DELETE_FROM_SELECTED,
  PIN_IN_SELECTED,
  DELETE_FROM_CATALOG
} from "../actions/types";

const INITAL_STATE = {
  1: {
    label: 1,
    isSelected: true,
    pinnedBy: { Admin_RC: true, priority: 1 },
    isInCatalog: true
  },
  2: {
    label: 2,
    isSelected: false,
    pinnedBy: { Admin_MRF: true, priority: 2 },
    isInCatalog: true
  },
  3: {
    label: 3,
    isSelected: true,
    pinnedBy: { Admin_RT: true, priority: 3 },
    isInCatalog: true
  },
  4: { label: 4, isSelected: true, isInCatalog: true },
  5: { label: 5, isSelected: true, isInCatalog: true },
  6: { label: 6, isSelected: true, isInCatalog: true },
  7: { label: 7, isSelected: false, isInCatalog: true },
  8: { label: 8, isSelected: false, isInCatalog: true },
  9: { label: 9, isSelected: false, isInCatalog: true },
  10: {
    label: 10,
    isSelected: false,
    isInCatalog: true
  },
  11: {
    label: 11,
    isSelected: false,
    isInCatalog: true
  },
  12: {
    label: 12,
    isSelected: false,
    isInCatalog: true
  },
  13: {
    label: 13,
    isSelected: false,
    isInCatalog: true
  },
  14: {
    label: 14,
    isSelected: false,
    isInCatalog: true
  },
  15: {
    label: 15,
    isSelected: false,
    isInCatalog: true
  },
  16: {
    label: 16,
    isSelected: false,
    isInCatalog: true
  },
  17: {
    label: 17,
    isSelected: false,
    isInCatalog: true
  },
  18: {
    label: 18,
    isSelected: false,
    isInCatalog: true
  },
  19: { label: 19, isSelected: false, isInCatalog: true }
};

export default (state = INITAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case DELETE_FROM_SELECTED:
      return {
        ...state,
        [payload]: {
          ...state[payload],
          isSelected: false,
          pinnedBy: false
        }
      };
    case DELETE_FROM_CATALOG:
      return {
        ...state,
        [payload]: {
          ...state[payload],
          isSelected: false,
          isInCatalog: false,
          pinnedBy: false
        }
      };

    case SELECT_FROM_CATALOG:
      return {
        ...state,
        [payload]: {
          ...state[payload],
          label: payload,
          isSelected: !state[payload].isSelected
        }
      };
    case PIN_IN_SELECTED:
      const {
        data,
        data: { pinnedBy },
        accessRights: { status, priority }
      } = payload;

      return {
        ...state,
        [data]: {
          ...state[data],
          label: data,

          pinnedBy: {
            ...pinnedBy,
            [status]: true,
            priority
          }
        }
      };
    default:
      return state;
  }
};
