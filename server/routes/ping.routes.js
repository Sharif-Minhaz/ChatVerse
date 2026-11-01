import express from "express";
import mongoose from "mongoose";

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		await mongoose.connection.db.admin().ping();

		res.json({
			status: "ok",
			db: {
				state: "connected",
				name: "chatVerseDB",
			},
			timestamp: new Date().toISOString(),
		});
	} catch (error) {
		console.error("Database ping failed:", error.message);
		res.status(503).json({
			status: "error",
			db: {
				state: "disconnected",
				name: "chatVerseDB",
			},
			timestamp: new Date().toISOString(),
		});
	}
});

export default router;
