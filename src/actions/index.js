import { SELECT_FROM_CATALOG, DELETE_FROM_SELECTED } from "./types";

export const handleSelectFromCatalog = data => {
  // console.log(data);
  return {
    type: SELECT_FROM_CATALOG,
    payload: data
  };
};

export const handleDeleteFromSelected = data => {
  // console.log(data);

  return {
    type: DELETE_FROM_SELECTED,
    payload: data
  };
};
