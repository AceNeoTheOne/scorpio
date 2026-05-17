import axios, { CanceledError } from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

export default axios.create({
  baseURL: "https://api.itl-services.us:8443/scorpio/",
  //baseURL: "https://68.203.251.124:8443/scorpio/",
  //baseURL: "https://192.168.37.19:8443/scorpio/",
  //baseURL: "https://localhost:8443/scorpio/",
  //params: {
  //key: "",
  //},
  withCredentials: true,
  headers: {
    "x-api-key": apiKey,
  },
});

export { CanceledError };
