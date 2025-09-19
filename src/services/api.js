import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://starholiday.demovoting.com/api",
  // baseURL: "http://127.0.0.1:8000/api",
  fileURL: "http://127.0.0.1:8000/uploads",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default axiosInstance;
