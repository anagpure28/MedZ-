import { applyMiddleware, legacy_createStore } from "redux";
import { combineReducers } from "redux";
import { reducer as AdminAuth } from "./AdminAuth/reducer";

import thunk from "redux-thunk";
const rootreducer = (combineReducers({
    AdminAuth,
}))

export const store = legacy_createStore(rootreducer,applyMiddleware(thunk))