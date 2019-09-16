import {
  SELECT_FROM_CATALOG,
  DELETE_FROM_SELECTED,
  CHANGE_ACCESS_RIGHTS,
  DELETE_FROM_CATALOG,
  TOGGLE_PIN,
  DRAG
} from "./types";

export const selectFromCatalog = data => {
  return {
    type: SELECT_FROM_CATALOG,
    payload: data
  };
};

export const deleteFromSelected = data => {
  return {
    type: DELETE_FROM_SELECTED,
    payload: data
  };
};

export const accessRightsChange = data => {
  return {
    type: CHANGE_ACCESS_RIGHTS,
    payload: data
  };
};

export const deleteFromCatalog = data => {
  return {
    type: DELETE_FROM_CATALOG,
    payload: data
  };
};

export const togglePin = (data, accessRights) => {
  return {
    type: TOGGLE_PIN,
    payload: { data, accessRights }
  };
};

export const handleDrag = data => {
  return {
    type: DRAG,
    payload: data
  };
};
