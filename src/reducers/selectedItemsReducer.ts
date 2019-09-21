import {
  App,
  STATE,
  Action,
  ActionTypes,
  TogglePinPayload,
  Admins
} from "../actions";
import p from "immer";

const INITAL_STATE = {
  Аквамен: {
    order: 0,
    label: "Аквамен",
    isSelected: true,
    pinnedBy: {
      Admin_System: false,
      Admin_RF: true,
      Admin_MRF: false,
      level: 3
    },
    isInCatalog: true
  },
  Бэтмен: {
    order: 1,
    label: "Бэтмен",
    isSelected: true,
    pinnedBy: {
      Admin_System: false,
      Admin_MRF: true,
      Admin_RF: false,
      level: 2
    },
    isInCatalog: true
  },
  Киборг: {
    order: 2,
    label: "Киборг",
    isSelected: true,
    pinnedBy: {
      Admin_System: true,
      Admin_MRF: false,
      Admin_RF: false,
      level: 1
    },
    isInCatalog: true
  },
  Флэш: {
    order: 3,
    label: "Флэш",
    isSelected: true,
    pinnedBy: {
      Admin_System: false,
      Admin_MRF: false,
      Admin_RF: false,
      level: 0
    },
    isInCatalog: true
  },
  "Зелёный Фонарь": {
    order: 4,
    label: "Зелёный Фонарь",
    isSelected: true,
    pinnedBy: {
      Admin_System: false,
      Admin_MRF: false,
      Admin_RF: false,
      level: 0
    },
    isInCatalog: true
  },
  Супергёрл: {
    order: 5,
    label: "Супергёрл",
    isSelected: true,
    pinnedBy: {
      Admin_System: false,
      Admin_MRF: false,
      Admin_RF: false,
      level: 0
    },
    isInCatalog: true
  },
  Супермен: {
    order: 6,
    label: "Супермен",
    isSelected: false,
    pinnedBy: {
      Admin_System: false,
      Admin_MRF: false,
      Admin_RF: false,
      level: 0
    },
    isInCatalog: true
  },
  "Чудо-женщина": {
    order: 7,
    label: "Чудо-женщина",
    isSelected: false,
    pinnedBy: {
      Admin_System: false,
      Admin_MRF: false,
      Admin_RF: false,
      level: 0
    },
    isInCatalog: true
  },
  "Чёрная Пантера": {
    order: 8,
    label: "Чёрная Пантера",
    isSelected: false,
    pinnedBy: {
      Admin_System: false,
      Admin_MRF: false,
      Admin_RF: false,
      level: 0
    },
    isInCatalog: true
  },
  "Капитан Америка": {
    order: 9,
    label: "Капитан Америка",
    isSelected: false,
    pinnedBy: {
      Admin_System: false,
      Admin_MRF: false,
      Admin_RF: false,
      level: 0
    },
    isInCatalog: true
  },
  Сорвиголова: {
    order: 10,
    label: "Сорвиголова",
    isSelected: false,
    pinnedBy: {
      Admin_System: false,
      Admin_MRF: false,
      Admin_RF: false,
      level: 0
    },
    isInCatalog: true
  },
  "Доктор Стрэндж": {
    order: 11,
    label: "Доктор Стрэндж",
    isSelected: false,
    pinnedBy: {
      Admin_System: false,
      Admin_MRF: false,
      Admin_RF: false,
      level: 0
    },
    isInCatalog: true
  },
  Халк: {
    order: 12,
    label: "Халк",
    isSelected: false,
    pinnedBy: {
      Admin_System: false,
      Admin_MRF: false,
      Admin_RF: false,
      level: 0
    },
    isInCatalog: true
  },
  "Железнй Человек": {
    order: 13,
    label: "Железнй Человек",
    isSelected: false,
    pinnedBy: {
      Admin_System: false,
      Admin_MRF: false,
      Admin_RF: false,
      level: 0
    },
    isInCatalog: true
  },
  "Человек-паук": {
    order: 14,
    label: "Человек-паук",
    isSelected: false,
    pinnedBy: {
      Admin_System: false,
      Admin_MRF: false,
      Admin_RF: false,
      level: 0
    },
    isInCatalog: true
  },
  Тор: {
    order: 15,
    label: "Тор",
    isSelected: false,
    pinnedBy: {
      Admin_System: false,
      Admin_MRF: false,
      Admin_RF: false,
      level: 0
    },
    isInCatalog: true
  }
};

export default p((state: STATE = INITAL_STATE, action: Action) => {
  let { type, payload } = action;
  switch (type) {
    case ActionTypes.DRAG: {
      return payload as STATE;
    }

    case ActionTypes.DELETE_FROM_SELECTED: {
      state[payload as string].isSelected = false;
      state[payload as string].pinnedBy = {
        Admin_System: false,
        Admin_MRF: false,
        Admin_RF: false,
        level: 0
      };

      return state;
    }

    case ActionTypes.DELETE_FROM_CATALOG:
      state[payload as string].isSelected = false;
      state[payload as string].isInCatalog = false;
      state[payload as string].pinnedBy = {
        Admin_System: false,
        Admin_MRF: false,
        Admin_RF: false,
        level: 0
      };

      return state;

    case ActionTypes.TOGGLE_SELECT:
      state[payload as string].isSelected = !state[payload as string]
        .isSelected;

      return state;

    case ActionTypes.TOGGLE_PIN:
      const {
        label,
        accessRights: { status, level }
      } = payload as TogglePinPayload;

      let prevLevel = state[label].pinnedBy.level;

      state[label].pinnedBy[status as Admins] = !state[label].pinnedBy[
        status as Admins
      ];
      state[label].pinnedBy.level = level > prevLevel ? level : prevLevel;

      return state;

    default:
      return state;
  }
});
