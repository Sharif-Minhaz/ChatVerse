import { useEffect, useState } from "react";

import { fetcher } from "./../utils/axios";

export const useGetConversation = () => {
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState([]);

	useEffect(() => {
		async function loadConversation() {
			try {
				setLoading(true);
				const res = await fetcher.get("/users");

				setConversations(res.data);
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
