import { combineReducers } from "redux";
import selectedItemsReducer from "./selectedItemsReducer";
import accessRightsReducer from "./accessRightsReducer";
import { App, User } from "../actions";

export interface StoreState {
  apps: App[];
  accessRights: any;
}

export default combineReducers<StoreState>({
  apps: selectedItemsReducer,
  accessRights: accessRightsReducer
});
