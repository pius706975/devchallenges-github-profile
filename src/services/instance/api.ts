import { VITE_BASE_URL } from "@/config/env";
import axios from "axios";

const instance = axios.create({
    baseURL: VITE_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;
