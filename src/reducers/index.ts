import {combineReducers} from "redux";
import selectedAppsReducer from "./selectedAppsReducer";
import accessRightsReducer from "./accessRightsReducer";
import {STATE, AccessRights} from "../actions";

export interface StoreState {
    apps: STATE;
    accessRights: AccessRights;
}

export default combineReducers<StoreState>({
    apps: selectedAppsReducer,
    accessRights: accessRightsReducer
});
