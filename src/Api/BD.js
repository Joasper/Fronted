import axios from "axios";

export const BD = axios.create({
  baseURL: "http://localhost:2000/api",
});
