import { combineReducers } from "redux";
import selectedItemsReducer from "./selectedItemsReducer";
import accessRightsReducer from "./accessRightsReducer";
import { Cards, User } from "../actions";

export interface StoreState {
  item: Cards[];
  accessRights: any;
}

export default combineReducers<StoreState>({
  item: selectedItemsReducer,
  accessRights: accessRightsReducer
});
