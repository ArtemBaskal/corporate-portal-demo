import { combineReducers } from "redux";
import selectedItemsReducer from "./selectedItemsReducer";
import catalogReducer from "./catalogReducer";
import accessRightsReducer from "./accessRightsReducer";

export default combineReducers({
  item: selectedItemsReducer,
  // catalog: catalogReducer,
  accessRights: accessRightsReducer
});
