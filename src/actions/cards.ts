import { ActionTypes } from "./types";

export interface Cards {
  order: number;
  label: number;
  isSelected: boolean;
  pinnedBy: object;
  isInCatalog: boolean;
}

export interface AccessRights {
  status: string;
  priority: number;
}

export interface User {
  status: string;
  priority: number;
}

export interface HandleByIdAction {
  type:
    | ActionTypes.TOGGLE_SELECT
    | ActionTypes.DELETE_FROM_SELECTED
    | ActionTypes.DELETE_FROM_CATALOG;
  payload: number;
}

export interface TogglePinAction {
  type: ActionTypes.TOGGLE_PIN;
  payload: 1;
}

export interface ChangeAccessRightsAction {
  type: ActionTypes.CHANGE_ACCESS_RIGHTS;
  payload: User;
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

export const accessRightsChange = (data: User): ChangeAccessRightsAction => {
  return {
    type: ActionTypes.CHANGE_ACCESS_RIGHTS,
    payload: data
  };
};

export const deleteFromCatalog = (id: number): HandleByIdAction => {
  return {
    type: ActionTypes.DELETE_FROM_CATALOG,
    payload: id
  };
};

export const togglePin = (data: number, accessRights: User) => {
  return {
    type: ActionTypes.TOGGLE_PIN,
    payload: { data, accessRights }
  };
};

export const handleDrag = (data: Cards[]) => {
  return {
    type: ActionTypes.DRAG,
    payload: data
  };
};
