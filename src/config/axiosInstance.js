import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 20000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "**",
    "Access-Control-Allow-Methods": "POST, PUT, GET, OPTIONS, DELETE",
  },
});
export const STATUS_CODE = {
  0: { status: false, message: "skipped" },
  200: { status: true, message: "OK" },
  201: { status: true, message: "Created" },
  400: { status: false, message: "Bad Request response status code" },
  401: { status: false, message: "Unauthorized" },
  403: { status: false, message: "Forbidden" },
  404: { status: false, message: "Not found" },
  500: { status: false, message: "Internal Server ErrorHTTP" },
};

API.interceptors.request.use(
  async (config) => {
    const accessToken = await localStorage.getItem("token");
    if (accessToken != null) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    if (error.response.status === STATUS_CODE[400]) {
      alert("Error 400");
    }
    if (error.response.status === STATUS_CODE[500]) {
      alert("Server Error");
    }
    return Promise.reject(error.response);
  }
);

export default API;
