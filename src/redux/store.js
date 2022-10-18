import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { userReducer } from "./reducers/fetchReducer";
import thunk from "redux-thunk";
import dataReducer from "./reducers/dataReducer";

const rootReducer = combineReducers({deta: userReducer , dataa:dataReducer });
const store = legacy_createStore(rootReducer,applyMiddleware(thunk));



export default store;