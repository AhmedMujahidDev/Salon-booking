import axios from "axios";

const apiPrefix = "/api/v1";
const configuredBaseUrl = import.meta.env.VITE_API_URL?.replace(/\/+$/, "");
const baseURL = configuredBaseUrl
  ? configuredBaseUrl.endsWith(apiPrefix)
    ? configuredBaseUrl
    : `${configuredBaseUrl}${apiPrefix}`
  : apiPrefix;

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;