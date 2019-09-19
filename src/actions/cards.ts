import { ActionTypes } from "./types";

export interface PinnedBy {
  [key: string]: boolean;
  (level: string): number;
}

export interface App {
  order: number;
  label: number;
  isSelected: boolean;
  pinnedBy: PinnedBy;
  isInCatalog: boolean;
}

export interface AccessRights {
  status: string;
  level: number;
}

// export interface User {
//   status: string;
//   level: number;
// }

export interface HandleByIdAction {
  type:
    | ActionTypes.TOGGLE_SELECT
    | ActionTypes.DELETE_FROM_SELECTED
    | ActionTypes.DELETE_FROM_CATALOG;
  payload: number;
}

export interface AccessRightsChangeAction {
  type: ActionTypes.CHANGE_ACCESS_RIGHTS;
  payload: AccessRights;
}

export interface TogglePinAction {
  type: ActionTypes.TOGGLE_PIN;
  payload: { idx: number; accessRights: AccessRights };
}

export interface HandleDragAction {
  type: ActionTypes.DRAG;
  payload: App[];
}

export const selectFromCatalog = (id: number): HandleByIdAction => {
  return {
    type: ActionTypes.TOGGLE_SELECT,
    payload: id
  };
};

export const deleteFromSelected = (id: number): HandleByIdAction => {
  return {
    type: ActionTypes.DELETE_FROM_SELECTED,
    payload: id
  };
};

export const deleteFromCatalog = (id: number): HandleByIdAction => {
  return {
    type: ActionTypes.DELETE_FROM_CATALOG,
    payload: id
  };
};

export const accessRightsChange = (
  data: AccessRights
): AccessRightsChangeAction => {
  return {
    type: ActionTypes.CHANGE_ACCESS_RIGHTS,
    payload: data
  };
};

export const togglePin = (
  idx: number,
  accessRights: AccessRights
): TogglePinAction => {
  return {
    type: ActionTypes.TOGGLE_PIN,
    payload: { idx, accessRights }
  };
};

export const handleDrag = (data: App[]): HandleDragAction => {
  return {
    type: ActionTypes.DRAG,
    payload: data
  };
};
