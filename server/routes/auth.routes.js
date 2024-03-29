import express from "express";
import {
	loginController,
	logoutController,
	signupController,
} from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/login", loginController);

router.post("/signup", signupController);

router.post("/logout", logoutController);

export default router;
