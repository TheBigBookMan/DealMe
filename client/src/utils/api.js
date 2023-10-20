import axios from "axios";

export const api = axios.create({
    // ? Loxleys
    // baseURL: "http://192.168.1.93:3001/api/",
    // ? Home
    // baseURL: "http://10.1.1.105:3001/api/",
    //? Work
    baseURL: "http://192.168.1.105:3001/api/",
});
