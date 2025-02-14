import axios from "axios";

export const API_URL: string = "http://localhost:8080/api/v1";
export const fakeApi: string = "http://localhost:5000/data";

export const apiAxios = axios.create({
    baseURL: API_URL,
})