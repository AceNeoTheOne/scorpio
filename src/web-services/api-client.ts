import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "http://localhost:3000/api/",
  //params: {
  //key: "a71e96337a9a456eafc3c8a1b4a2f0dc",
  //},
  headers: {
    "x-api-key": "a71e96337a9a456eafc3c8a1b4a2f0dc",
  },
});

export { CanceledError };
