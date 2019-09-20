import { ActionTypes } from "./types";

export enum Admins {
  Admin_System = "Admin_System",
  Admin_MRF = "Admin_MRF",
  Admin_RF = "Admin_RF"
}

export enum Users {
  User = "User"
}

export interface PinnedBy {
  [Admins.Admin_System]: boolean;
  [Admins.Admin_MRF]: boolean;
  [Admins.Admin_RF]: boolean;
  // [key: string]: keyof Admins;
  level: number;
}

export interface App {
  order: number;
  label: number;
  isSelected: boolean;
  pinnedBy: PinnedBy;
  isInCatalog: boolean;
}

export interface AccessRights {
  status: Admins | Users;
  level: number;
}

export interface TogglePinPayload {
  idx: number;
  accessRights: AccessRights;
}

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
  payload: TogglePinPayload;
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

export const togglePin = ({
  idx,
  accessRights
}: TogglePinPayload): TogglePinAction => {
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
