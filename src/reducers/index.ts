import { combineReducers } from "redux";
import selectedItemsReducer from "./selectedItemsReducer";
import accessRightsReducer from "./accessRightsReducer";
import { STATE, AccessRights } from "../actions";

export interface StoreState {
  apps: STATE;
  accessRights: AccessRights;
}

export default combineReducers<StoreState>({
  apps: selectedItemsReducer,
  accessRights: accessRightsReducer
});
