import axios from "axios";

export const api = axios.create({
    baseURL: "http://192.168.1.93:3001/api/",
});
