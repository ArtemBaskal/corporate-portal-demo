import { SELECT_FROM_CATALOG } from "./types";

export const handleSelectFromCatalog = data => {
  console.log(data);
  return {
    type: "SELECT_FROM_CATALOG",
    payload: data
  };
};
