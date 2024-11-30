import axios from "axios";

export const API_URL: string = "/api";

export const apiAxios = axios.create({
    baseURL: API_URL,
})