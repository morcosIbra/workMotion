import initialState from "./initialState";
import { ActionTypes, EmployeeProfile, EmployeesActions, EmployeesState } from "./types";

const employeesReducer = (state = initialState, action: EmployeesActions): EmployeesState => {
  switch (action.type) {
    case ActionTypes.FETCH_PROFILES:
      return {
        ...state,
        loadingProfiles: true,
      };
    case ActionTypes.FETCH_PROFILES_SUCCESS:
      return {
        ...state,
        profiles: action.payload,
        loadingProfiles: false
      };
    case ActionTypes.FETCH_PROFILES_FAILED:
      return {
        ...state,
        loadingProfiles: false,
        error: action.payload,
      };
    case ActionTypes.UPDATE_PROFILE_SUCCESS: {
      const payload = action.payload;
      const newState: EmployeesState = {
        ...state,
      };
      const profileIndex = newState.profiles.findIndex(
        (profile: EmployeeProfile) => profile.id === payload.id
      );
      if (profileIndex > -1) newState.profiles[profileIndex] = payload;
      return newState;
    }
    case ActionTypes.UPDATE_PROFILE_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case ActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default employeesReducer;
