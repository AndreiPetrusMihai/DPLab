import { axiosInstance } from "./axios";

export const getRobots = () => {
  return axiosInstance.get("users").then((res) => res.data);
};
