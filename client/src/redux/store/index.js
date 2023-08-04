import {  createStore, applyMiddleware } from "redux";
import { composeWithDevTool } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducer";

export const store = createStore(rootReducer, composeWithDevTool(applyMiddleware(thunk)));