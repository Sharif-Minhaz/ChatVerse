import axios from "axios";

export const fetcher = axios.create({
	baseURL: "https://chatverse-9vo5.onrender.com/api/",
	timeout: 2000,
	withCredentials: true,
	headers: { "Access-Control-Allow-Credentials": true, "Content-Type": "application/json" },
});
