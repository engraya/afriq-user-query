import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://backend-aastq-1.onrender.com/api/v1",
});
