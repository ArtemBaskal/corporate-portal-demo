import { combineReducers } from "redux";
import selectedItemsReducer from "./selectedItemsReducer";
import accessRightsReducer from "./accessRightsReducer";

export default combineReducers({
  item: selectedItemsReducer,
  accessRights: accessRightsReducer
});
