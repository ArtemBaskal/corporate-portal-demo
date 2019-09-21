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
  level: number;
}

export interface App {
  order: number;
  label: string;
  isSelected: boolean;
  pinnedBy: PinnedBy;
  isInCatalog: boolean;
}

export interface STATE {
  [key: string]: App;
}

export interface AccessRights {
  status: Admins | Users;
  level: number;
}

export interface TogglePinPayload {
  label: string;
  accessRights: AccessRights;
}

export interface HandleByIdAction {
  type:
    | ActionTypes.TOGGLE_SELECT
    | ActionTypes.DELETE_FROM_SELECTED
    | ActionTypes.DELETE_FROM_CATALOG;
  payload: string;
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
  payload: STATE;
}

export const selectFromCatalog = (id: string): HandleByIdAction => {
  return {
    type: ActionTypes.TOGGLE_SELECT,
    payload: id
  };
};

export const deleteFromSelected = (id: string): HandleByIdAction => {
  return {
    type: ActionTypes.DELETE_FROM_SELECTED,
    payload: id
  };
};

export const deleteFromCatalog = (id: string): HandleByIdAction => {
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
  label,
  accessRights
}: TogglePinPayload): TogglePinAction => {
  return {
    type: ActionTypes.TOGGLE_PIN,
    payload: { label, accessRights }
  };
};

export const handleDrag = (data: STATE): HandleDragAction => {
  return {
    type: ActionTypes.DRAG,
    payload: data
  };
};
