import express from "express";
import { getMessagesController, sendMessageController } from "../controllers/message.controller.js";
import { protectedRoute } from "../middlewares/protectedRoute.js";

const router = express.Router();

router.get("/:id", protectedRoute, getMessagesController);
router.post("/send/:id", protectedRoute, sendMessageController);

export default router;
