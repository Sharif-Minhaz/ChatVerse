import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../contexts/AuthContext";
import { fetcher } from "../utils/axios";

export const useLogout = () => {
	const { setAuthUser } = useAuthContext();
	const [loading, setLoading] = useState(false);

	const logout = async () => {
		setLoading(true);
		try {
			const res = await fetcher.post(`/auth/logout`);

			if (res.status !== 200) {
				throw new Error("Something went wrong");
			}

			localStorage.removeItem("chat-user");
			setAuthUser(null);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, logout };
};
