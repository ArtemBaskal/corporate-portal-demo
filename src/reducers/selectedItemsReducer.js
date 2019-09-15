import {
  SELECT_FROM_CATALOG,
  DELETE_FROM_SELECTED,
  PIN_IN_SELECTED,
  DELETE_FROM_CATALOG
} from "../actions/types";
import { produce } from "immer";

const INITAL_STATE = {
  // 0: {
  //   order: 0,
  //   label: 0,
  //   isSelected: true,
  //   pinnedBy: { Admin_RC: true, priority: 1 },
  //   isInCatalog: true
  // },
  1: {
    order: 1,
    label: 1,
    isSelected: false,
    pinnedBy: { Admin_MRF: true, priority: 2 },
    isInCatalog: true
  },
  2: {
    order: 2,
    label: 2,
    isSelected: true,
    pinnedBy: { Admin_RT: true, priority: 3 },
    isInCatalog: true
  },
  3: {
    order: 3,
    label: 3,
    isSelected: true,
    pinnedBy: { Admin_RC: true, priority: 1 },
    isInCatalog: true
  },
  4: { order: 4, label: 4, isSelected: true, isInCatalog: true },
  5: { order: 5, label: 5, isSelected: true, isInCatalog: true },
  6: { order: 6, label: 6, isSelected: false, isInCatalog: true },
  7: { order: 7, label: 7, isSelected: false, isInCatalog: true },
  8: { order: 8, label: 8, isSelected: false, isInCatalog: true },
  9: {
    order: 9,
    label: 9,
    isSelected: false,
    isInCatalog: true
  },
  10: {
    order: 10,
    label: 10,
    isSelected: false,
    isInCatalog: true
  },
  11: {
    order: 11,
    label: 11,
    isSelected: false,
    isInCatalog: true
  },
  12: {
    order: 12,
    label: 12,
    isSelected: false,
    isInCatalog: true
  },
  13: {
    order: 13,
    label: 13,
    isSelected: false,
    isInCatalog: true
  },
  14: {
    order: 14,
    label: 14,
    isSelected: false,
    isInCatalog: true
  },
  15: {
    order: 15,
    label: 15,
    isSelected: false,
    isInCatalog: true
  },
  16: {
    order: 16,
    label: 16,
    isSelected: false,
    isInCatalog: true
  },
  17: {
    order: 17,
    label: 17,
    isSelected: false,
    isInCatalog: true
  },
  18: { order: 18, label: 18, isSelected: false, isInCatalog: true }
};

export default produce((state = INITAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "test": {
      return action.payload;
    }
    case DELETE_FROM_SELECTED: {
      // return {
      //   ...state,
      //   [payload]: {
      //     ...state[payload],
      //     isSelected: false,
      //     pinnedBy: false
      //   }
      state[action.payload].isSelected = false;
      state[action.payload].pinnedBy = false;
      return state;
    }
    case DELETE_FROM_CATALOG:
      // return {
      //   ...state,
      //   [payload]: {
      //     ...state[payload],
      //     isSelected: false,
      //     isInCatalog: false,
      //     pinnedBy: false
      //   }
      // };
      state[action.payload].isSelected = false;
      state[action.payload].isInCatalog = false;
      state[action.payload].pinnedBy = false;

      return state;

    case SELECT_FROM_CATALOG:
      // return {
      //   ...state,
      //   [payload]: {
      //     ...state[payload],
      //     label: payload,
      //     isSelected: !state[payload].isSelected
      //   }
      // };
      state[action.payload].isSelected = !state[action.payload].isSelected;

      return state;
    case PIN_IN_SELECTED:
      const {
        data,
        data: { pinnedBy },
        accessRights: { status, priority }
      } = payload;

      console.log(action);
      // return {
      //   ...state,
      //   [data]: {
      //     ...state[data],
      //     label: data,

      //     pinnedBy: {
      //       ...pinnedBy,
      //       [status]: true,
      //       priority
      //     }
      //   }
      // };
      // state[action.payload.data].pinnedBy[
      //   action.payload.accessRights.status
      // ] = true;
      return state;
    default:
      return state;
  }
});

/*
  const { type, payload } = action;
  switch (type) {
    case "test": {
      return action.payload;
    }
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
*/
