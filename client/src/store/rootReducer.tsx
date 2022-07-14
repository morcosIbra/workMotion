import { combineReducers } from "redux";

import employeesReducer from "../employees/store/reducer";

const rootReducer = combineReducers({
  employees: employeesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;