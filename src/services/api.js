import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocletnotes-api.onrender.com"
}) 