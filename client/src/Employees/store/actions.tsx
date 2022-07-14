import { ActionTypes, SetError, EmployeeProfile, FetchProfiles, FetchProfilesFailure, FetchProfilesSuccess, UpdateProfile, UpdateProfileFailure, UpdateProfilePayload, UpdateProfileSuccess } from "./types";

export const fetchProfiles = (): FetchProfiles => {
  return { type: ActionTypes.FETCH_PROFILES };
};

export const fetchProfilesSuccess = (payload:EmployeeProfile[]):FetchProfilesSuccess => {
  return { type: ActionTypes.FETCH_PROFILES_SUCCESS, payload };
};

export const fetchProfilesFailure = (payload: string):FetchProfilesFailure => {
  return { type: ActionTypes.FETCH_PROFILES_FAILED, payload };
};

export const updateProfile = ({id, body}: UpdateProfilePayload):UpdateProfile => {
  return { type: ActionTypes.UPDATE_PROFILE, payload:{id, body} };
};

export const updateProfileSuccess = (payload:EmployeeProfile):UpdateProfileSuccess => {
  return { type: ActionTypes.UPDATE_PROFILE_SUCCESS, payload };
};

export const updateProfileFailure = (payload: string): UpdateProfileFailure => {
  return { type: ActionTypes.UPDATE_PROFILE_FAILED, payload };
};

export const setError = (payload: string): SetError => {
  return { type: ActionTypes.SET_ERROR, payload };
};

export const actionTypes = {}
