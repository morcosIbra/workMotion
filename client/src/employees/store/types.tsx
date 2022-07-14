export interface EmployeeProfile {
  id: number;
  name: string;
  status: string;
}

export interface EmployeesState {
  profiles: EmployeeProfile[];
  loadingProfiles: boolean;
  error: string | null;
}

export enum ActionTypes {
  FETCH_PROFILES = "FETCH_PROFILES",
  FETCH_PROFILES_SUCCESS = "FETCH_PROFILES_SUCCESS",
  FETCH_PROFILES_FAILED = "FETCH_PROFILES_FAILED",
  UPDATE_PROFILE = "UPDATE_PROFILE",
  UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS",
  UPDATE_PROFILE_FAILED = "UPDATE_PROFILE_FAILED",
  SET_ERROR = "SET_ERROR"
}

export interface FetchProfiles {
  type: ActionTypes.FETCH_PROFILES;
}

export interface FetchProfilesSuccess {
  type: ActionTypes.FETCH_PROFILES_SUCCESS, payload: EmployeeProfile[]
}

export interface FetchProfilesFailure {
  type: ActionTypes.FETCH_PROFILES_FAILED
  payload: string;
}

export interface UpdateProfilePayload {
  id: number, body: Record<string, unknown>
};

export interface UpdateProfile {
  type: ActionTypes.UPDATE_PROFILE,
  payload: UpdateProfilePayload;
}

export interface UpdateProfileSuccess {
  type: ActionTypes.UPDATE_PROFILE_SUCCESS,
  payload: EmployeeProfile;
}

export interface UpdateProfileFailure {
  type: ActionTypes.UPDATE_PROFILE_FAILED,
  payload: string
}

export interface SetError {
  type: ActionTypes.SET_ERROR,
  payload: string
}

export type EmployeesActions =
  | FetchProfiles
  | FetchProfilesSuccess
  | FetchProfilesFailure
  | UpdateProfile
  | UpdateProfileSuccess
  | UpdateProfileFailure
  | SetError;