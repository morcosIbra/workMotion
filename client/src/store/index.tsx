import { legacy_createStore as createStore } from "redux";
import { applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import employeesSagas from "../Employees/store/asyncActions";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware);


export const store = createStore(rootReducer, composeEnhancers(middleware));
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

sagaMiddleware.run(employeesSagas);
