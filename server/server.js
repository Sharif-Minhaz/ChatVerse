import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./db/connectToMongoDB.js";

import authRoutes from "./routes/auth.routes.js";

const app = express();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

app.use("/api/auth", authRoutes);

connectToMongoDB()
	.then(() => {
		app.listen(PORT, () => console.info(`Server is running at: http://localhost:${PORT}`));
	})
	.catch((err) => console.error(err.message));
