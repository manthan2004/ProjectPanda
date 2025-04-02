import {applyMiddleWare,combineReducers,legacy_createStore}from "redux";
import {thunk} from "redux-thunk";
import { projectReducer } from "./Project/Reducer";
import authReducer from "./Auth/Reducer";
const rootReducer=combineReducers({
    auth:authReducer,
    project:projectReducer
});
export const store=legacy_createStore(rootReducer,applyMiddleWare(thunk));