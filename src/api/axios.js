import axios from "axios";

// Instancia base apuntando al API Gateway
const api = axios.create({
  baseURL: "http://localhost:8080", // API Gateway
});

// Interceptor: agrega token en cada request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;