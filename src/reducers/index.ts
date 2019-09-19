import { combineReducers } from "redux";
import selectedItemsReducer from "./selectedItemsReducer";
import accessRightsReducer from "./accessRightsReducer";
import { App, AccessRights } from "../actions";

export interface StoreState {
  apps: App[];
  accessRights: AccessRights;
}

export default combineReducers<StoreState>({
  apps: selectedItemsReducer,
  accessRights: accessRightsReducer
});
