import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:11111/v1/api",
});

export { axiosClient };
