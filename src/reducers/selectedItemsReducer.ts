import { App, Action, ActionTypes, TogglePinPayload, Admins } from "../actions";
import p from "immer";

const INITAL_STATE = [
  {
    order: 0,
    label: 0,
    isSelected: true,
    pinnedBy: {
      Admin_System: false,
      Admin_RF: true,
      Admin_MRF: false,
      level: 3
    },
    isInCatalog: true
  },
  {
    order: 1,
    label: 1,
    isSelected: true,
    pinnedBy: {
      Admin_System: false,
      Admin_MRF: true,
      Admin_RF: false,
      level: 2
    },
    isInCatalog: true
  },
  {
    order: 2,
    label: 2,
    isSelected: true,
    pinnedBy: {
      Admin_System: true,
      Admin_MRF: false,
      Admin_RF: false,
      level: 1
    },
    isInCatalog: true
  },
  {
    order: 3,
    label: 3,
    isSelected: true,
    pinnedBy: {
      Admin_System: false,
      Admin_MRF: false,
      Admin_RF: false,
      level: 0
    },
    isInCatalog: true
  },
  {
    order: 4,
    label: 4,
    isSelected: true,
    pinnedBy: {
      Admin_System: false,
      Admin_MRF: false,
      Admin_RF: false,
      level: 0
    },
    isInCatalog: true
  },
  {
    order: 5,
    label: 5,
    isSelected: true,
    pinnedBy: {
      Admin_System: false,
      Admin_MRF: false,
      Admin_RF: false,
      level: 0
    },
    isInCatalog: true
  },
  {
    order: 6,
    label: 6,
    isSelected: false,
    pinnedBy: {
      Admin_System: false,
      Admin_MRF: false,
      Admin_RF: false,
      level: 0
    },
    isInCatalog: true
  },
  {
    order: 7,
    label: 7,
    isSelected: false,
    pinnedBy: {
      Admin_System: false,
      Admin_MRF: false,
      Admin_RF: false,
      level: 0
    },
    isInCatalog: true
  },
  {
    order: 8,
    label: 8,
    isSelected: false,
    pinnedBy: {
      Admin_System: false,
      Admin_MRF: false,
      Admin_RF: false,
      level: 0
    },
    isInCatalog: true
  },
  {
    order: 9,
    label: 9,
    isSelected: false,
    pinnedBy: {
      Admin_System: false,
      Admin_MRF: false,
      Admin_RF: false,
      level: 0
    },
    isInCatalog: true
  },
  {
    order: 10,
    label: 10,
    isSelected: false,
    pinnedBy: {
      Admin_System: false,
      Admin_MRF: false,
      Admin_RF: false,
      level: 0
    },
    isInCatalog: true
  },
  {
    order: 11,
    label: 11,
    isSelected: false,
    pinnedBy: {
      Admin_System: false,
      Admin_MRF: false,
      Admin_RF: false,
      level: 0
    },
    isInCatalog: true
  },
  {
    order: 12,
    label: 12,
    isSelected: false,
    pinnedBy: {
      Admin_System: false,
      Admin_MRF: false,
      Admin_RF: false,
      level: 0
    },
    isInCatalog: true
  },
  {
    order: 13,
    label: 13,
    isSelected: false,
    pinnedBy: {
      Admin_System: false,
      Admin_MRF: false,
      Admin_RF: false,
      level: 0
    },
    isInCatalog: true
  },
  {
    order: 14,
    label: 14,
    isSelected: false,
    pinnedBy: {
      Admin_System: false,
      Admin_MRF: false,
      Admin_RF: false,
      level: 0
    },
    isInCatalog: true
  },
  {
    order: 15,
    label: 15,
    isSelected: false,
    pinnedBy: {
      Admin_System: false,
      Admin_MRF: false,
      Admin_RF: false,
      level: 0
    },
    isInCatalog: true
  },
  {
    order: 16,
    label: 16,
    isSelected: false,
    pinnedBy: {
      Admin_System: false,
      Admin_MRF: false,
      Admin_RF: false,
      level: 0
    },
    isInCatalog: true
  },
  {
    order: 17,
    label: 17,
    isSelected: false,
    pinnedBy: {
      Admin_System: false,
      Admin_MRF: false,
      Admin_RF: false,
      level: 0
    },
    isInCatalog: true
  },
  {
    order: 18,
    label: 18,
    isSelected: false,
    pinnedBy: {
      Admin_System: false,
      Admin_MRF: false,
      Admin_RF: false,
      level: 0
    },
    isInCatalog: true
  }
];

export default p((state: App[] = INITAL_STATE, action: Action) => {
  let { type, payload } = action;
  switch (type) {
    case ActionTypes.DRAG: {
      return payload as App[];
    }

    case ActionTypes.DELETE_FROM_SELECTED: {
      state[Number(payload)].isSelected = false;
      state[Number(payload)].pinnedBy = {
        Admin_System: false,
        Admin_MRF: false,
        Admin_RF: false,
        level: 0
      };

      return state;
    }

    case ActionTypes.DELETE_FROM_CATALOG:
      state[Number(payload)].isSelected = false;
      state[Number(payload)].isInCatalog = false;
      state[Number(payload)].pinnedBy = {
        Admin_System: false,
        Admin_MRF: false,
        Admin_RF: false,
        level: 0
      };

      return state;

    case ActionTypes.TOGGLE_SELECT:
      state[Number(payload)].isSelected = !state[Number(payload)].isSelected;

      return state;

    case ActionTypes.TOGGLE_PIN:
      const {
        idx,
        accessRights: { status, level }
      } = payload as TogglePinPayload;

      let prevLevel = state[idx].pinnedBy.level;

      state[idx].pinnedBy[status as Admins] = !state[idx].pinnedBy[
        status as Admins
      ];
      state[idx].pinnedBy.level = level > prevLevel ? level : prevLevel;

      return state;

    default:
      return state;
  }
});
