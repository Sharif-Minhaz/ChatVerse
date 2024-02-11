import { useEffect } from "react";

import { useSocketContext } from "../contexts/SocketContext";
import useConversation from "../store/useConversation";

import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { setMessages } = useConversation();

	useEffect(() => {
		socket?.on(
			"newMessage",
			(newMessage) => {
				newMessage.shouldShake = true;
				const sound = new Audio(notificationSound);
				sound.play();
				setMessages((prev) => [...prev, newMessage]);
			},
			(err) => {
				console.error("Error receiving newMessage:", err.message);
			}
		);

		return () => socket?.off("newMessage");
	}, [socket, setMessages]);
};
export default useListenMessages;
