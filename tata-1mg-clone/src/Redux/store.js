import { applyMiddleware, legacy_createStore } from "redux";
import { combineReducers } from "redux";
import { reducer as AdminAuth } from "./AdminAuth/reducer";
import { reducer as authReducer } from "./AuthReducer/reducer";
import {reducer as productReducer } from "./productReducer/reducer";
import { reducer as allProdcutReducer } from "./AllProductsReducer/reducer";
import {reducer as AdminUserData} from './AdminUserReducer/reducer'
import {reducer as AdminAlldataReducer} from './AdminAlldataReducer/reducer'
import {reducer as CRUDReducer} from './AdminCRUD/reducer'
import thunk from "redux-thunk";
const rootreducer = (combineReducers({
    AdminAuth,
    authReducer,
    productReducer,
    allProdcutReducer,
    AdminUserData, 
    AdminAlldataReducer,
    CRUDReducer
}))

export const store = legacy_createStore(rootreducer,applyMiddleware(thunk));