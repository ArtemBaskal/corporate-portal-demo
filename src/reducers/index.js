import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import catalogReducer from "./catalogReducer";

export default combineReducers({
  item: itemsReducer,
  catalog: catalogReducer
});
