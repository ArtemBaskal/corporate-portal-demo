import {
  SELECT_FROM_CATALOG,
  DELETE_FROM_SELECTED,
  CHANGE_ACCESS_RIGHTS,
  DELETE_FROM_CATALOG,
  PIN_IN_SELECTED
} from "./types";

export const handleSelectFromCatalog = data => {
  return {
    type: SELECT_FROM_CATALOG,
    payload: data
  };
};

export const handleDeleteFromSelected = data => {
  return {
    type: DELETE_FROM_SELECTED,
    payload: data
  };
};

export const handleAccessRightsChange = data => {
  return {
    type: CHANGE_ACCESS_RIGHTS,
    payload: data
  };
};

export const handleDeleteFromCatalog = data => {
  return {
    type: DELETE_FROM_CATALOG,
    payload: data
  };
};

export const handlePinInSelected = data => {
  return {
    type: PIN_IN_SELECTED,
    payload: data
  };
};
