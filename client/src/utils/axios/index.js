import axios from "axios";

export const fetcher = axios.create({
	baseURL: "http://localhost:5000/api/",
	timeout: 2000,
	withCredentials: true,
	headers: { "Access-Control-Allow-Credentials": true, "Content-Type": "application/json" },
});
