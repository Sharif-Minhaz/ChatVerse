import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		credentials: true,
		origin: ["https://chatverse-9vo5.onrender.com"],
	},
});

const userSocketMap = {};

export const getReceiverSocketId = (receiverId) => {
	return userSocketMap[receiverId];
};

io.on("connection", (socket) => {
	console.log("a user connected", socket.id);

	const userId = socket.handshake.query.userId;

	if (userId) userSocketMap[userId] = socket.id;

	io.emit("getOnlineUsers", Object.keys(userSocketMap));

	socket.on("disconnect", (reason) => {
		if (reason === "io server disconnect") {
			console.error("Server-side disconnect");
		} else if (reason === "transport error") {
			console.error("Transport error:", reason.description);
		} else {
			console.log("Disconnected:", reason);
		}

		console.log("user disconnected", socket.id);
		delete userSocketMap[userId];
		io.emit("getOnlineUsers", Object.keys(userSocketMap));
	});

	io.on("error", (err) => {
		console.error("Socket.IO error:", err.message);
	});
});

export { app, io, server };
