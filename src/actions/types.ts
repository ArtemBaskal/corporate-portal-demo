import { HandleByIdAction, ChangeAccessRightsAction } from "./cards";

export enum ActionTypes {
  TOGGLE_SELECT,
  DELETE_FROM_SELECTED,
  CHANGE_ACCESS_RIGHTS,
  DELETE_FROM_CATALOG,
  TOGGLE_PIN,
  DRAG
}

export type Action = HandleByIdAction | ChangeAccessRightsAction;
