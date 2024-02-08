import express from "express";
import { getUsersForSidebarController } from "../controllers/user.controller.js";
import { protectedRoute } from "../middlewares/protectedRoute.js";
const router = express.Router();

router.get("/", protectedRoute, getUsersForSidebarController);

export default router;
