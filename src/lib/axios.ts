import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.ENDPOINT_URL || "http://localhost:8008",
});

export { axiosInstance };
