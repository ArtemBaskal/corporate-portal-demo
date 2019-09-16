import {
  SELECT_FROM_CATALOG,
  DELETE_FROM_SELECTED,
  TOGGLE_PIN,
  DELETE_FROM_CATALOG,
  DRAG
} from "../actions/types";
import p from "immer";

const INITAL_STATE = [
  {
    order: 0,
    label: 0,
    isSelected: true,
    pinnedBy: { Admin_RF: true, priority: 3 },
    isInCatalog: true
  },
  {
    order: 1,
    label: 1,
    isSelected: true,
    pinnedBy: { Admin_MRF: true, priority: 2 },
    isInCatalog: true
  },
  {
    order: 2,
    label: 2,
    isSelected: true,
    pinnedBy: { Admin_System: true, priority: 1 },
    isInCatalog: true
  },
  {
    order: 3,
    label: 3,
    isSelected: true,
    pinnedBy: { priority: 0 },
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
    case DRAG: {
      return action.payload;
    }

    case DELETE_FROM_SELECTED: {
      state[action.payload].isSelected = false;
      state[action.payload].pinnedBy = { priority: 0 };
      return state;
    }

    case DELETE_FROM_CATALOG:
      state[action.payload].isSelected = false;
      state[action.payload].isInCatalog = false;
      state[action.payload].pinnedBy = { priority: 0 };

      return state;

    case SELECT_FROM_CATALOG:
      state[action.payload].isSelected = !state[action.payload].isSelected;

      return state;
    case TOGGLE_PIN:
      const {
        data,
        accessRights: { status, priority }
      } = payload;

      state[data].pinnedBy[status] = !state[data].pinnedBy[status];
      state[
        data
      ].pinnedBy.priority = priority; /* Math.max(
        state[data].pinnedBy.priority,
        priority 
      );*/

      return state;
    default:
      return state;
  }
});
