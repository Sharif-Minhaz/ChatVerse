import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../contexts/AuthContext";
import { fetcher } from "../utils/axios";

export const useLogin = () => {
	const { setAuthUser } = useAuthContext();
	const [loading, setLoading] = useState(false);

	const login = async ({ username, password }) => {
		const success = handleInputErrors({ username, password });
		if (!success) return;

		setLoading(true);

		try {
			const res = await fetcher.post(`/auth/login`, {
				username,
				password,
			});

			localStorage.setItem("chat-user", JSON.stringify(res.data));
			setAuthUser(res.data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, login };
};

function handleInputErrors({ username, password }) {
	if (!username || !password) {
		toast.error("Please fill in all fields");
		return false;
	}

	return true;
}
