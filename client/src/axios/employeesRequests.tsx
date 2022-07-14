import axios from "axios";
import { EmployeeProfile } from "../Employees/store/types";
const employeesAxios = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/employees`,
});

export const fetchEmployeesRequest = () => employeesAxios.get<EmployeeProfile[]>("");

export const updateEmployeeRequest = (id: number, data: Record<string, unknown>) =>
  employeesAxios.patch<EmployeeProfile>(`/${id}`, data);
