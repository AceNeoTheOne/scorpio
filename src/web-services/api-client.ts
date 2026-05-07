import axios, { CanceledError } from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

export default axios.create({
  baseURL: "http://localhost:3000/api/",
  //params: {
  //key: "a71e96337a9a456eafc3c8a1b4a2f0dc",
  //},
  withCredentials: true,
  headers: {
    "x-api-key": apiKey,
  },
});

export { CanceledError };
