import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (request) => request,
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use((response) => response);

export default axiosInstance;
