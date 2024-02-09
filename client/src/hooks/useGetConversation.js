import { useEffect, useState } from "react";

export const useGetConversation = () => {
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState([]);

	useEffect(() => {
		async function loadConversation() {
			try {
				setLoading(true);
				const res = await fetch("/api/users");
				const data = await res.json();

				if (data.error) {
					throw new Error(data.error);
				}

				setConversations(data);
			} catch (error) {
				throw new Error(error.message);
			} finally {
				setLoading(false);
			}
		}

		loadConversation();
	}, []);

	return { loading, conversations };
};
