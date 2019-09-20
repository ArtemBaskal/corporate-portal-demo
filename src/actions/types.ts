import {
  HandleByIdAction,
  AccessRightsChangeAction,
  TogglePinAction,
  HandleDragAction
} from "./apps";

export enum ActionTypes {
  TOGGLE_SELECT = "TOGGLE_SELECT",
  DELETE_FROM_SELECTED = "DELETE_FROM_SELECTED",
  CHANGE_ACCESS_RIGHTS = "CHANGE_ACCESS_RIGHTS",
  DELETE_FROM_CATALOG = "DELETE_FROM_CATALOG",
  TOGGLE_PIN = "TOGGLE_PIN",
  DRAG = "DRAG"
}

export type Action =
  | HandleByIdAction
  | AccessRightsChangeAction
  | TogglePinAction
  | HandleDragAction;
