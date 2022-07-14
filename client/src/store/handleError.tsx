import axios, { AxiosError } from "axios";

export const handleAsyncActionError = (error : unknown) =>{
  if (axios.isAxiosError(error)) {
    const serverError = error as AxiosError;
    return serverError.message;
  }
  return 'Something went wrong, Please contact your IT';
}