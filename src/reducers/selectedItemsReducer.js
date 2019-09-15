import {
  SELECT_FROM_CATALOG,
  DELETE_FROM_SELECTED,
  PIN_IN_SELECTED,
  DELETE_FROM_CATALOG
} from "../actions/types";
import p from "immer";

const INITAL_STATE = [
  {
    order: 0,
    label: 0,
    isSelected: true,
    pinnedBy: { Admin_System: true, priority: 1 },
    isInCatalog: true
  },
  {
    order: 1,
    label: 1,
    isSelected: false,
    pinnedBy: { Admin_MRF: true, priority: 2 },
    isInCatalog: true
  },
  {
    order: 2,
    label: 2,
    isSelected: true,
    pinnedBy: { Admin_RT: true, priority: 3 },
    isInCatalog: true
  },
  {
    order: 3,
    label: 3,
    isSelected: true,
    pinnedBy: { Admin_System: true, priority: 1 },
    isInCatalog: true
  },
  {
    order: 4,
    label: 4,
    isSelected: true,
    pinnedBy: { priority: 0 },
    isInCatalog: true
  },
  {
    order: 5,
    label: 5,
    isSelected: true,
    pinnedBy: { priority: 0 },
    isInCatalog: true
  },
  {
    order: 6,
    label: 6,
    isSelected: false,
    pinnedBy: { priority: 0 },
    isInCatalog: true
  },
  {
    order: 7,
    label: 7,
    isSelected: false,
    pinnedBy: { priority: 0 },
    isInCatalog: true
  },
  {
    order: 8,
    label: 8,
    isSelected: false,
    pinnedBy: { priority: 0 },
    isInCatalog: true
  },
  {
    order: 9,
    label: 9,
    isSelected: false,
    pinnedBy: { priority: 0 },
    isInCatalog: true
  },
  {
    order: 10,
    label: 10,
    isSelected: false,
    pinnedBy: { priority: 0 },
    isInCatalog: true
  },
  {
    order: 11,
    label: 11,
    isSelected: false,
    pinnedBy: { priority: 0 },
    isInCatalog: true
  },
  {
    order: 12,
    label: 12,
    isSelected: false,
    pinnedBy: { priority: 0 },
    isInCatalog: true
  },
  {
    order: 13,
    label: 13,
    isSelected: false,
    pinnedBy: { priority: 0 },
    isInCatalog: true
  },
  {
    order: 14,
    label: 14,
    isSelected: false,
    pinnedBy: { priority: 0 },
    isInCatalog: true
  },
  {
    order: 15,
    label: 15,
    isSelected: false,
    pinnedBy: { priority: 0 },
    isInCatalog: true
  },
  {
    order: 16,
    label: 16,
    isSelected: false,
    pinnedBy: { priority: 0 },
    isInCatalog: true
  },
  {
    order: 17,
    label: 17,
    isSelected: false,
    pinnedBy: { priority: 0 },
    isInCatalog: true
  },
  {
    order: 18,
    label: 18,
    isSelected: false,
    pinnedBy: { priority: 0 },
    isInCatalog: true
  }
];

export default p((state = INITAL_STATE, action) => {
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
        accessRights: { status, priority }
      } = payload;

      console.log(state, action);
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

      state[data].pinnedBy[status] = true;
      state[data].pinnedBy.priority = priority;

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
