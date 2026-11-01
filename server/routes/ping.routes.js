import express from "express";
import mongoose from "mongoose";
import connectToMongoDB from "../db/connectToMongoDB.js";

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		await connectToMongoDB();

		const state = mongoose.connection.readyState;
		const stateMap = {
			0: "disconnected",
			1: "connected",
			2: "connecting",
			3: "disconnecting",
		};
		const isHealthy = state === 1;

		res.status(isHealthy ? 200 : 503).json({
			status: isHealthy ? "ok" : "degraded",
			db: {
				state: stateMap[state] ?? "unknown",
				name: mongoose.connection.name ?? null,
			},
			timestamp: new Date().toISOString(),
		});
	} catch (error) {
		console.error("Database health check failed:", error.message);
		res.status(503).json({
			status: "error",
			db: { state: "disconnected" },
			message: error instanceof Error ? error.message : "Unknown error",
			timestamp: new Date().toISOString(),
		});
	}
});

export default router;
