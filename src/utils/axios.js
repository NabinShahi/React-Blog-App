import axios from "axios";

const token = localStorage.getItem("user-token");
export const axiosInstance = axios.create({baseURL:process.env.REACT_APP_BASE_URL});



axiosInstance.defaults.headers.post["Content-Type"] = "application/json";

axiosInstance.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    alert("Request failed. Please check your internet connection");
    return Promise.reject(err);
  }
);
