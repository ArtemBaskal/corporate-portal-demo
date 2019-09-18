import { Action, ActionTypes } from "../actions";
import p from "immer";

const INITAL_STATE = [
  {
    order: 0,
    label: 0,
    isSelected: true,
    pinnedBy: { Admin_RF: true, level: 3 },
    isInCatalog: true
  },
  {
    order: 1,
    label: 1,
    isSelected: true,
    pinnedBy: { Admin_MRF: true, level: 2 },
    isInCatalog: true
  },
  {
    order: 2,
    label: 2,
    isSelected: true,
    pinnedBy: { Admin_System: true, level: 1 },
    isInCatalog: true
  },
  {
    order: 3,
    label: 3,
    isSelected: true,
    pinnedBy: { level: 0 },
    isInCatalog: true
  },
  {
    order: 4,
    label: 4,
    isSelected: true,
    pinnedBy: { level: 0 },
    isInCatalog: true
  },
  {
    order: 5,
    label: 5,
    isSelected: true,
    pinnedBy: { level: 0 },
    isInCatalog: true
  },
  {
    order: 6,
    label: 6,
    isSelected: false,
    pinnedBy: { level: 0 },
    isInCatalog: true
  },
  {
    order: 7,
    label: 7,
    isSelected: false,
    pinnedBy: { level: 0 },
    isInCatalog: true
  },
  {
    order: 8,
    label: 8,
    isSelected: false,
    pinnedBy: { level: 0 },
    isInCatalog: true
  },
  {
    order: 9,
    label: 9,
    isSelected: false,
    pinnedBy: { level: 0 },
    isInCatalog: true
  },
  {
    order: 10,
    label: 10,
    isSelected: false,
    pinnedBy: { level: 0 },
    isInCatalog: true
  },
  {
    order: 11,
    label: 11,
    isSelected: false,
    pinnedBy: { level: 0 },
    isInCatalog: true
  },
  {
    order: 12,
    label: 12,
    isSelected: false,
    pinnedBy: { level: 0 },
    isInCatalog: true
  },
  {
    order: 13,
    label: 13,
    isSelected: false,
    pinnedBy: { level: 0 },
    isInCatalog: true
  },
  {
    order: 14,
    label: 14,
    isSelected: false,
    pinnedBy: { level: 0 },
    isInCatalog: true
  },
  {
    order: 15,
    label: 15,
    isSelected: false,
    pinnedBy: { level: 0 },
    isInCatalog: true
  },
  {
    order: 16,
    label: 16,
    isSelected: false,
    pinnedBy: { level: 0 },
    isInCatalog: true
  },
  {
    order: 17,
    label: 17,
    isSelected: false,
    pinnedBy: { level: 0 },
    isInCatalog: true
  },
  {
    order: 18,
    label: 18,
    isSelected: false,
    pinnedBy: { level: 0 },
    isInCatalog: true
  }
];

export default p((state = INITAL_STATE, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.DRAG: {
      return payload;
    }

    case ActionTypes.DELETE_FROM_SELECTED: {
      state[payload].isSelected = false;
      state[payload].pinnedBy = { level: 0 };

      return state;
    }

    case ActionTypes.DELETE_FROM_CATALOG:
      state[payload].isSelected = false;
      state[payload].isInCatalog = false;
      state[payload].pinnedBy = { level: 0 };

      return state;

    case ActionTypes.TOGGLE_SELECT:
      state[payload].isSelected = !state[payload].isSelected;

      return state;

    case ActionTypes.TOGGLE_PIN:
      const {
        idx,
        accessRights: { status, level }
      } = payload;

      let prevLevel = state[idx].pinnedBy.level;

      state[idx].pinnedBy[status] = !state[idx].pinnedBy[status];
      state[idx].pinnedBy.level = level > prevLevel ? level : prevLevel;

      return state;

    default:
      return state;
  }
});
