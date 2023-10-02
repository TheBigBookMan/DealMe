import axios from "axios";

export const api = axios.create({
    // ? Loxleys
    baseURL: "http://192.168.1.93:3001/api/",
    // ? Home
    // baseURL: "http://192.168.56.1:3001/api/",
});
