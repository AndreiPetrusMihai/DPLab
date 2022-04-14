import { axiosInstance } from "./axios";

export const getRobotsApi = () => {
  return axiosInstance.get("users").then((res) => {
    return res.data;
  });
};
