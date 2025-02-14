import axios from "axios";

export const API_URL: string = "/api";
export const fakeApi: string = "http://localhost:5000/data";

export const apiAxios = axios.create({
    baseURL: API_URL,
})