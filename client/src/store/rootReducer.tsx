import { combineReducers } from "redux";

import employeesReducer from "../Employees/store/reducer";

const rootReducer = combineReducers({
  employees: employeesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;