import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

//В параметры передаем корневой reducer
export const store = createStore(rootReducer, applyMiddleware(thunk))