import axios from "axios";

export const request = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:4000",
});
